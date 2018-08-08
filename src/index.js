import * as React from 'react';
import PropTypes from 'prop-types';
import * as Highlighter from 'react-highlight-words';
import './index.css';

const types = {
  address: 'address',
  company: 'party',
  bank: 'bank'
};

class ReactDadata extends React.Component {
  state = {
    query: this.props.query || '',
    inputFocused: false,
    showSuggestions: true,
    suggestions: [],
    suggestionIndex: 0,
    isValid: false
  };

  textInput = React.createRef();
  xhr = new XMLHttpRequest();

  componentDidMount = () => {
    if (this.props.query) {
      this.fetchSuggestions();
    }
  };

  onInputFocus = () => {
    this.setState({ inputFocused: true });
  };

  onInputBlur = () => {
    this.setState({ inputFocused: false });
  };

  onInputChange = event => {
    const { value } = event.target;

    this.setState({ query: value, showSuggestions: true }, () => {
      this.fetchSuggestions();
    });
  };

  onKeyPress = event => {
    const { suggestionIndex, suggestions } = this.state;

    if (event.which === 40 && suggestionIndex < suggestions.length - 1) {
      // Arrow down
      this.setState(prevState => ({ suggestionIndex: prevState.suggestionIndex + 1 }));
    } else if (event.which === 38 && suggestionIndex > 0) {
      // Arrow up
      this.setState(prevState => ({ suggestionIndex: prevState.suggestionIndex - 1 }));
    } else if (event.which === 13 && suggestionIndex >= 0) {
      // Enter
      this.selectSuggestion(this.state.suggestionIndex);
    }
  };

  fetchSuggestions = () => {
    this.xhr.abort();

    this.xhr.open('POST', `https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/${types[this.props.type]}`);
    this.xhr.setRequestHeader('Accept', 'application/json');
    this.xhr.setRequestHeader('Authorization', `Token ${this.props.token}`);
    this.xhr.setRequestHeader('Content-Type', 'application/json');
    this.xhr.send(
      JSON.stringify({
        query: this.state.query,
        count: this.props.count || 10
      })
    );

    this.xhr.onreadystatechange = () => {
      if (this.xhr.readyState !== 4) {
        return;
      }

      if (this.xhr.status === 200) {
        const { suggestions } = JSON.parse(this.xhr.response);

        if (suggestions) {
          this.setState({ suggestions, suggestionIndex: 0 });
        }
      }
    };
  };

  onSuggestionClick = index => {
    this.selectSuggestion(index);
  };

  selectSuggestion = index => {
    const { suggestions } = this.state;

    const { value } = suggestions[index];
    this.setState({
      query: value,
      showSuggestions: false
    });

    if (this.props.onChange) {
      this.props.onChange(suggestions[index]);
    }
  };

  getHighlightWords = () => {
    const wordsToPass = ['г', 'респ', 'ул', 'р-н', 'село', 'деревня', 'поселок', 'пр-д', 'пл', 'к', 'кв', 'обл', 'д'];
    let words = this.state.query.replace(',', '').split(' ');
    words = words.filter(word => {
      return wordsToPass.indexOf(word) < 0;
    });
    return words;
  };

  render() {
    const { suggestionIndex, query, inputFocused, suggestions, showSuggestions } = this.state;

    const SuggestionInfo = ({ data }) => (
      <div className="react-dadata__suggestion-info">
        <span>
          {this.props.type === 'company' ? data.inn : data.bic}, {data.address.value}
        </span>
      </div>
    );

    const suggestionsList = inputFocused &&
      showSuggestions &&
      !!suggestions.length && (
        <div className="react-dadata__suggestions">
          <div className="react-dadata__suggestion-note">Выберите вариант или продолжите ввод</div>
          {suggestions.map(({ value, data }, index) => (
            <div
              key={value + index}
              onMouseDown={() => {
                this.onSuggestionClick(index);
              }}
              className={`react-dadata__suggestion ${index === suggestionIndex && 'react-dadata__suggestion--current'}`}
            >
              <Highlighter
                highlightClassName="react-dadata--highlighted"
                searchWords={this.getHighlightWords()}
                textToHighlight={value}
              />
              {this.props.type !== 'address' && <SuggestionInfo data={data} />}
            </div>
          ))}
        </div>
      );

    return (
      <div className={`react-dadata react-dadata__container ${this.props.className}`}>
        <input
          className="react-dadata__input"
          placeholder={this.props.placeholder || ''}
          value={query}
          ref={input => {
            this.textInput = input;
          }}
          onChange={this.onInputChange}
          onKeyDown={this.onKeyPress}
          onFocus={this.onInputFocus}
          onBlur={this.onInputBlur}
          autoComplete={this.props.autocomplete || 'off'}
        />
        {suggestionsList}
      </div>
    );
  }
}

ReactDadata.propTypes = {
  token: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  query: PropTypes.string,
  count: PropTypes.number,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  autocomplete: PropTypes.bool,
  onChange: PropTypes.func
};

export default ReactDadata;

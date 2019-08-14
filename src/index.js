import * as React from 'react';
import PropTypes from 'prop-types';
import Highlighter from 'react-highlight-words';
import './index.css';

const wordsToPass = ['г', 'респ', 'ул', 'р-н', 'село', 'деревня', 'поселок', 'пр-д', 'пл', 'к', 'кв', 'обл', 'д'];

const defaultSuggestion = {
  data: {},
  unrestricted_value: '',
  value: ''
};

const getHighlightWords = query => {
  const words = query.replace(',', '').split(' ');
  const filteredWords = words.filter(word => wordsToPass.indexOf(word) < 0);
  return filteredWords;
};

const SuggestionInfo = ({ data, type }) => (
  <div className="react-dadata__suggestion-info">
    <span>
      {type === 'party' ? data.inn : data.bic} {data.address.value}
    </span>
  </div>
);

const SuggestionsList = ({ suggestions, suggestionIndex, query, type, onSuggestionClick }) => (
  <div className="react-dadata__suggestions">
    <div className="react-dadata__suggestion-note">
      <span className="suggestion-note_arrow">
        <svg width="34" height="16" viewBox="0 0 44 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25.9 20.1H41.2C42.1 20.1 42.9 19.4 42.9 18.4V3.1C42.9 2.2 42.1 1.4 41.2 1.4H25.9C24.9 1.4 24.2 2.2 24.2 3.1V18.4C24.2 19.4 25 20.1 25.9 20.1Z" stroke="#424242" strokeWidth="1.122" strokeMiterlimit="10"/>
          <path d="M33.4295 6.62049C33.4295 7.32049 33.4295 8.0205 33.4295 8.7205C33.4295 10.9205 33.4295 13.2205 33.4295 15.5205C33.4295 15.6205 33.4295 15.6205 33.4295 15.7205C33.4295 15.8205 33.5295 15.9205 33.6295 15.9205C33.7295 15.9205 33.8295 15.8205 33.8295 15.7205C33.8295 15.6205 33.8295 15.6205 33.8295 15.5205C33.8295 12.6205 33.8295 9.82049 33.8295 6.92049C33.8295 6.82049 33.8295 6.8205 33.8295 6.7205C33.9295 6.8205 33.9295 6.8205 34.0295 6.8205C34.4295 7.2205 34.9295 7.72049 35.3295 8.12049C35.4295 8.22049 35.5295 8.2205 35.6295 8.2205C35.7295 8.2205 35.8295 8.12049 35.8295 8.02049C35.8295 7.92049 35.8295 7.8205 35.7295 7.7205C35.4295 7.4205 35.1295 7.1205 34.8295 6.8205C34.5295 6.5205 34.2295 6.2205 33.8295 5.8205C33.6295 5.6205 33.5295 5.6205 33.4295 5.8205C32.8295 6.4205 32.2295 7.0205 31.5295 7.7205C31.3295 7.9205 31.4295 8.12049 31.6295 8.12049C31.7295 8.12049 31.8295 8.02049 31.9295 8.02049C32.3295 7.62049 32.8295 7.1205 33.2295 6.7205C33.2295 6.7205 33.3295 6.72049 33.4295 6.62049Z" fill="#424242" stroke="#424242" strokeWidth="0.8" strokeMiterlimit="10"/>
          <path d="M0.699997 3.1V18.4C0.699997 19.4 1.5 20.1 2.4 20.1H17.7C18.6 20.1 19.4 19.4 19.4 18.4V3.1C19.4 2.1 18.6 1.4 17.7 1.4H2.4C1.4 1.5 0.699997 2.2 0.699997 3.1Z" stroke="#424242" strokeWidth="1.122" strokeMiterlimit="10"/>
          <path d="M10.3 15C10.3 14.3 10.3 13.6 10.3 12.9C10.3 10.7 10.3 8.4 10.3 6.1C10.3 6 10.3 6 10.3 5.9C10.3 5.8 10.2 5.7 10.1 5.7C9.99999 5.7 9.89999 5.8 9.89999 5.9C9.89999 6 9.89999 6 9.89999 6.1C9.89999 9 9.89999 11.8 9.89999 14.7C9.89999 14.8 9.89999 14.8 9.89999 14.9C9.79999 14.8 9.79999 14.8 9.69999 14.8C9.29999 14.4 8.79999 13.9 8.39999 13.5C8.29999 13.4 8.19999 13.4 8.09999 13.4C7.99999 13.4 7.89999 13.5 7.89999 13.6C7.89999 13.7 7.89999 13.8 7.99999 13.9C8.29999 14.2 8.59999 14.5 8.89999 14.8C9.19999 15.1 9.49999 15.4 9.89999 15.8C10.1 16 10.2 16 10.3 15.8C10.9 15.2 11.5 14.6 12.2 13.9C12.4 13.7 12.3 13.5 12.1 13.5C12 13.5 11.9 13.6 11.8 13.6C11.4 14 10.9 14.5 10.5 14.9C10.4 14.9 10.3 14.9 10.3 15Z" fill="#424242" stroke="#424242" strokeWidth="0.8" strokeMiterlimit="10"/>
        </svg>
      </span>
      <span>навигация</span>
      <span className="suggestion-note_arrow">
        <svg width="18" height="16" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.9 20.1H18.2C19.1 20.1 19.9 19.4 19.9 18.4V3.09999C19.9 2.19999 19.1 1.39999 18.2 1.39999H2.9C1.9 1.39999 1.2 2.19999 1.2 3.09999V18.4C1.2 19.4 2 20.1 2.9 20.1Z" stroke="#424242" strokeWidth="1.122" strokeMiterlimit="10"/>
          <path d="M14.8 10.6C14.1 10.6 13.4 10.6 12.7 10.6C10.5 10.6 8.2 10.6 5.9 10.6C5.8 10.6 5.8 10.6 5.7 10.6C5.6 10.6 5.5 10.7 5.5 10.8C5.5 10.9 5.6 11 5.7 11C5.8 11 5.8 11 5.9 11C8.8 11 11.6 11 14.5 11C14.6 11 14.6 11 14.7 11C14.6 11.1 14.6 11.1 14.6 11.2C14.2 11.6 13.7 12.1 13.3 12.5C13.2 12.6 13.2 12.7 13.2 12.8C13.2 12.9 13.3 13 13.4 13C13.5 13 13.6 13 13.7 12.9C14 12.6 14.3 12.3 14.6 12C14.9 11.7 15.2 11.4 15.6 11C15.8 10.8 15.8 10.7 15.6 10.6C15 9.99999 14.4 9.39999 13.7 8.69999C13.5 8.49999 13.3 8.59999 13.3 8.79999C13.3 8.89999 13.4 8.99999 13.4 9.09999C13.8 9.49999 14.3 9.99999 14.7 10.4C14.7 10.4 14.7 10.5 14.8 10.6Z" fill="#424242" stroke="#424242" strokeWidth="0.8" strokeMiterlimit="10"/>
        </svg>
      </span>
      <span>подстановка</span>
    </div>
    {suggestions.map(({ value, data }, index) => (
      <div
        key={value + index}
        onMouseDown={() => {
          onSuggestionClick(index);
        }}
        className={`react-dadata__suggestion ${index === suggestionIndex && 'react-dadata__suggestion--current'}`}
      >
        <Highlighter
          highlightClassName="react-dadata--highlighted"
          searchWords={getHighlightWords(query)}
          textToHighlight={value}
        />
        {(type === 'party' || type === 'bank') && <SuggestionInfo data={data} type={type} />}
      </div>
    ))}
  </div>
);

class ReactDadata extends React.Component {
  state = {
    query: this.props.query || '',
    type: this.props.type || 'address',
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

  componentDidUpdate = prevProps => {
    if (this.props.query !== prevProps.query) {
      this.setState({ query: this.props.query }, this.fetchSuggestions);
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

    !value && this.clear()
  };

  onKeyPress = event => {
    const { suggestionIndex, suggestions } = this.state;

    if (event.which === 40 && suggestionIndex < suggestions.length - 1) {
      // Arrow down
      this.setState(prevState => ({ suggestionIndex: prevState.suggestionIndex + 1 }));
    } else if (event.which === 38 && suggestionIndex > 0) {
      // Arrow up
      this.setState(prevState => ({ suggestionIndex: prevState.suggestionIndex - 1 }));
    } else if (event.which === 39 && suggestionIndex >= 0) {
      // Arrow right
      this.selectSuggestion(this.state.suggestionIndex, true);
    } else if (event.which === 13 && suggestionIndex >= 0) {
      // Enter
      event.preventDefault();
      event.stopPropagation();
      this.selectSuggestion(this.state.suggestionIndex);
    }
  };

  fetchSuggestions = () => {
    this.xhr.abort();

    const { type } = this.state;
    const { city } = this.props;

    const payload = {
      query: this.state.query,
      count: this.props.count || 10
    };

    if (city && type === 'address') {
      payload.from_bound = { value: 'city' };
      payload.to_bound = { value: 'settlement' };
      payload.value = 'settlement';
    }

    this.xhr.open('POST', `https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/${type}`);
    this.xhr.setRequestHeader('Accept', 'application/json');
    this.xhr.setRequestHeader('Authorization', `Token ${this.props.token}`);
    this.xhr.setRequestHeader('Content-Type', 'application/json');
    this.xhr.send(JSON.stringify(payload));

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

  clear = () => {
    this.setState({
      query: '',
      showSuggestions: false
    });
    this.props.onChange && this.props.onChange(defaultSuggestion);
  };

  selectSuggestion = (index, showSuggestions = false) => {
    const { suggestions } = this.state;

    const { value } = suggestions[index];
    this.setState({
      query: value,
      showSuggestions: showSuggestions
    });

    if (this.props.onChange) {
      this.props.onChange(suggestions[index]);
    }
  };

  render() {
    const { suggestionIndex, query, inputFocused, suggestions, showSuggestions, type } = this.state;
    const { placeholder, autocomplete, styles, allowClear, className } =  this.props;

    const showSuggestionsList = inputFocused && showSuggestions && !!suggestions.length;

    return (
      <div className={`react-dadata react-dadata__container ${className}`} style={styles}>
        <input
          className={`react-dadata__input${allowClear ? ' react-dadata__input-clearable' : ''}`}
          placeholder={placeholder || ''}
          value={query}
          ref={input => {
            this.textInput = input;
          }}
          onChange={this.onInputChange}
          onKeyDown={this.onKeyPress}
          onFocus={this.onInputFocus}
          onBlur={this.onInputBlur}
          autoComplete={autocomplete || 'off'}
        />
        {
          allowClear &&
          query &&
          <span className="react-dadata__input-suffix" onClick={this.clear}>
            <i className="react-dadata__icon react-dadata__icon-clear" />
          </span>
        }
        {showSuggestionsList && (
          <SuggestionsList
            suggestions={suggestions}
            suggestionIndex={suggestionIndex}
            query={query}
            type={type}
            onSuggestionClick={this.onSuggestionClick}
          />
        )}
      </div>
    );
  }
}

ReactDadata.propTypes = {
  autocomplete: PropTypes.bool,
  city: PropTypes.bool,
  className: PropTypes.string,
  count: PropTypes.number,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  query: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
  token: PropTypes.string.isRequired,
  type: PropTypes.string,
  allowClear: PropTypes.bool
};

export default ReactDadata;

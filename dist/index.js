'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactHighlightWords = require('react-highlight-words');

var _reactHighlightWords2 = _interopRequireDefault(_reactHighlightWords);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var types = {
  address: 'address',
  company: 'party',
  bank: 'bank'
};

var ReactDadata = function (_React$Component) {
  _inherits(ReactDadata, _React$Component);

  function ReactDadata(props) {
    _classCallCheck(this, ReactDadata);

    var _this = _possibleConstructorReturn(this, (ReactDadata.__proto__ || Object.getPrototypeOf(ReactDadata)).call(this, props));

    _this.state = {
      query: _this.props.query || '',
      type: _this.props.type || 'address',
      inputFocused: false,
      showSuggestions: true,
      suggestions: [],
      suggestionIndex: 0,
      isValid: false
    };

    _this.onInputFocus = _this.onInputFocus.bind(_this);
    _this.onInputBlur = _this.onInputBlur.bind(_this);
    _this.onInputChange = _this.onInputChange.bind(_this);
    _this.onKeyPress = _this.onKeyPress.bind(_this);
    _this.fetchSuggestions = _this.fetchSuggestions.bind(_this);
    _this.onSuggestionClick = _this.onSuggestionClick.bind(_this);
    _this.selectSuggestion = _this.selectSuggestion.bind(_this);
    _this.getHighlightWords = _this.getHighlightWords.bind(_this);

    _this.textInput = React.createRef();
    _this.xhr = new XMLHttpRequest();
    return _this;
  }

  _createClass(ReactDadata, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.query) {
        this.fetchSuggestions();
      }
    }
  }, {
    key: 'onInputFocus',
    value: function onInputFocus() {
      this.setState({ inputFocused: true });
    }
  }, {
    key: 'onInputBlur',
    value: function onInputBlur() {
      this.setState({ inputFocused: false });
    }
  }, {
    key: 'onInputChange',
    value: function onInputChange(event) {
      var _this2 = this;

      var value = event.target.value;


      this.setState({ query: value, showSuggestions: true }, function () {
        _this2.fetchSuggestions();
      });
    }
  }, {
    key: 'onKeyPress',
    value: function onKeyPress(event) {
      var _state = this.state,
          suggestionIndex = _state.suggestionIndex,
          suggestions = _state.suggestions;


      if (event.which === 40 && suggestionIndex < suggestions.length - 1) {
        // Arrow down
        this.setState(function (prevState) {
          return { suggestionIndex: prevState.suggestionIndex + 1 };
        });
      } else if (event.which === 38 && suggestionIndex > 0) {
        // Arrow up
        this.setState(function (prevState) {
          return { suggestionIndex: prevState.suggestionIndex - 1 };
        });
      } else if (event.which === 13 && suggestionIndex >= 0) {
        // Enter
        this.selectSuggestion(this.state.suggestionIndex);
      }
    }
  }, {
    key: 'fetchSuggestions',
    value: function fetchSuggestions() {
      var _this3 = this;

      this.xhr.abort();

      this.xhr.open('POST', 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/' + types[this.state.type]);
      this.xhr.setRequestHeader('Accept', 'application/json');
      this.xhr.setRequestHeader('Authorization', 'Token ' + this.props.token);
      this.xhr.setRequestHeader('Content-Type', 'application/json');
      this.xhr.send(JSON.stringify({
        query: this.state.query,
        count: this.props.count || 10
      }));

      this.xhr.onreadystatechange = function () {
        if (_this3.xhr.readyState !== 4) {
          return;
        }

        if (_this3.xhr.status === 200) {
          var _JSON$parse = JSON.parse(_this3.xhr.response),
              suggestions = _JSON$parse.suggestions;

          if (suggestions) {
            _this3.setState({ suggestions: suggestions, suggestionIndex: 0 });
          }
        }
      };
    }
  }, {
    key: 'onSuggestionClick',
    value: function onSuggestionClick(index) {
      this.selectSuggestion(index);
    }
  }, {
    key: 'selectSuggestion',
    value: function selectSuggestion(index) {
      var suggestions = this.state.suggestions;
      var value = suggestions[index].value;

      this.setState({
        query: value,
        showSuggestions: false
      });

      if (this.props.onChange) {
        this.props.onChange(suggestions[index]);
      }
    }
  }, {
    key: 'getHighlightWords',
    value: function getHighlightWords() {
      var wordsToPass = ['г', 'респ', 'ул', 'р-н', 'село', 'деревня', 'поселок', 'пр-д', 'пл', 'к', 'кв', 'обл', 'д'];
      var words = this.state.query.replace(',', '').split(' ');
      words = words.filter(function (word) {
        return wordsToPass.indexOf(word) < 0;
      });
      return words;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _state2 = this.state,
          suggestionIndex = _state2.suggestionIndex,
          query = _state2.query,
          inputFocused = _state2.inputFocused,
          suggestions = _state2.suggestions,
          showSuggestions = _state2.showSuggestions,
          type = _state2.type;


      var SuggestionInfo = function SuggestionInfo(_ref) {
        var data = _ref.data;
        return React.createElement(
          'div',
          { className: 'react-dadata__suggestion-info' },
          React.createElement(
            'span',
            null,
            type === 'company' ? data.inn : data.bic,
            ', ',
            data.address.value
          )
        );
      };

      var suggestionsList = inputFocused && showSuggestions && !!suggestions.length && React.createElement(
        'div',
        { className: 'react-dadata__suggestions' },
        React.createElement(
          'div',
          { className: 'react-dadata__suggestion-note' },
          '\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u0438\u043B\u0438 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u0435 \u0432\u0432\u043E\u0434'
        ),
        suggestions.map(function (_ref2, index) {
          var value = _ref2.value,
              data = _ref2.data;
          return React.createElement(
            'div',
            {
              key: value + index,
              onMouseDown: function onMouseDown() {
                _this4.onSuggestionClick(index);
              },
              className: 'react-dadata__suggestion ' + (index === suggestionIndex && 'react-dadata__suggestion--current')
            },
            React.createElement(_reactHighlightWords2.default, {
              highlightClassName: 'react-dadata--highlighted',
              searchWords: _this4.getHighlightWords(),
              textToHighlight: value
            }),
            type !== 'address' && React.createElement(SuggestionInfo, { data: data })
          );
        })
      );

      return React.createElement(
        'div',
        { className: 'react-dadata react-dadata__container ' + this.props.className },
        React.createElement('input', {
          className: 'react-dadata__input',
          placeholder: this.props.placeholder || '',
          value: query,
          ref: function ref(input) {
            _this4.textInput = input;
          },
          onChange: this.onInputChange,
          onKeyDown: this.onKeyPress,
          onFocus: this.onInputFocus,
          onBlur: this.onInputBlur,
          autoComplete: this.props.autocomplete || 'off'
        }),
        suggestionsList
      );
    }
  }]);

  return ReactDadata;
}(React.Component);

ReactDadata.propTypes = {
  token: _propTypes2.default.string.isRequired,
  type: _propTypes2.default.string,
  query: _propTypes2.default.string,
  count: _propTypes2.default.number,
  className: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  autocomplete: _propTypes2.default.bool,
  onChange: _propTypes2.default.func
};

exports.default = ReactDadata;
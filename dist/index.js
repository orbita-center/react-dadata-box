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

var ReactDadata = function (_React$Component) {
  _inherits(ReactDadata, _React$Component);

  function ReactDadata() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ReactDadata);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ReactDadata.__proto__ || Object.getPrototypeOf(ReactDadata)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      query: _this.props.query || '',
      type: _this.props.type || 'address',
      inputFocused: false,
      showSuggestions: true,
      suggestions: [],
      suggestionIndex: 0,
      isValid: false
    }, _this.textInput = React.createRef(), _this.xhr = new XMLHttpRequest(), _this.componentDidMount = function () {
      if (_this.props.query) {
        _this.fetchSuggestions();
      }
    }, _this.onInputFocus = function () {
      _this.setState({ inputFocused: true });
    }, _this.onInputBlur = function () {
      _this.setState({ inputFocused: false });
    }, _this.onInputChange = function (event) {
      var value = event.target.value;


      _this.setState({ query: value, showSuggestions: true }, function () {
        _this.fetchSuggestions();
      });
    }, _this.onKeyPress = function (event) {
      var _this$state = _this.state,
          suggestionIndex = _this$state.suggestionIndex,
          suggestions = _this$state.suggestions;


      if (event.which === 40 && suggestionIndex < suggestions.length - 1) {
        // Arrow down
        _this.setState(function (prevState) {
          return { suggestionIndex: prevState.suggestionIndex + 1 };
        });
      } else if (event.which === 38 && suggestionIndex > 0) {
        // Arrow up
        _this.setState(function (prevState) {
          return { suggestionIndex: prevState.suggestionIndex - 1 };
        });
      } else if (event.which === 13 && suggestionIndex >= 0) {
        // Enter
        _this.selectSuggestion(_this.state.suggestionIndex);
      }
    }, _this.fetchSuggestions = function () {
      _this.xhr.abort();

      _this.xhr.open('POST', 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/' + _this.state.type);
      _this.xhr.setRequestHeader('Accept', 'application/json');
      _this.xhr.setRequestHeader('Authorization', 'Token ' + _this.props.token);
      _this.xhr.setRequestHeader('Content-Type', 'application/json');
      _this.xhr.send(JSON.stringify({
        query: _this.state.query,
        count: _this.props.count || 10,
        parts: _this.props.parts ? [_this.props.parts] || null
      }));

      _this.xhr.onreadystatechange = function () {
        if (_this.xhr.readyState !== 4) {
          return;
        }

        if (_this.xhr.status === 200) {
          var _JSON$parse = JSON.parse(_this.xhr.response),
              suggestions = _JSON$parse.suggestions;

          if (suggestions) {
            _this.setState({ suggestions: suggestions, suggestionIndex: 0 });
          }
        }
      };
    }, _this.onSuggestionClick = function (index) {
      _this.selectSuggestion(index);
    }, _this.selectSuggestion = function (index) {
      var suggestions = _this.state.suggestions;
      var value = suggestions[index].value;

      _this.setState({
        query: value,
        showSuggestions: false
      });

      if (_this.props.onChange) {
        _this.props.onChange(suggestions[index]);
      }
    }, _this.getHighlightWords = function () {
      var wordsToPass = ['г', 'респ', 'ул', 'р-н', 'село', 'деревня', 'поселок', 'пр-д', 'пл', 'к', 'кв', 'обл', 'д'];
      var words = _this.state.query.replace(',', '').split(' ');
      words = words.filter(function (word) {
        return wordsToPass.indexOf(word) < 0;
      });
      return words;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ReactDadata, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          suggestionIndex = _state.suggestionIndex,
          query = _state.query,
          inputFocused = _state.inputFocused,
          suggestions = _state.suggestions,
          showSuggestions = _state.showSuggestions,
          type = _state.type;


      var SuggestionInfo = function SuggestionInfo(_ref2) {
        var data = _ref2.data;
        return React.createElement(
          'div',
          { className: 'react-dadata__suggestion-info' },
          React.createElement(
            'span',
            null,
            type === 'party' ? data.inn : data.bic,
            ' ',
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
        suggestions.map(function (_ref3, index) {
          var value = _ref3.value,
              data = _ref3.data;
          return React.createElement(
            'div',
            {
              key: value + index,
              onMouseDown: function onMouseDown() {
                _this2.onSuggestionClick(index);
              },
              className: 'react-dadata__suggestion ' + (index === suggestionIndex && 'react-dadata__suggestion--current')
            },
            React.createElement(_reactHighlightWords2.default, {
              highlightClassName: 'react-dadata--highlighted',
              searchWords: _this2.getHighlightWords(),
              textToHighlight: value
            }),
            (type === 'party' || type === 'bank') && React.createElement(SuggestionInfo, { data: data })
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
            _this2.textInput = input;
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
  parts: _propTypes2.default.string,
  count: _propTypes2.default.number,
  className: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  autocomplete: _propTypes2.default.bool,
  onChange: _propTypes2.default.func
};

exports.default = ReactDadata;

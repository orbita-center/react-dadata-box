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

var wordsToPass = ['г', 'респ', 'ул', 'р-н', 'село', 'деревня', 'поселок', 'пр-д', 'пл', 'к', 'кв', 'обл', 'д'];

var defaultSuggestion = {
  data: {},
  unrestricted_value: '',
  value: ''
};

var getHighlightWords = function getHighlightWords(query) {
  var words = query.replace(',', '').split(' ');
  var filteredWords = words.filter(function (word) {
    return wordsToPass.indexOf(word) < 0;
  });
  return filteredWords;
};

var SuggestionInfo = function SuggestionInfo(_ref) {
  var data = _ref.data,
      type = _ref.type;
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

var SuggestionsList = function SuggestionsList(_ref2) {
  var suggestions = _ref2.suggestions,
      suggestionIndex = _ref2.suggestionIndex,
      query = _ref2.query,
      type = _ref2.type,
      onSuggestionClick = _ref2.onSuggestionClick,
      _ref2$showNote = _ref2.showNote,
      showNote = _ref2$showNote === undefined ? true : _ref2$showNote;
  return React.createElement(
    'div',
    { className: 'react-dadata__suggestions' },
    showNote && React.createElement(
      'div',
      { className: 'react-dadata__suggestion-note' },
      React.createElement(
        'span',
        { className: 'suggestion-note_arrow' },
        React.createElement(
          'svg',
          { width: '34', height: '16', viewBox: '0 0 44 21', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
          React.createElement('path', { d: 'M25.9 20.1H41.2C42.1 20.1 42.9 19.4 42.9 18.4V3.1C42.9 2.2 42.1 1.4 41.2 1.4H25.9C24.9 1.4 24.2 2.2 24.2 3.1V18.4C24.2 19.4 25 20.1 25.9 20.1Z', stroke: '#424242', strokeWidth: '1.122', strokeMiterlimit: '10' }),
          React.createElement('path', { d: 'M33.4295 6.62049C33.4295 7.32049 33.4295 8.0205 33.4295 8.7205C33.4295 10.9205 33.4295 13.2205 33.4295 15.5205C33.4295 15.6205 33.4295 15.6205 33.4295 15.7205C33.4295 15.8205 33.5295 15.9205 33.6295 15.9205C33.7295 15.9205 33.8295 15.8205 33.8295 15.7205C33.8295 15.6205 33.8295 15.6205 33.8295 15.5205C33.8295 12.6205 33.8295 9.82049 33.8295 6.92049C33.8295 6.82049 33.8295 6.8205 33.8295 6.7205C33.9295 6.8205 33.9295 6.8205 34.0295 6.8205C34.4295 7.2205 34.9295 7.72049 35.3295 8.12049C35.4295 8.22049 35.5295 8.2205 35.6295 8.2205C35.7295 8.2205 35.8295 8.12049 35.8295 8.02049C35.8295 7.92049 35.8295 7.8205 35.7295 7.7205C35.4295 7.4205 35.1295 7.1205 34.8295 6.8205C34.5295 6.5205 34.2295 6.2205 33.8295 5.8205C33.6295 5.6205 33.5295 5.6205 33.4295 5.8205C32.8295 6.4205 32.2295 7.0205 31.5295 7.7205C31.3295 7.9205 31.4295 8.12049 31.6295 8.12049C31.7295 8.12049 31.8295 8.02049 31.9295 8.02049C32.3295 7.62049 32.8295 7.1205 33.2295 6.7205C33.2295 6.7205 33.3295 6.72049 33.4295 6.62049Z', fill: '#424242', stroke: '#424242', strokeWidth: '0.8', strokeMiterlimit: '10' }),
          React.createElement('path', { d: 'M0.699997 3.1V18.4C0.699997 19.4 1.5 20.1 2.4 20.1H17.7C18.6 20.1 19.4 19.4 19.4 18.4V3.1C19.4 2.1 18.6 1.4 17.7 1.4H2.4C1.4 1.5 0.699997 2.2 0.699997 3.1Z', stroke: '#424242', strokeWidth: '1.122', strokeMiterlimit: '10' }),
          React.createElement('path', { d: 'M10.3 15C10.3 14.3 10.3 13.6 10.3 12.9C10.3 10.7 10.3 8.4 10.3 6.1C10.3 6 10.3 6 10.3 5.9C10.3 5.8 10.2 5.7 10.1 5.7C9.99999 5.7 9.89999 5.8 9.89999 5.9C9.89999 6 9.89999 6 9.89999 6.1C9.89999 9 9.89999 11.8 9.89999 14.7C9.89999 14.8 9.89999 14.8 9.89999 14.9C9.79999 14.8 9.79999 14.8 9.69999 14.8C9.29999 14.4 8.79999 13.9 8.39999 13.5C8.29999 13.4 8.19999 13.4 8.09999 13.4C7.99999 13.4 7.89999 13.5 7.89999 13.6C7.89999 13.7 7.89999 13.8 7.99999 13.9C8.29999 14.2 8.59999 14.5 8.89999 14.8C9.19999 15.1 9.49999 15.4 9.89999 15.8C10.1 16 10.2 16 10.3 15.8C10.9 15.2 11.5 14.6 12.2 13.9C12.4 13.7 12.3 13.5 12.1 13.5C12 13.5 11.9 13.6 11.8 13.6C11.4 14 10.9 14.5 10.5 14.9C10.4 14.9 10.3 14.9 10.3 15Z', fill: '#424242', stroke: '#424242', strokeWidth: '0.8', strokeMiterlimit: '10' })
        )
      ),
      React.createElement(
        'span',
        null,
        '\u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F'
      ),
      React.createElement(
        'span',
        { className: 'suggestion-note_arrow' },
        React.createElement(
          'svg',
          { width: '18', height: '16', viewBox: '0 0 21 21', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
          React.createElement('path', { d: 'M2.9 20.1H18.2C19.1 20.1 19.9 19.4 19.9 18.4V3.09999C19.9 2.19999 19.1 1.39999 18.2 1.39999H2.9C1.9 1.39999 1.2 2.19999 1.2 3.09999V18.4C1.2 19.4 2 20.1 2.9 20.1Z', stroke: '#424242', strokeWidth: '1.122', strokeMiterlimit: '10' }),
          React.createElement('path', { d: 'M14.8 10.6C14.1 10.6 13.4 10.6 12.7 10.6C10.5 10.6 8.2 10.6 5.9 10.6C5.8 10.6 5.8 10.6 5.7 10.6C5.6 10.6 5.5 10.7 5.5 10.8C5.5 10.9 5.6 11 5.7 11C5.8 11 5.8 11 5.9 11C8.8 11 11.6 11 14.5 11C14.6 11 14.6 11 14.7 11C14.6 11.1 14.6 11.1 14.6 11.2C14.2 11.6 13.7 12.1 13.3 12.5C13.2 12.6 13.2 12.7 13.2 12.8C13.2 12.9 13.3 13 13.4 13C13.5 13 13.6 13 13.7 12.9C14 12.6 14.3 12.3 14.6 12C14.9 11.7 15.2 11.4 15.6 11C15.8 10.8 15.8 10.7 15.6 10.6C15 9.99999 14.4 9.39999 13.7 8.69999C13.5 8.49999 13.3 8.59999 13.3 8.79999C13.3 8.89999 13.4 8.99999 13.4 9.09999C13.8 9.49999 14.3 9.99999 14.7 10.4C14.7 10.4 14.7 10.5 14.8 10.6Z', fill: '#424242', stroke: '#424242', strokeWidth: '0.8', strokeMiterlimit: '10' })
        )
      ),
      React.createElement(
        'span',
        null,
        '\u043F\u043E\u0434\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430'
      )
    ),
    suggestions.map(function (_ref3, index) {
      var value = _ref3.value,
          data = _ref3.data;
      return React.createElement(
        'div',
        {
          key: value + index,
          onMouseDown: function onMouseDown() {
            onSuggestionClick(index);
          },
          className: 'react-dadata__suggestion ' + (index === suggestionIndex && 'react-dadata__suggestion--current')
        },
        React.createElement(_reactHighlightWords2.default, {
          highlightClassName: 'react-dadata--highlighted',
          searchWords: getHighlightWords(query),
          textToHighlight: value
        }),
        (type === 'party' || type === 'bank') && React.createElement(SuggestionInfo, { data: data, type: type })
      );
    })
  );
};

var ReactDadata = function (_React$Component) {
  _inherits(ReactDadata, _React$Component);

  function ReactDadata() {
    var _ref4;

    var _temp, _this, _ret;

    _classCallCheck(this, ReactDadata);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref4 = ReactDadata.__proto__ || Object.getPrototypeOf(ReactDadata)).call.apply(_ref4, [this].concat(args))), _this), _this.state = {
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
    }, _this.componentDidUpdate = function (prevProps) {
      if (_this.props.query !== prevProps.query) {
        _this.setState({ query: _this.props.query }, _this.fetchSuggestions);
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

      !value && _this.clear();
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
      } else if (event.which === 39 && suggestionIndex >= 0) {
        // Arrow right
        _this.selectSuggestion(_this.state.suggestionIndex, true);
      } else if (event.which === 13 && suggestionIndex >= 0) {
        // Enter
        event.preventDefault();
        event.stopPropagation();
        _this.selectSuggestion(_this.state.suggestionIndex);
      }
    }, _this.fetchSuggestions = function () {
      _this.xhr.abort();

      var type = _this.state.type;
      var city = _this.props.city;


      var payload = {
        query: _this.state.query,
        count: _this.props.count || 10
      };

      if (city && type === 'address') {
        payload.from_bound = { value: 'city' };
        payload.to_bound = { value: 'settlement' };
        payload.value = 'settlement';
      }

      _this.xhr.open('POST', 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/' + type);
      _this.xhr.setRequestHeader('Accept', 'application/json');
      _this.xhr.setRequestHeader('Authorization', 'Token ' + _this.props.token);
      _this.xhr.setRequestHeader('Content-Type', 'application/json');
      _this.xhr.send(JSON.stringify(payload));

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
    }, _this.clear = function () {
      _this.setState({
        query: '',
        showSuggestions: false
      });
      _this.props.onChange && _this.props.onChange(defaultSuggestion);
    }, _this.selectSuggestion = function (index) {
      var showSuggestions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var suggestions = _this.state.suggestions;
      var value = suggestions[index].value;

      _this.setState({
        query: value,
        showSuggestions: showSuggestions
      });

      if (_this.props.onChange) {
        _this.props.onChange(suggestions[index]);
      }
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
      var _props = this.props,
          placeholder = _props.placeholder,
          autocomplete = _props.autocomplete,
          styles = _props.styles,
          allowClear = _props.allowClear,
          className = _props.className,
          showNote = _props.showNote;


      var showSuggestionsList = inputFocused && showSuggestions && !!suggestions.length;

      return React.createElement(
        'div',
        { className: 'react-dadata react-dadata__container ' + className, style: styles },
        React.createElement('input', {
          className: 'react-dadata__input' + (allowClear ? ' react-dadata__input-clearable' : ''),
          placeholder: placeholder || '',
          value: query,
          ref: function ref(input) {
            _this2.textInput = input;
          },
          onChange: this.onInputChange,
          onKeyDown: this.onKeyPress,
          onFocus: this.onInputFocus,
          onBlur: this.onInputBlur,
          autoComplete: autocomplete || 'off'
        }),
        allowClear && query && React.createElement(
          'span',
          { className: 'react-dadata__input-suffix', onClick: this.clear },
          React.createElement('i', { className: 'react-dadata__icon react-dadata__icon-clear' })
        ),
        showSuggestionsList && React.createElement(SuggestionsList, {
          suggestions: suggestions,
          suggestionIndex: suggestionIndex,
          query: query,
          type: type,
          showNote: showNote,
          onSuggestionClick: this.onSuggestionClick
        })
      );
    }
  }]);

  return ReactDadata;
}(React.Component);

ReactDadata.propTypes = {
  autocomplete: _propTypes2.default.bool,
  city: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  count: _propTypes2.default.number,
  onChange: _propTypes2.default.func,
  placeholder: _propTypes2.default.string,
  query: _propTypes2.default.string,
  style: _propTypes2.default.objectOf(_propTypes2.default.string),
  token: _propTypes2.default.string.isRequired,
  type: _propTypes2.default.string,
  allowClear: _propTypes2.default.bool,
  showNote: _propTypes2.default.bool
};

exports.default = ReactDadata;
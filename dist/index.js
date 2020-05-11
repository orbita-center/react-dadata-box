'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.ReactDaDataBox = undefined;

var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };

var _typeof =
  typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
    ? function(obj) {
        return typeof obj;
      }
    : function(obj) {
        return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
      };

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactHighlightWords = require('react-highlight-words');

var _reactHighlightWords2 = _interopRequireDefault(_reactHighlightWords);

require('./index.css');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }
    newObj.default = obj;
    return newObj;
  }
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === 'object' || typeof call === 'function') ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : (subClass.__proto__ = superClass);
}

var wordsToPass = ['г', 'респ', 'ул', 'р-н', 'село', 'деревня', 'поселок', 'пр-д', 'пл', 'к', 'кв', 'обл', 'д'];

var defaultSuggestion = {
  data: {},
  unrestricted_value: '',
  value: ''
};

var defaultEndpoint = {
  api: 'suggestions/api/4_1/rs/suggest',
  host: 'https://suggestions.dadata.ru'
};

var defaultClasses = {
  'react-dadata__custom-action': 'react-dadata__suggestion react-dadata__custom-action',
  'react-dadata__suggestion': 'react-dadata__suggestion',
  'react-dadata__suggestion-note': 'react-dadata__suggestion-note',
  'react-dadata__suggestions': 'react-dadata__suggestions'
};

var getStylingProps = function getStylingProps(baseClass) {
  var customStyles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var additionalClass = arguments[2];

  return customStyles[baseClass] && _typeof(customStyles[baseClass]) === 'object'
    ? {
        className: ((defaultClasses[baseClass] || baseClass) + ' ' + (additionalClass || '')).trim(),
        style: customStyles[baseClass]
      }
    : {
        className: ((defaultClasses[baseClass] || baseClass) + ' ' + (additionalClass || '') + ' ' + (customStyles[baseClass] || '')).trim()
      };
};

var backslashTailFix = function backslashTailFix(uriPart) {
  return uriPart.endsWith('/') ? uriPart.slice(0, -1) : uriPart;
};

var buildTargetURI = function buildTargetURI(customEndpoint) {
  if (typeof customEndpoint === 'string') {
    if (/^http[s]?:/g.test(customEndpoint) || customEndpoint.startsWith('/')) {
      // Full path of host (API placed automatically - back compatibility to v1.2.8 and later)
      return backslashTailFix(customEndpoint + '/' + defaultEndpoint.api);
    }
  } else if (customEndpoint instanceof Object) {
    // Customize by object
    var endpointObject = _extends({}, defaultEndpoint, customEndpoint);
    return backslashTailFix(endpointObject.host) + '/' + backslashTailFix(endpointObject.api);
  }

  // Default
  return backslashTailFix(defaultEndpoint.host + '/' + defaultEndpoint.api);
};

var getHighlightWords = function getHighlightWords(query) {
  var words = query.replace(',', '').split(' ');
  var filteredWords = words.filter(function(word) {
    return wordsToPass.indexOf(word) < 0;
  });
  return filteredWords;
};

var fakeRandomKey = function fakeRandomKey() {
  return Math.random()
    .toString(16)
    .slice(2);
};

var SuggestionInfo = function SuggestionInfo(_ref) {
  var _ref$data = _ref.data,
    data = _ref$data === undefined ? {} : _ref$data,
    type = _ref.type;
  return React.createElement(
    'div',
    { className: 'react-dadata__suggestion-info' },
    React.createElement('span', null, [type === 'party' ? data.inn || null : data.bic || null, (data.address && data.address.value) || null].join(' '))
  );
};

var Note = function Note(customStyles) {
  return React.createElement(
    'div',
    getStylingProps('react-dadata__suggestion-note', customStyles),
    React.createElement(
      'span',
      { className: 'suggestion-note_arrow' },
      React.createElement(
        'svg',
        { width: '34', height: '16', viewBox: '0 0 44 21', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
        React.createElement('path', {
          d: 'M25.9 20.1H41.2C42.1 20.1 42.9 19.4 42.9 18.4V3.1C42.9 2.2 42.1 1.4 41.2 1.4H25.9C24.9 1.4 24.2 2.2 24.2 3.1V18.4C24.2 19.4 25 20.1 25.9 20.1Z',
          stroke: '#424242',
          strokeWidth: '1.122',
          strokeMiterlimit: '10'
        }),
        React.createElement('path', {
          d:
            'M33.4295 6.62049C33.4295 7.32049 33.4295 8.0205 33.4295 8.7205C33.4295 10.9205 33.4295 13.2205 33.4295 15.5205C33.4295 15.6205 33.4295 15.6205 33.4295 15.7205C33.4295 15.8205 33.5295 15.9205 33.6295 15.9205C33.7295 15.9205 33.8295 15.8205 33.8295 15.7205C33.8295 15.6205 33.8295 15.6205 33.8295 15.5205C33.8295 12.6205 33.8295 9.82049 33.8295 6.92049C33.8295 6.82049 33.8295 6.8205 33.8295 6.7205C33.9295 6.8205 33.9295 6.8205 34.0295 6.8205C34.4295 7.2205 34.9295 7.72049 35.3295 8.12049C35.4295 8.22049 35.5295 8.2205 35.6295 8.2205C35.7295 8.2205 35.8295 8.12049 35.8295 8.02049C35.8295 7.92049 35.8295 7.8205 35.7295 7.7205C35.4295 7.4205 35.1295 7.1205 34.8295 6.8205C34.5295 6.5205 34.2295 6.2205 33.8295 5.8205C33.6295 5.6205 33.5295 5.6205 33.4295 5.8205C32.8295 6.4205 32.2295 7.0205 31.5295 7.7205C31.3295 7.9205 31.4295 8.12049 31.6295 8.12049C31.7295 8.12049 31.8295 8.02049 31.9295 8.02049C32.3295 7.62049 32.8295 7.1205 33.2295 6.7205C33.2295 6.7205 33.3295 6.72049 33.4295 6.62049Z',
          fill: '#424242',
          stroke: '#424242',
          strokeWidth: '0.8',
          strokeMiterlimit: '10'
        }),
        React.createElement('path', {
          d:
            'M0.699997 3.1V18.4C0.699997 19.4 1.5 20.1 2.4 20.1H17.7C18.6 20.1 19.4 19.4 19.4 18.4V3.1C19.4 2.1 18.6 1.4 17.7 1.4H2.4C1.4 1.5 0.699997 2.2 0.699997 3.1Z',
          stroke: '#424242',
          strokeWidth: '1.122',
          strokeMiterlimit: '10'
        }),
        React.createElement('path', {
          d:
            'M10.3 15C10.3 14.3 10.3 13.6 10.3 12.9C10.3 10.7 10.3 8.4 10.3 6.1C10.3 6 10.3 6 10.3 5.9C10.3 5.8 10.2 5.7 10.1 5.7C9.99999 5.7 9.89999 5.8 9.89999 5.9C9.89999 6 9.89999 6 9.89999 6.1C9.89999 9 9.89999 11.8 9.89999 14.7C9.89999 14.8 9.89999 14.8 9.89999 14.9C9.79999 14.8 9.79999 14.8 9.69999 14.8C9.29999 14.4 8.79999 13.9 8.39999 13.5C8.29999 13.4 8.19999 13.4 8.09999 13.4C7.99999 13.4 7.89999 13.5 7.89999 13.6C7.89999 13.7 7.89999 13.8 7.99999 13.9C8.29999 14.2 8.59999 14.5 8.89999 14.8C9.19999 15.1 9.49999 15.4 9.89999 15.8C10.1 16 10.2 16 10.3 15.8C10.9 15.2 11.5 14.6 12.2 13.9C12.4 13.7 12.3 13.5 12.1 13.5C12 13.5 11.9 13.6 11.8 13.6C11.4 14 10.9 14.5 10.5 14.9C10.4 14.9 10.3 14.9 10.3 15Z',
          fill: '#424242',
          stroke: '#424242',
          strokeWidth: '0.8',
          strokeMiterlimit: '10'
        })
      )
    ),
    React.createElement('span', null, '\u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F'),
    React.createElement(
      'span',
      { className: 'suggestion-note_arrow' },
      React.createElement(
        'svg',
        { width: '18', height: '16', viewBox: '0 0 21 21', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
        React.createElement('path', {
          d:
            'M2.9 20.1H18.2C19.1 20.1 19.9 19.4 19.9 18.4V3.09999C19.9 2.19999 19.1 1.39999 18.2 1.39999H2.9C1.9 1.39999 1.2 2.19999 1.2 3.09999V18.4C1.2 19.4 2 20.1 2.9 20.1Z',
          stroke: '#424242',
          strokeWidth: '1.122',
          strokeMiterlimit: '10'
        }),
        React.createElement('path', {
          d:
            'M14.8 10.6C14.1 10.6 13.4 10.6 12.7 10.6C10.5 10.6 8.2 10.6 5.9 10.6C5.8 10.6 5.8 10.6 5.7 10.6C5.6 10.6 5.5 10.7 5.5 10.8C5.5 10.9 5.6 11 5.7 11C5.8 11 5.8 11 5.9 11C8.8 11 11.6 11 14.5 11C14.6 11 14.6 11 14.7 11C14.6 11.1 14.6 11.1 14.6 11.2C14.2 11.6 13.7 12.1 13.3 12.5C13.2 12.6 13.2 12.7 13.2 12.8C13.2 12.9 13.3 13 13.4 13C13.5 13 13.6 13 13.7 12.9C14 12.6 14.3 12.3 14.6 12C14.9 11.7 15.2 11.4 15.6 11C15.8 10.8 15.8 10.7 15.6 10.6C15 9.99999 14.4 9.39999 13.7 8.69999C13.5 8.49999 13.3 8.59999 13.3 8.79999C13.3 8.89999 13.4 8.99999 13.4 9.09999C13.8 9.49999 14.3 9.99999 14.7 10.4C14.7 10.4 14.7 10.5 14.8 10.6Z',
          fill: '#424242',
          stroke: '#424242',
          strokeWidth: '0.8',
          strokeMiterlimit: '10'
        })
      )
    ),
    React.createElement('span', null, '\u043F\u043E\u0434\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430')
  );
};

var renderCustomActions = function renderCustomActions(_ref2, muteEventHandler, onBlur) {
  var customActions = _ref2.customActions,
    customStyles = _ref2.customStyles,
    suggestions = _ref2.suggestions;

  if (!customActions) return [];

  var actions = customActions instanceof Function ? customActions(suggestions) : customActions;

  // ToDo: @remove in >= 1.3.5
  if (!(customActions instanceof Function)) {
    console.warn(
      '\x1b[31m' +
        '\n   \u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E\n   \u2502                  react-dadata-box@1.3.4                        \u2502\n   \u2502                *** DEPRECATION WARNING ****                    \u2502\n   \u2502  at v1.3.5 will be deprecated variant to place customActions   \u2502\n   \u2502   as React.Element it must be placed only as function that     \u2502\n   \u2502    returns React.Element and take suggestions as argument      \u2502\n   \u2502               see more in project README.md                    \u2502\n   \u2502      https://github.com/orbita-center/react-dadata-box         \u2502\n   \u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256F\n    ' +
        '\x1b[0m'
    );
  }

  actions = actions instanceof Array ? actions : actions ? [actions] : false;

  return actions && actions.length
    ? [
        React.createElement('hr', {
          key: 'custom-actions-line',
          className: 'actions-delimiter'
        })
      ].concat(
        actions.map(function(node) {
          return React.createElement(
            'div',
            _extends(
              {
                key: fakeRandomKey(),
                onMouseDown: muteEventHandler,
                onClick: onBlur
              },
              getStylingProps('react-dadata__custom-action', customStyles)
            ),
            node
          );
        })
      )
    : false;
};

var SuggestionsList = function SuggestionsList(_ref3) {
  var _ref3$actions = _ref3.actions,
    actions = _ref3$actions === undefined ? [] : _ref3$actions,
    customStyles = _ref3.customStyles,
    onSuggestionClick = _ref3.onSuggestionClick,
    query = _ref3.query,
    _ref3$showNote = _ref3.showNote,
    showNote = _ref3$showNote === undefined ? true : _ref3$showNote,
    suggestionIndex = _ref3.suggestionIndex,
    suggestions = _ref3.suggestions,
    type = _ref3.type;

  return (
    !!(suggestions.length || actions.length) &&
    React.createElement(
      'div',
      getStylingProps('react-dadata__suggestions', customStyles),
      showNote && React.createElement(Note, null),
      suggestions.map(function(_ref4, index) {
        var value = _ref4.value,
          data = _ref4.data;
        return React.createElement(
          'div',
          _extends(
            {
              key: fakeRandomKey(),
              onMouseDown: function onMouseDown() {
                onSuggestionClick(index);
              }
            },
            getStylingProps('react-dadata__suggestion', customStyles, index === suggestionIndex && 'react-dadata__suggestion--current')
          ),
          React.createElement(_reactHighlightWords2.default, {
            highlightClassName: 'react-dadata--highlighted',
            searchWords: getHighlightWords(query),
            textToHighlight: value,
            autoEscape: true
          }),
          (type === 'party' || type === 'bank') && React.createElement(SuggestionInfo, { data: data, type: type })
        );
      }),
      actions
    )
  );
};

var ReactDaDataBox = (function(_React$PureComponent) {
  _inherits(ReactDaDataBox, _React$PureComponent);

  function ReactDaDataBox() {
    var _ref5;

    var _temp, _this, _ret;

    _classCallCheck(this, ReactDaDataBox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (
      (_ret =
        ((_temp =
          ((_this = _possibleConstructorReturn(
            this,
            (_ref5 = ReactDaDataBox.__proto__ || Object.getPrototypeOf(ReactDaDataBox)).call.apply(_ref5, [this].concat(args))
          )),
          _this)),
        _initialiseProps.call(_this),
        _temp)),
      _possibleConstructorReturn(_this, _ret)
    );
  }

  _createClass(ReactDaDataBox, [
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        // Cancel all subscriptions and asynchronous tasks
        clearTimeout(this.debounceTimer);
        this.xhr.abort();
      }
    },
    {
      key: 'render',
      value: function render() {
        var _state = this.state,
          inputFocused = _state.inputFocused,
          query = _state.query,
          showSuggestions = _state.showSuggestions,
          suggestionIndex = _state.suggestionIndex,
          suggestions = _state.suggestions,
          type = _state.type;
        var _props = this.props,
          allowClear = _props.allowClear,
          autocomplete = _props.autocomplete,
          className = _props.className,
          customActions = _props.customActions,
          customInput = _props.customInput,
          customStyles = _props.customStyles,
          forceOpenList = _props.forceOpenList,
          placeholder = _props.placeholder,
          showNote = _props.showNote,
          style = _props.style;

        var showSuggestionsList = inputFocused && showSuggestions;

        var inputConfig = {
          autoComplete: (autocomplete === 'on' && autocomplete) || 'off',
          className: 'react-dadata__input' + (allowClear ? ' react-dadata__input-clearable' : ''),
          onBlur: this.onInputBlur,
          onChange: this.onInputChange,
          onFocus: this.onInputFocus,
          onKeyDown: this.onKeyPress,
          placeholder: placeholder,
          value: query
        };
        return React.createElement(
          'div',
          { className: 'react-dadata react-dadata__container ' + className, style: style },
          customInput(inputConfig),
          allowClear &&
            query &&
            React.createElement(
              'span',
              { className: 'react-dadata__input-suffix', onClick: this.clear },
              React.createElement('i', { className: 'react-dadata__icon react-dadata__icon-clear' })
            ),
          (showSuggestionsList || forceOpenList) &&
            React.createElement(SuggestionsList, {
              actions:
                customActions &&
                renderCustomActions(
                  {
                    customActions: customActions,
                    customStyles: customStyles,
                    suggestions: suggestions
                  },
                  this.muteEventHandler,
                  this.onInputBlur
                ),
              customStyles: customStyles,
              suggestions: suggestions,
              suggestionIndex: suggestionIndex,
              query: query,
              type: type,
              showNote: showNote,
              onSuggestionClick: this.onSuggestionClick
            })
        );
      }
    }
  ]);

  return ReactDaDataBox;
})(React.PureComponent);

ReactDaDataBox.displayName = 'ReactDaDataBox';

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.state = {
    inputFocused: false,
    isValid: false,
    query: this.props.query || '',
    showSuggestions: true,
    suggestionIndex: 0,
    suggestions: [],
    type: this.props.type || 'address'
  };
  this.xhr = new XMLHttpRequest();

  this.componentDidMount = function() {
    if (_this2.props.query || _this2.props.silentQuery) {
      _this2.fetchSuggestions(null, function() {
        if (_this2.props.silentInit) {
          var forceSelect = _this2.props.silentInit(_this2.state.suggestions);
          if (forceSelect !== undefined && typeof forceSelect === 'number' && forceSelect < _this2.state.suggestions.length) {
            _this2.selectSuggestion(forceSelect);
          }
        }
      });
    }
  };

  this.componentDidUpdate = function(prevProps) {
    if (_this2.props.query !== prevProps.query) {
      _this2.setState({ query: _this2.props.query }, _this2.fetchSuggestions);
    }
  };

  this.onInputFocus = function() {
    if (!_this2.state.value && _this2.props.silentQuery) {
      _this2.fetchSuggestions({ inputFocused: true, showSuggestions: true });
    } else {
      _this2.setState({ inputFocused: true });
    }
  };

  this.onInputBlur = function() {
    _this2.setState({ inputFocused: false });
  };

  this.debounce = function(func) {
    var cooldown = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 350;

    return function() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      if (_this2.debounceTimer) {
        clearTimeout(_this2.debounceTimer);
      }
      _this2.debounceTimer = setTimeout(function() {
        func.apply(undefined, args);
      }, cooldown);
    };
  };

  this.onInputChange = function(event) {
    var value = event.target.value;

    _this2.setState({ query: value, showSuggestions: true }, function() {
      _this2.debounce(
        _this2.fetchSuggestions,
        _this2.props.debounce
      )({
        inputFocused: true,
        showSuggestions: true
      });
    });

    !value && _this2.clear();
  };

  this.onKeyPress = function(event) {
    var _state2 = _this2.state,
      suggestionIndex = _state2.suggestionIndex,
      suggestions = _state2.suggestions;

    if (event.which === 40 && suggestionIndex < suggestions.length - 1) {
      // Arrow down
      _this2.setState(function(prevState) {
        return { suggestionIndex: prevState.suggestionIndex + 1 };
      });
    } else if (event.which === 38 && suggestionIndex > 0) {
      // Arrow up
      _this2.setState(function(prevState) {
        return { suggestionIndex: prevState.suggestionIndex - 1 };
      });
    } else if (event.which === 39 && suggestionIndex >= 0) {
      // Arrow right
      _this2.selectSuggestion(_this2.state.suggestionIndex, true);
    } else if (event.which === 13 && suggestionIndex >= 0) {
      // Enter
      event.preventDefault();
      event.stopPropagation();
      _this2.selectSuggestion(_this2.state.suggestionIndex);
    }
  };

  this.fetchSuggestions = function(setStateAdditional, callback) {
    _this2.xhr.abort();

    var type = _this2.state.type;
    var _props2 = _this2.props,
      city = _props2.city,
      customEndpoint = _props2.customEndpoint;

    var payload = {
      query: _this2.state.query || _this2.props.silentQuery,
      count: _this2.props.count || 10
    };

    if (city && type === 'address') {
      payload.from_bound = { value: 'city' };
      payload.to_bound = { value: 'settlement' };
      payload.value = 'settlement';
    }

    if (_this2.props.payloadModifier) {
      payload =
        _this2.props.payloadModifier instanceof Function
          ? _this2.props.payloadModifier(payload)
          : _this2.props.payloadModifier instanceof Object
          ? Object.assign(payload, _this2.props.payloadModifier)
          : payload;
    }

    _this2.xhr.open('POST', backslashTailFix(buildTargetURI(customEndpoint)) + '/' + type);
    _this2.xhr.setRequestHeader('Accept', 'application/json');
    _this2.xhr.setRequestHeader('Authorization', 'Token ' + _this2.props.token);
    _this2.xhr.setRequestHeader('Content-Type', 'application/json');
    _this2.xhr.send(JSON.stringify(payload));

    _this2.xhr.onreadystatechange = function() {
      if (_this2.xhr.readyState !== 4) {
        return;
      }

      if (_this2.xhr.status === 200) {
        var _JSON$parse = JSON.parse(_this2.xhr.response),
          suggestions = _JSON$parse.suggestions;

        if (suggestions && suggestions.length) {
          _this2.setState(
            Object.assign(
              {
                suggestions: suggestions,
                suggestionIndex: 0
              },
              setStateAdditional || {}
            ),
            callback
          );
        } else if (_this2.props.onIdleOut) {
          _this2.props.onIdleOut(_this2.state.query);
        }
      }
    };
  };

  this.onSuggestionClick = function(index) {
    if (_this2.state.suggestions[index]) {
      _this2.selectSuggestion(index);
    }
  };

  this.clear = function() {
    _this2.setState({
      query: '',
      showSuggestions: false
    });
    _this2.props.onChange && _this2.props.onChange(defaultSuggestion);
  };

  this.selectSuggestion = function(index) {
    var showSuggestions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var suggestions = _this2.state.suggestions;
    var value = suggestions[index].value;

    _this2.setState({
      query: value,
      showSuggestions: showSuggestions
    });

    if (_this2.props.onChange) {
      _this2.props.onChange(suggestions[index]);
    }
  };

  this.muteEventHandler = function(e) {
    e.preventDefault();
    e.stopPropagation();
  };
};

ReactDaDataBox.propTypes = {
  allowClear: _propTypes2.default.bool,
  autocomplete: _propTypes2.default.bool,
  city: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  count: _propTypes2.default.number,
  customActions: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]),
  customEndpoint: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.shape, _propTypes2.default.string]),
  customInput: _propTypes2.default.func,
  customStyles: _propTypes2.default.object,
  debounce: _propTypes2.default.number,
  forceOpenList: _propTypes2.default.bool,
  onChange: _propTypes2.default.func,
  onIdleOut: _propTypes2.default.func,
  payloadModifier: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.shape, _propTypes2.default.func]),
  placeholder: _propTypes2.default.string,
  query: _propTypes2.default.string,
  showNote: _propTypes2.default.bool,
  silentInit: _propTypes2.default.func,
  silentQuery: _propTypes2.default.string,
  style: _propTypes2.default.objectOf(_propTypes2.default.string),
  token: _propTypes2.default.string.isRequired,
  type: _propTypes2.default.string
};

ReactDaDataBox.defaultProps = {
  type: 'address',
  customInput: function customInput(params) {
    return React.createElement('input', params);
  }
};

exports.ReactDaDataBox = ReactDaDataBox;
exports.default = ReactDaDataBox;

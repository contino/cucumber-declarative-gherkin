/**
 * This code is copied from Protractor-browser-logs, as we need to modify it to
 * make it work for our needs.  Due to a design constraint around obtaining
 * browser console logs, we cannot add all the logs to the e2e HTML report and
 * have Protractor-browser-logs verify the logs.  Reading the browser logs,
 * removes them from follow-on calls.  Protractor-browser-logs records the
 * browser logs internally, so for our logging needs, we just need to get
 * access to these internal logs.
 *
 * https://www.npmjs.com/package/protractor-browser-logs
  */


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function or(a, b) {
  return function (message) {
    return a(message) || b(message);
  };
}

function and(a, b) {
  return function (message) {
    return a(message) && b(message);
  };
}

function byLevel(expectedLevel) {
  return function (message) {
    return message.level.name === expectedLevel;
  };
}

function byText(text) {
  return function (message) {
    return message.message.indexOf(text) !== -1;
  };
}

function byRegExp(re) {
  return function (message) {
    return message.message.match(re);
  };
}

function zip(a, b) {
  return (a.length > b.length ? a : b).map(function (x, i) {
    return [a[i], b[i]];
  });
}

function matcherFor(args) {
  var matchers = args.map(function (arg) {
    if (typeof arg === 'string') {
      return byText(arg);
    } else if (arg instanceof RegExp) {
      return byRegExp(arg);
    } else {
      return arg;
    }
  });
  return function (message) {
    return matchers.every(function (curr) {
      return curr(message);
    });
  };
}

function removeMatching(messages, filters) {
  return messages.filter(function (message) {
    return filters.filter(function (filter) {
      return filter(message);
    }).length === 0;
  });
}

module.exports = function (browser, options) {
  var ignores = [],
    expects = [],
    log = [];

  function logs() {
    logEntries = browser.getLogs('browser');
    log = log.concat(logEntries);
    return log;
  }

  function reset() {
    ignores = [];
    expects = [];
    log = [];
  }

  reset();

  return {
    ERROR: byLevel('SEVERE'),
    WARNING: byLevel('WARNING'),
    DEBUG: byLevel('DEBUG'),
    INFO: byLevel('INFO'),
    LOG: byLevel('INFO'),

    or: or,
    and: and,
    reset: reset,

    logs: logs,

    ignore: function ignore() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return ignores.push(matcherFor(args));
    },
    expect: function expect() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return expects.push(matcherFor(args));
    },

    verify: function verify() {
      cap = browser.capabilities;
      if (cap.browserName === 'chrome') {
        messages = logs();
        ((options || {}).reporters || []).forEach(function (reporter) {
          reporter(messages);
        });
        zip(expects, removeMatching(messages, ignores)).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
            expected = _ref2[0],
            actual = _ref2[1];

          if (!actual) {
            throw new Error('NO MESSAGE TO EXPECT');
          }
          if (!expected || !expected(actual)) {
            throw new Error('UNEXPECTED MESSAGE: ' + JSON.stringify({
              level: actual.level.name,
              message: actual.message
            }));
          }
        });
      }
    }
  };
};
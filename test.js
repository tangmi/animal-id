var animal = require('./animal-id');

// x-platform log/assert shims
function _log(msg, type) {
  type = type || 'log';

  if (typeof(document) != 'undefined') {
    document.write('<div class="' + type + '">' + msg.replace(/\n/g, '<br />') + '</div>');
  }
  if (typeof(console) != 'undefined') {
    var color = {
      log: '\033[39m',
      warn: '\033[33m',
      error: '\033[31m'
    };
    console[type](color[type] + msg + color.log);
  }
}

function log(msg) {_log(msg, 'log');}
function warn(msg) {_log(msg, 'warn');}
function error(msg) {_log(msg, 'error');}

function assert(res, msg) {
  if (!res) {
    error('FAIL: ' + msg);
  } else {
    log('Pass: ' + msg);
  }
}

// some really bad unit tests
console.log('if these pass, that means it probably is working (with the lack of a \nseeded number generator it will be hard to actually test)');

animal.useAdjectives(['adjective']);
assert(true, 'useAdjectives call');

animal.useAnimals(['animal']);
assert(true, 'useAnimals call');

assert(animal.getId() == 'adjective-animal', 'getId call');
assert(animal.getId('prefix') == 'prefix-adjective-animal', 'getId call with a prefix');

animal.useSeparator('/');
assert(true, 'useSeparator call');

assert(animal.getId() == 'adjective/animal', 'getId call with a custom separator');
assert(animal.getId('prefix') == 'prefix/adjective/animal', 'getId call with a custom separator and prefix');


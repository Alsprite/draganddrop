const math = require('mathjs');

const data = {
  some: {
    path: {
      to: {
        value: 42
      }
    }
  }
}

function withScope() {
  const scope = { x:3 }
  math.evaluate('x', scope)
  return scope
}

math.get = function (key: string, fallback: any) {
  const value = math.evaluate(`data.${key}`, { data });
  return value !== undefined ? value : fallback;
};

math.gt = function (key1: string, key2: string, fallback: boolean = false) {
  const value1 = math.evaluate(`data.${key1}`, { data });
  const value2 = math.evaluate(`data.${key2}`, { data });
  return value1 !== undefined && value2 !== undefined ? value1 > value2 : fallback;
};

math.lt = function (key1: string, key2: string, fallback: boolean = false) {
  const value1 = math.evaluate(`data.${key1}`, { data });
  const value2 = math.evaluate(`data.${key2}`, { data });
  return value1 !== undefined && value2 !== undefined ? value1 < value2 : fallback;
};

console.log(math.get('some.path.to.value', 'Fallback Value'));
console.log(math.gt('some.path.to.value', 'some.path.to.otherValue', false));
console.log(math.lt('some.path.to.value', 'some.path.to.otherValue', true));
withScope();
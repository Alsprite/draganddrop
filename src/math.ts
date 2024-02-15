const math = require('mathjs');

function withScope() {
    const scope = {
        x: 3,
        y: 4,
        kissa: { koira: 'ok', age: 6}
    }
    const value = math.evaluate('x * y', scope);
    console.log(value);

    math.get = function (key: string, fallback: any) {
        const value = math.evaluate(`scope.${key}`, { scope });
        return value !== undefined ? value : fallback;
    };

    math.gt = function (key1: string, key2: string, fallback: boolean = false) {
        const value1 = math.evaluate(`scope.${key1}`, { scope });
        const value2 = math.evaluate(`scope.${key2}`, { scope });
        return value1 !== undefined && value2 !== undefined ? value1 > value2 : fallback;
    };

    math.lt = function (key1: string, key2: string, fallback: boolean = false) {
        const value1 = math.evaluate(`scope.${key1}`, { scope });
        const value2 = math.evaluate(`scope.${key2}`, { scope });
        return value1 !== undefined && value2 !== undefined ? value1 < value2 : fallback;
    };

    console.log(math.get('x', 'Fallback Value'));
    console.log(math.gt('x', 'y', false));
    console.log(math.lt('x', 'y', true));


    math.evaluate("get('kissa.koira', 'janis')") // ok
    math.evaluate("get('rotta.karhu', 'janis')") // janis
    math.evaluate("gt('x', 'kissa.age', false)")

    math.evaluate('kissa.lentokone == 0')
}

withScope();
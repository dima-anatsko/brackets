module.exports = function check(str, bracketsConfig) {
    let cache = [];
    for (let char of str) {
        for (let i = 0; i < bracketsConfig.length; i++) {
            if (char === bracketsConfig[i][0]) {
                if (cache[cache.length - 1] === char) {
                    cache.pop();
                } else {
                    cache.push(bracketsConfig[i][1]);
                }
                break;
            } else if (char === bracketsConfig[i][1]) {
                if (cache.pop() !== char) {
                    return false;
                }
                break;
            }
        }
    }
    if (cache.length === 0) {
        return true;
    }
    return false;
};

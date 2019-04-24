let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
let result = reRegex.test(repeatNum);

// ^必须有  保证从头开始匹配 \1 代表我们的上一个分组
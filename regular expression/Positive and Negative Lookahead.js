let sampleWord = "astronaut";
// let pwRegex = /\w{3,}\d{2}/
// 适用于检查多个模式 但是又不会进入匹配
let pwRegex = /(?=\w{5,})(?=\D*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);
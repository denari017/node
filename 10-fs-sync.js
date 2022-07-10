const { readFileSync, writeFileSync} = require("fs");

console.log("start");

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

writeFileSync("content/result-sync.txt", "here si result : " + first + second, { flag:"a" });

console.log("done whit this task");
console.log("starting whit next one");
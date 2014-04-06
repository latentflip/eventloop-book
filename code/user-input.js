process.stdin.setEncoding('utf8');

console.log("Enter your name:");
process.stdin.on('data', function (text) {
    console.log('You typed:', text);
});

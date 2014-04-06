var last = process.hrtime();
var diff;

function withSetTimeout () {
    var now = process.hrtime();
    console.log('withSetTimeout', Math.floor((now[1] - last[1])/1000) + 'us');
    last = now;
    setTimeout(withSetTimeout, 0);
}

withSetTimeout();

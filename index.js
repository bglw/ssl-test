const sslChecker =  require("ssl-checker");

var args = process.argv.slice(2);

args.forEach(function (val, index, array) {
    let lval = val;
    sslChecker(lval).then((log) => {
        console.log(lval);
        console.log(log);
    }).catch(console.error);
});
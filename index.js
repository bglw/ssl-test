const sslChecker =  require("ssl-checker");
const args = process.argv.slice(2);
args.forEach(function (val) {
    const lval = val;
    sslChecker(lval).then((log) => {
        console.log({domain: lval, ...log});
    }).catch(console.error);
});
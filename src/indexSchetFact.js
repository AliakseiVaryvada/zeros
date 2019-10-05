function factorial(n) {
    var z = 0;

    while (x) {

        x = (x / 5) | 0;

        z += x;

    }

    return z;

}

function factorialCh(n) {
    return n >= 1 ? n * factorialCh(n - 2) : 1;
}

//module.exports = 
function zeros(expression) {
    let m = 0;
    let numb = 0;
    let itog = 1;
    let mass = expression.split("*");
    let fac = 1;
    let str = "";
    let zero = 0;
    mass.forEach(element => {
        console.log(element);
        m = element.match(/\!/g || []).length;
        console.log(m);
        numb = +element.substring(0, element.length - m);
        if (m === 1) {
            fac = factorial(numb);
        } else {
            fac = factorialCh(numb);
        }
        itog = fac * itog;
        fac = 0;
        console.log(itog.toFixed());
    });

    console.log(itog.toExponential(1000));
    //itog = itog.toLocaleString();
    while (itog % 10 == 0) {
        zero++;
        itog = itog / 10;
        console.log(itog);
    }
    console.log(zero);
    return zero;
};
console.log(zeros('45!*63!*28!*55!!'));
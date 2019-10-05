function factorial(n) {
    return n != 1 ? n * factorial(n - 1) : 1;
}

function factorialCh(n) {
    return n >= 1 ? n * factorialCh(n - 2) : 1;
}

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
        console.log(itog);
    });
    console.log(itog);

    return itog;
}
console.log(zeros("9!!*10!!*7!!"));
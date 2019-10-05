function factorial(n) {
    return n != 1 ? n * factorial(n - 1) : 1;
}

function factorialCh(n) {
    return n != 1 ? n * factorialCh(n - 2) : 1;
}

function zeros(expression) {
    let n = 0;
    let numb = 0;
    let itog = 1;
    let mass = expression.split("*");
    let fac = 1;
    let str = "";
    let zero = 0;
    mass.forEach(element => {
        console.log(element);
        n = element.match(/\!/g || []).length;
        console.log(n);
        numb = +element.substring(0, element.length - n);
        if (n === 1) {
            fac = factorial(numb);
        } else {
            fac = factorialCh(numb);
        }
        itog = fac * itog;
    });
    console.log(itog);

    return itog;
}
console.log(zeros("9!!*10!!*7!!"));
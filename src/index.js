module.exports = function zeros(expression) {
    let m = 0;
    let numb = 0;
    let itog = 1;
    let mass = expression.split("*");
    let str = "";
    let digit = [];
    let chetArr = [];
    let chetArrLow = 0;
    let chetArrMid = 0;
    let chetArrHight = 0;
    let zerocount = 0;
    let five = 0;
    let two = 0;
    let twFive = 0;
    mass.forEach(element => {
        let c = 1;
        m = element.match(/\!/g || []).length;
        numb = +element.substring(0, element.length - m);
        if (m === 1) {
            while (c <= numb) {
                //записываем все числа
                digit.push(c);
                c++;
            }
        } else {
            if (numb % 2 == 0) {
                while (c <= numb) {
                    //записываем чётные числа
                    if (c % 2 == 0) {
                        digit.push(c);
                    }
                    c++;
                }
            } else {
                while (c <= numb) {
                    //записываем нечётные числа
                    if (c % 2 != 0) {
                        digit.push(c);
                    }
                    c++;
                }
            }
        }
    });
    chetArrLow = digit.filter(element => element % 10 == 0 && element % 100 !== 0)
        .length;

    chetArrHight = digit.filter(element => element % 100 == 0).length;

    chetArrMid = digit.filter(element => element % 50 == 0 && element % 100 !== 0)
        .length;

    five = digit.filter(
        element =>
        element % 5 == 0 &&
        element % 100 !== 0 &&
        element % 10 !== 0 &&
        element % 25 !== 0
    ).length;

    twFive = digit.filter(element => element % 25 == 0 && element % 100 !== 0)
        .length;

    two = digit.filter(
        element =>
        element % 2 == 0 &&
        element % 100 !== 0 &&
        element % 10 !== 0 &&
        element % 50 !== 0
    ).length;

    zerocount = zerocount + chetArrHight + chetArrLow;
    five = five + chetArrMid + twFive;
    console.log(zerocount, chetArrLow, chetArrMid);

    if (two < five) {
        zerocount = zerocount + two;
    } else {
        zerocount = zerocount + five;
    }
    console.log(
        digit.filter(
            element =>
            element % 5 == 0 &&
            element % 100 !== 0 &&
            element % 10 !== 0 &&
            element % 25 !== 0
        )
    );
    console.log(zerocount, five, two, chetArrMid);
    return zerocount;
};
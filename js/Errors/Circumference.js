


function calcCircumference(radius) {
    try {
        if (typeof radius !== 'number' || radius < 0) throw "radius is not a number or is smaller then 0";

        let Circumferance = (2 * Math.PI * radius)
        return Circumferance;
    } catch (err) {
        console.error(err)
    }

}

let x = calcCircumference(-2);
console.log(x)
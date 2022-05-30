function timeConvert(number) {
    let hours = (number / 60);
    let rhours = Math.floor(hours);
    let rminutes = number % 60;
    return number + " minutes = " + rhours + " hour(s) and " + rminutes + " minute(s).";
}

console.log(timeConvert(200));
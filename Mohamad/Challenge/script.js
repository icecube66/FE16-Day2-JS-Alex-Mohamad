function money(number) {
    var hundreds = Math.floor(number / 100);
    let rest = number % 100;
    var fifty = Math.floor(rest / 50);
    rest = rest % 50;
    var twenty = Math.floor(rest / 20);
    rest %= 20;
    var ten = Math.floor(rest / 10);
    return `you have ${hundreds} 100 , ${fifty} 50 ,${twenty} 20 , ${ten} 10,`;
}
console.log(money(280));
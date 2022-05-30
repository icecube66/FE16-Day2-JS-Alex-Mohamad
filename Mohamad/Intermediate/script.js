function capitalize(str) {
    let firstletter = str[0].toUpperCase();
    console.log(firstletter + str.slice(1));
}
capitalize("i am a web developer");


function grades(Math, Physics, English) {
    let sum = Math + Physics + English;
    let average = (Math + Physics + English) / 3;
    let grades = [sum, average];
    return grades;
    // return " the sum on your grades " + sum + " and the Average is " + average;

}
// console.log(grades(3, 4, 5));
console.log(grades(3, 4, 5)[0]);
console.log(grades(3, 4, 5)[1]);
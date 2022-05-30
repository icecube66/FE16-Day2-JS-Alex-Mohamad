function crystalGazer(job_title, location, partners_name, number_childrens) {
    return `You will be a ${job_title} job in ${location} and married to ${partners_name} with ${number_childrens} childrens.`
}
console.log(crystalGazer("IT", "Vienna", "Helli", 3));



function ageCalculator(birthyear, currentyear) {
    return birthyear - currentyear;
}
let myAge = ageCalculator(2022, 1993);
console.log(myAge);


function degreestowradiant(degress) {
    let result = Math.PI / 180 * degress;
    return result;
}
let radiant = degreestowradiant(90);
console.log(radiant);

// var a = 12;

// {
//     let a = 30;
// }
// console.log(a);




function getarea_volume(width, height, depth) {
    let area = width * height;
    let volume = width * height * depth;
    let arr = [];
    arr.push(area);
    arr.push(volume);
    return arr;
}
let area_volume = getarea_volume(3, 5, 2);
console.log(`this area in the box : ${area_volume [0]}`);
console.log(`this volume in the box: ${area_volume [1]}`);
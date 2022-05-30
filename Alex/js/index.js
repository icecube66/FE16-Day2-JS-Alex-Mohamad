//Test to console
console.log("JS is connencted");

//Exercise Basic 1
function crystalGazer(numberChildren, partnerName, location, jobTitle)
{
    return `You will be a ${jobTitle} in ${location} and married to ${partnerName} with ${numberChildren} childrens.`;
}
 
console.log(crystalGazer("3", "SusiSorglos", "Tumpuktu", "Rockstar"));

//Age Calculator 1
function ageCalculator(birthYear, currentYear)
{
    let age = currentYear - birthYear;
    return age;
}

var age = ageCalculator(1972, 2022);

console.log(`You are either ${age} or ${age -1}.`);

//Age Calculator 2
function ageCalculator2(birthYear)
{
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let age = currentYear - birthYear;
    return age;
}

var age_new = ageCalculator2(1972);

console.log(`You are either ${age_new} or ${age_new -1}.`);

//Degree to radiant

function degreeToRadiant(degree)
{
    let d = degree * Math.PI/180;
    return d;
}

var degree = degreeToRadiant(90);
console.log(degree);

//Area and Volume
function calculateAreaVolume(width, height, depth)
{
    let area = width * height;
    let vol = width * height * depth;

    let result = [];
    result["area"] = area;
    result["vol"] = vol;
    return result;
}

area_volume = calculateAreaVolume(3, 5, 2);

console.log(`The area of the box is: ${area_volume[`area`]}`);
console.log(`The volume of the box is: ${area_volume[`vol`]}`);

//intermediate exercises
//1
(function (string)
{
    let first_letter = string.charAt(0);
    console.log(first_letter.toUpperCase() + string.slice(1));
})('i am a web developer');

//2
function average(math_grade, physic_grade, english_grade)
{
    let sum = math_grade + physic_grade + english_grade;
    let average_grade = sum / 3;
    return average_grade;
}

var average_grade = average(3, 4, 5);
console.log(`Your average grade is ${average_grade}`);

//advanced 1
function timeConvert(minutes)
{
    let houer = Math.floor(minutes / 60);
    let rest = minutes % 60;
    console.log(`${minutes} minutes = ${houer} houer(s) and ${rest} minute(s).`);
}

timeConvert(200);


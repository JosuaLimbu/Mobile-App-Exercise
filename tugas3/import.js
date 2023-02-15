import { fahrenheitKeCelcius } from "./export.js";
import hitungBMI from "./export.js"
//1. Konversi Suhu dari Fahrenheit ke Celcius
const fahrenheit = 99.20;
const celcius = fahrenheitKeCelcius(fahrenheit);
console.log(`${fahrenheit} Fahrenheit = ${celcius} Celsius`);

//2. Menghitung BMI (Body Mass Index)
const b = 80;
const t = 10;
const resultbmi = hitungBMI(b, t);
console.log(`BMI = ${resultbmi.bmi} (${resultbmi.jenis})`);
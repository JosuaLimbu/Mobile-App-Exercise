//1. Konversi Suhu dari Fahrenheit ke Celcius
export function fahrenheitKeCelcius(fahrenheit) {
    const celcius =(fahrenheit - 32)*(5/9);
    return celcius 

}

//2. Menghitung BMI (Body Mass Index)
export default function tugasBMI(b, t) {
    const bmi = b / (t * t);
    let jenis;
    if (bmi < 18.5) {
      jenis = "Berat Badan Anda Kurang";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      jenis = "Berat Badan Anda Normal";
    } else if (bmi >= 25 && bmi <= 29.9) {
      jenis = "Berat Badan Anda Kelebihan";
    } else {
      jenis = "Obesitas";
    }
    return { bmi, jenis };
  }

// Write a code to find area of rectangle.
// Example : length = 5, width = 3
// Output : 15

let _length: number = 5;
let _width: number = 3;

const _areaRectangle = (_length * _width);
console.log(_areaRectangle);

// Write a code to find perimeter of rectangle.
// Example : length = 5, width = 3
// Output : 16

const _perimeter = (_length + _width) * 2;
console.log(_perimeter);


// Write a code to find diameter, circumference and area of a circle.
// Example : radius = 5
// Output : diameter = 10, circumference = 31.4159, area = 78.539
let _radius: number = 5;

const _diameter = 2 * _radius;
console.log(_diameter);

const _circumference = 2 * Math.PI * _radius;
console.log(_circumference.toFixed(4));

const _area = Math.PI * _radius * _radius;
console.log(_area.toFixed(4));

console.log(`Diamater = ${_diameter} , Circumference = ${_circumference.toFixed(4)}, Area = ${_area.toFixed(3)}`);



// Write a code to find angles of triangle if two angles are given.
// Example : a = 80, b = 65
// Output : 35

let _triangle1: number = 80;
let _triangle2: number = 65;
let _corner = 180

const _triangle = 180 - (80 + 65);
console.log(_triangle);


// Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days).
// Example : 400 days → 1 year, 1 month, 5 days
// Example: 366 days → 1 year, 0 month, 1 day

let _totalday: number = 400;
let _totalyear: number = 365;

let _year: number = Math.floor(_totalday / _totalyear)

let _remainingDay: number = Math.floor(_totalday % 365);

let _months: number = Math.floor(_remainingDay / 30);

let _day: number = Math.floor(_remainingDay % 30)

console.log(`${_totalday} days = ${_year} year, ${_months} month, ${_day} day`);

// Write a code to get difference between dates in days.
// Example : date1 = 2022-01-20, date2 = 2022-01-22
// Output : 2


const date1: string = "2022-01-20";
const date2: string = "2022-01-22";

// Mengubah string menjadi objek Date
const d1 = new Date(date1);
const d2 = new Date(date2);

// Menghitung selisih waktu dalam milidetik
const differenceInTime = d2.getTime() - d1.getTime();

// Mengonversi milidetik menjadi hari (1 hari = 24 jam * 60 menit * 60 detik * 1000 milidetik)
const differenceInDays = differenceInTime / (1000 * 3600 * 24);

console.log(differenceInDays);




// Write a code to check whether the number is odd or even
// Example: 25 → odd number, 2 → even number


var _number = 25

switch (true) {
    case _number % 2 == 0:
        console.log(`${_number} merupakan bilangan genap`)
        break;
    default:
        console.log(`${_number} merupakan bilangan ganjil`)
}


// Write a code to check whether the number is prime number or not
// Example: 7 → 7 is a prime number
// Example: 6 → 6 is not a prime number


let _numberToCheck: number = 7

let isPrime: boolean = true

if (_numberToCheck <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(_numberToCheck); i++) {
        if (_numberToCheck % i === 0) {
            isPrime = false;
            break;
        }

    }
}
if (isPrime) {
    console.log(`${_numberToCheck} is a prime number`);
} else {
    console.log(`${_numberToCheck} is not a prime number`);
}

// Write a code to find the sum of the numbers 1 to N
// ○ Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
// ○ Example: 3 → 1 + 2 + 3 = 6

/// Menentukan nilai N
let N = 5;

// Variabel untuk menyimpan jumlah total
let sum = 0;

// Variabel untuk menyimpan string perhitungan
let calculation = "";

// Loop untuk menjumlahkan angka dari 1 hingga N
for (let i = 1; i <= N; i++) {
    sum += i; // Menambahkan nilai i ke jumlah total

    // Menambahkan angka ke string perhitungan
    calculation += i;

    // Menambahkan tanda plus jika bukan angka terakhir
    if (i !== N) {
        calculation += " + ";
    }
}

// Mencetak hasil perhitungan dan jumlah total
console.log(`${N} → ${calculation} = ${sum}`);

// Contoh lain dengan N yang berbeda
N = 3;
sum = 0;
calculation = "";

for (let i = 1; i <= N; i++) {
    sum += i;
    calculation += i;
    if (i !== N) {
        calculation += " + ";
    }
}

console.log(`${N} → ${calculation} = ${sum}`);


// Write a code to find factorial of a number
// Example: 4! → 4 x 3 x 2 x 1 = 24
// Example: 6! → 6 x 5 x 4 x 3 x 2 x 1 = 720


// Menentukan angka yang akan dihitung faktorialnya
let number = 4;

// Variabel untuk menyimpan hasil faktorial
let factorial = 1;

// Variabel untuk menyimpan string perhitungan
let _calculation = "";

// Loop untuk menghitung faktorial
for (let i = number; i >= 1; i--) {
    factorial *= i; // Mengalikan nilai i dengan hasil faktorial

    // Menambahkan angka ke string perhitungan
    _calculation += i;

    // Menambahkan tanda kali jika bukan angka terakhir
    if (i !== 1) {
        _calculation += " x ";
    }
}

// Mencetak hasil perhitungan dan faktorial
console.log(`${number}! → ${_calculation} = ${factorial}`);

// Contoh lain dengan angka yang berbeda
number = 6;
factorial = 1;
_calculation = "";

for (let i = number; i >= 1; i--) {
    factorial *= i;
    _calculation += i;
    if (i !== 1) {
        _calculation += " x ";
    }
}

console.log(`${number}! → ${_calculation} = ${factorial}`);


// Write a code to print the first N fibonacci numbers
// Example: 15 → 610
// Menentukan jumlah angka Fibonacci yang ingin dicetak
// Deklarasi variabel untuk menyimpan jumlah angka Fibonacci yang ingin dihasilkan

let M: number = 16;
// Inisialisasi array untuk menyimpan deret Fibonacci
let fibonacciSeries: number[] = [];
// Mengecek jika N adalah 0, jika ya, maka kembalikan array kosong
if (M === 0) {
    fibonacciSeries = [];
} else if (N === 1) {
    // Jika N adalah 1, deret hanya berisi angka Fibonacci pertama: 0
    fibonacciSeries = [0];
} else {
    // Jika N adalah 2 atau lebih, inisialisasi deret dengan dua angka Fibonacci pertama: 0 dan 1
    fibonacciSeries = [0, 1];

    // Loop untuk menghitung angka Fibonacci berikutnya dalam deret
    for (let i = 2; i < M; i++) {
        // Angka Fibonacci berikutnya adalah jumlah dari dua angka sebelumnya
        let nextFibonacci = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
        // Tambahkan angka Fibonacci yang dihitung ke dalam deret
        fibonacciSeries.push(nextFibonacci);
    }
}
console.log(`Angka Fibonacci pertama sebanyak ${M} adalah: ${fibonacciSeries}`);

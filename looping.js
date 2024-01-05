// // looping for

// for (let i = 1; i <= 50; i++) {
//     document.write(i + "<br>")
// }
// for (let i = 50; i >= 1; i--) {

//     document.write(i + "<br>")
// }

// //looping while
// let ya = 1;
// while (ya <= 50) {
//     ya++
//     document.write(ya+ "<br>")
// }

// let key = 51;
// while (key >= 1) {
//     key--

//     document.write(key + "<br>")
// } 

// // do while 
// let ze = 50;
// while (ze >= 1) {
//     ze--

//     document.write(ze + "<br>")
// }

// let zi = 0;
// while (zi <= 50) {
//     zi++

//     document.write(kiw + "<br>")
// }



// // for looping 

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 == 0) {
//         document.write(i + " - bilangan genap" + "<br>")
//     } 
// }
// for (let i = 100; i >= 1; i--) {
//     if (i % 2 == 1) {
//         document.write(i + " - bilangan ganjil" + "<br>")
//     } 
// }

// // // while looping

// let jp = 1;
// while (jp <= 100) {
//     jp++
//     if (jp % 2 == 0) {
//         document.write(jp + " - bilangan genap" + "<br>")
//     } 
// }
// let kiw = 100;
// while (kiw >= 1) {
//     kon--
//     if (kiw % 2 == 1) {
//         document.write(kiw + " - bilangan ganjil" + "<br>")
//     } 
// }



// //Faktorial for
// const angka = 5;
// let faktorial = 1;

// if (angka < 0) {
//   document.write("Input harus non-negatif");
// } else {
//   for (let i = 2; i <= angka; i++) {
//     faktorial *= i;
//   }
//   document.write(`Faktorial dari ${angka} adalah: ${faktorial}`);
// }

// //Faktorial while
// const num = 5;
// let fak = 1;
// let i = 1;

// while (i <= num) {
//   fak *= i;
//   i++;
// }

// document.write(`Faktorial dari ${num} adalah: ${fak}`);

// //Faktorial do while
// let ber = 5
// let rial = 1
// const maw = ber
// do {
//   rial *= ber
//   ber--
// } while (ber >= 1)
// document.write(`Faktorial ${maw} adalah ${rial}`)



// kabisat
for (let tahun = 1600; tahun <= 2024; tahun++) {
    if (tahun % 400 == 0) {
        document.write(tahun + " adalah tahun kabisat<br>");
    } else if (tahun % 100 == 0) {
        document.write(tahun + " bukan tahun kabisat<br>");
    } else if (tahun % 4 == 0) {
        document.write(tahun + " adalah tahun kabisat<br>");
    } }

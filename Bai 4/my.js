// function checkSoA() {
//     let numberA = +document.getElementById('soA').value;
//     let chuvi = 4 * numberA;
//     let area = numberA * numberA;
//     document.getElementById('result1').innerHTML = 'Chu vi hinh vuong canh a bang:' + ' ' + chuvi;
//     document.getElementById('result2').innerHTML = 'Dien tich hinh vuong anh a bang:' + ' ' + area;
// }


// function check_a_va_b() {
//     let numberA = +document.getElementById('soA').value;
//     let numberB = +document.getElementById('soB').value;
//     let binhPhuongA = numberA * numberA;
//     let binhPhuongB = numberB * numberB;
//     document.getElementById('result1').innerHTML = 'Binh phuong cua a bang' + ' ' + binhPhuongA;
//     document.getElementById('result2').innerHTML = 'Binh phuong cua b bang' + ' ' + binhPhuongB;
// }


// function tinh_tong_tu_a_den_b() {
//     let numberA = +document.getElementById('soA').value;
//     let numberB = +document.getElementById('soB').value;
//     let sum = 0;
//     if (numberA>numberB) {
//         for (let i = numberB; i<= numberA; i++) {
//             sum +=i;
//         }
//         document.getElementById('result1').innerHTML = sum;
//     } else if (numberA<numberB) {
//         for (let i = numberA; i<= numberB; i++) {
//             sum +=i;
//         }
//         document.getElementById('result1').innerHTML = sum;
//     }
// }


// function kiem_tra_thang_cua_nam () {
//     let year = document.getElementById('year').value;
//     if (year % 100 === 0 && year % 400 === 0) {
//         document.getElementById('result1').innerHTML =' Thang 2 co 29 ngay'
//     } else if (year % 4 === 0) {
//         if (year % 100 === 0) {
//             document.getElementById('result1').innerHTML ='thang 2 co 28 ngay'
//         } else {
//             document.getElementById('result1').innerHTML =' Thang 2 co 29 ngay'
//         }
//     } else {
//         document.getElementById('result1').innerHTML ='thang 2 co 28 ngay'
//     }
// }


// function kiem_tra_ba_canh_cua_tam_giac() {
//     let a = +document.getElementById('canhA').value;
//     let b = +document.getElementById('canhB').value;
//     let c = +document.getElementById('canhC').value;
//     if (a + b > c && b + c > a && c + a > b) {
//         if (a === b && b === c) {
//             document.getElementById('result1').innerHTML = "Tam giác đều";
//         } else if (a == b || b == c || c == a) {
//             document.getElementById('result1').innerHTML = "Tam giác cân";
//         }
//     } else {
//         document.getElementById('result1').innerHTML = "Không phải tam giác";
//     }
//
// }


function kiem_tra_the_ki() {
    let nam = +document.getElementById('year').value;
    let theky = nam /1000;
    document.getElementById('result1').innerHTML = 'the ky' + ' ' + theky;
}

//




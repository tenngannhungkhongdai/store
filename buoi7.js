// bai1
// let a = prompt('a')
// let b = prompt('b')
// if(a==0,b==0){alert('pt vo  so nghiem')}
// else if(a==0){alert('pt vo nghiem')}
// else{
//     c=-b/a
//     alert('pt co nghiem:')
//     alert(c)
// }

// bai2
// let a = prompt('a')
// let b = prompt('b')
// let c = prompt('c')
// if(a>=b&&a>=c){alert(a)}
// else if(b>=a&&b>=c){alert(b)}
// else{alert(c)}

// bai3
// let a = prompt('a')
// let b = prompt('b')
// if(a<=b){alert(a)}
// else{alert(b)}

// bai4
// let a = prompt('a')
// let b = prompt('b')
// let c = prompt('c')
// if(a==0){
//     if(b==0,c==0){alert('pt vo  so nghiem')}
//     else if(b==0){alert('pt vo nghiem')}
//     else{
//         x=-c/b
//         alert('pt co 1 nghiem:')
//         alert(x)
// }
// }
// else{
//     y=b*b-4*a*c
//     if(y==0){
//         alert('pt co nghiem kep')
//         alert(-b/2/a)
//     }
//     else if(y<0){alert('pt vo nghiem')}
//     else {
//         alert('pt co 2 nghiem')
//         alert((-b+Math.sqrt(y))/2/a)
//         alert((-b-Math.sqrt(y))/2/a)
//     }
// }
// bai5
// let a = prompt('x')
// let b = prompt('y')
// if(x==0&&y==0){alert('goc toa do')}
// else if (x==0){alert('truc tung')}
// else if(y==0){alert('truc hoanh')}
// else if (x>0&&y>0){alert('goc phan tu thu 1')}
// else if (x>0&&y<0){alert('goc phan tu thu 2')}
// else if (x<0&&y<0){alert('goc phan tu thu 3')}
// else if (x<0&&y>0){alert('goc phan tu thu 4')}

// btvn
for(let i=1;i<=1000;i++){
    if (i%2==0){console.log(i+': so chan')}
    else{console.log(i+': so le')}
}
let so =[
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10'
]
so.push(prompt('nhập số'))
console.log(so)
alert('làm sao phân biệt được tứ giác là hình vuông hay hình thoi chỉ bằng độ dài 4 cạnh ?????????')
alert('thôi kệ cứ làm vậy :(')
let a1 =prompt('độ dài cạnh 1')
let b1 =prompt('nốt đi')
let c1 =prompt(' ')
let d1 =prompt(' ')
alert('không biết điều kiện để 2 tứ giác được gọi là bằng nhau là gì nhỉ?')
alert('kiểu điều kiện bằng nhau của tam giác gồm ccc cgc gcg ý')
if(
    a1>=Math.round(b1+c1+d1)||
    b1>=Math.round(a1+c1+d1)||
    c1>=Math.round(a1+b1+d1)||
    d1>=Math.round(a1+b1+c1)
){alert('không phải tứ giác')}
else if(a1==b1&&b1==c1&&c1==d1&&d1==a1){alert('hình vuông hoặc hình thoi')}
else if(
    a1==b1&&c1==d1||
    a1==c1&&b1==d1||
    a1==d1&&b1==c1
){alert('hình chữ nhật, tứ giác có 2 đường chéo vuông góc hoặc hình bình hành')}
else if( Math.round(a1+b1)==Math.round(c1+d1)){alert('tứ giác có đường tròn nội tiếp khi a,b và c,d là 2 cặp cạnh đối')}
else if( Math.round(a1+c1)==Math.round(b1+d1)){alert('tứ giác có đường tròn nội tiếp khi a,c và b,d là 2 cặp cạnh đối')}
else if( Math.round(a1+d1)==Math.round(b1+c1)){alert('tứ giác có đường tròn nội tiếp khi a,d và b,c là 2 cặp cạnh đối')}
else{alert('các tứ giác còn lại')}
alert('không xác định được hình thang T.T')
alert('chi tiết hơn cả cái đề bài')
let nam = prompt('nhập năm')
if (nam%4==0){alert('năm nhuận')}
else{alert('năm không nhuận')}
let x = prompt('x')
let y = prompt('y')
if(x==0&&y==0){alert('goc toa do')}
else if (x==0){alert('truc tung')}
else if(y==0){alert('truc hoanh')}
else if (x>0&&y>0){alert('goc phan tu thu 1')}
else if (x>0&&y<0){alert('goc phan tu thu 2')}
else if (x<0&&y<0){alert('goc phan tu thu 3')}
else if (x<0&&y>0){alert('goc phan tu thu 4')}
alert('tự làm đấy không phải chép từ bài 5 trên lớp đâu')
alert('mà bài tập tuần này dài thế')
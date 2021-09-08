document.getElementById('evenNumber').addEventListener('click',findEven)
function findEven(){
    var even=[]
    var a=document.getElementById('so').value
    if(4<=a&&a<=20){
        for(i=4;i<=a;i+=2){
            even.push(i)
        }
        document.getElementById('result').innerHTML='even number: '+even
    }
    else{document.getElementById('result').innerHTML=''}
}
function color(){
    let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)
    document.getElementById('change').style.backgroundColor='rgb('+r+','+g+','+b+')'
}
function white(){
    document.getElementById('change').style.backgroundColor='rgba(255,255,255,0)'
}
document.getElementById('triangle').addEventListener('click',numberOneTriangle)
function numberOneTriangle(){
    var one=''
    var c=document.getElementById('loop').value
    for(a=1;a<=c;a++){
        for(bb=1;bb<=a;bb++){
            one=one+'1'
        }
        one=one+'<br>'
    }
    document.getElementById('numberOne').innerHTML=one
}
function Dongho() {
    var gio = document.getElementById("gio");
    var phut = document.getElementById("phut");
    var giay = document.getElementById("giay");
    var Giohientai = new Date().getHours();
    var Phuthientai = new Date().getMinutes();
    var Giayhientai = new Date().getSeconds();
    gio.innerHTML = Giohientai;
    phut.innerHTML = Phuthientai;
    giay.innerHTML = Giayhientai;
    let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)
    document.body.style.backgroundColor='rgb('+r+','+g+','+b+')'
}
var Demgio = setInterval(Dongho, 1000);

so=''
function lol(){
    if(this.id=="="){
        document.getElementById('ngudot').innerHTML=Math.round(eval(so)*100000000)/100000000
    }
    else{
        so=so+this.id
        document.getElementById('thamlam').innerHTML = so

    }
}
var number=document.getElementsByClassName('mêm')
for(i=0;i<number.length;i++){number[i].addEventListener('click',lol)}
var number=document.getElementsByClassName('lỏd')
for(i=0;i<number.length;i++){number[i].addEventListener('click',lol)}
document.getElementById('rết').addEventListener('click',cutrangoai)
function cutrangoai(){
    so=''
    document.getElementById('thamlam').innerHTML = so
    document.getElementById('ngudot').innerHTML=0
}
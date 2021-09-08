document.getElementById('bmr').addEventListener('click',funfunction)
function funfunction(){
    let a = document.getElementById('gia').value
    let b = document.getElementById('lun').value
    let c = document.getElementById('beo').value
    if(document.getElementById('duc').checked){
        d = 66.5+13.7*c+5*b+6.8*a
    }
    else if(document.getElementById('cai').checked){
        d = 655+9.6*c+1.8*b+4.7*a
    }
    document.getElementById('ketqua').innerHTML = 'BMR: '+ d
}
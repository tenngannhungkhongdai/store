document.getElementById('lmao').addEventListener('click',bmi)
function bmi(){
    let a =document.getElementById('lunvl').value
    let b =document.getElementById('beovl').value
    c= b/a/a
    document.getElementById('a butt tuba').innerHTML = 'bmi: '+c
    if(c<0){alert('what............how')}
    else if(c>=0&&c<18.5){document.getElementById('reverse it').innerHTML = 'người như cái que mà cứ ăn kiêng'}
    else if(c>=18.5&&c<25){document.getElementById('reverse it').innerHTML = 'ổn'}
    else if(c>=25&&c<30){document.getElementById('reverse it').innerHTML = 'ăn ít lại và tập thể dục nhiều hơn'}
    else{document.getElementById('reverse it').innerHTML = 'cái chỉ số này hơi bị kinh đấy, hết thuốc chữa r btw'}
}

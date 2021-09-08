document.getElementById('submit').addEventListener('click',comparison)
function comparison(newaccount){
    let a = document.getElementById('name').value
    let b = document.getElementById('email').value
    let c = document.getElementById('phone').value
    let d = document.getElementById('account').value
    let e = document.getElementById('pass1').value
    let f = document.getElementById('pass2').value
    if(
        a==''||
        b==''||
        c==''||
        d==''||
        e==''||
        f==''
    ){alert('Nhìn lại xem thiếu cái gì không kìa')}
    else if(f!=e){alert('nhập lại mỗi cái mật khẩu mà cũng sai')}
    else{
        let newaccount={
            ten:a,
            email:b,
            phone:c,
            account:d,
            password:e,
        }
        console.log(newaccount)
        localStorage.setItem('user',JSON.stringify(newaccount))
        return newaccount
    }
}


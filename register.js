$('#submit').click(function(){
    let name=$('#name').val()
    let email=$('#email').val()
    let phone=$('#phone').val()
    let account=$('#account').val()
    let pass1=$('#pass1').val()
    let pass2=$('#pass2').val()
    if(
        name != ''&&
        email != ''&&
        phone != ''&&
        account != ''&&
        pass1 != ''&&
        pass2 != ''
    ){
        if(pass1 == pass2){
            let users = JSON.parse(localStorage.getItem('users'))
            let id = users.length
            const newuser = {
                id:id,
                name:name,
                email:email,
                phone:phone,
                account:account,
                pass:pass1,
            }
            users.push(newuser)
            localStorage.setItem('users',JSON.stringify(users))
            localStorage.setItem('user',id)
            window.location.href="shopee.html"
        }    
    }
    clearinput()
})
function clearinput() {
    $("#name").val("");
    $("#email").val("");
    $("#phone").val("");
    $("#account").val("");
    $("#pass1").val("");
    $("#pass2").val("");
}
function login(){
    window.location.href="login.html"
}
function back(){
    window.location.href="shopee.html"
}
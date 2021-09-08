$('#submit').click(function(){
    let account=$('#account').val()
    let pass=$('#pass').val()
    let users = JSON.parse(localStorage.getItem('users'))
    var id=0
    while(id<users.length){
        if(
            account==users[id].account&&
            pass==users[id].pass
        ){
            localStorage.setItem('user',id)
            window.location.href="shopee.html"
            break
        }
        else{id++}
    }
})
function register(){
    window.location.href="register.html"
}
function back(){
    window.location.href="shopee.html"
}
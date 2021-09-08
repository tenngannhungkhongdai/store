var id=localStorage.getItem('user')
if(id!=null){
    $('#signin').addClass("hidden")
    $('#login').addClass("hidden")
    $('#user').removeClass("hidden")
    $('#logout').removeClass("hidden")
    $('#cart').removeClass("hidden")
    $('#alert').addClass("hidden")
}
function logout(){
    localStorage.removeItem('user')
}
let users = JSON.parse(localStorage.getItem('users'))
document.getElementById('user').innerHTML="User:"+users[id].name

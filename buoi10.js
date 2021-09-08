document.getElementById('gameforfun').addEventListener('click',color)
function loop(){
    
}
function color(){
    let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)
    document.body.style.backgroundColor='rgb('+r+','+g+','+b+')'
} 

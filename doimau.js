document.getElementById('aneasyhomework').addEventListener('click',goaway)
function goaway(){
    if(document.getElementById('khac').checked){
        let r = document.getElementById('mar').value
        let g = document.getElementById('mag').value
        let b = document.getElementById('mab').value
        let a = document.getElementById('maa').value
        if(
            r==''||
            g==''||
            b==''||
            a==''
        ){alert('Nhập đủ mã màu')}
        else if(
            0<=r&&r<=255&&
            0<=g&&g<=255&&
            0<=b&&b<=255&&
            0<=a&&a<=1
        ){document.body.style.backgroundColor='rgba('+r+','+g+','+b+','+a+')'}
        else{alert('Nhập đúng cái giới hạn mã màu đi')}

    }
    else if(document.getElementById('do').checked){document.body.style.backgroundColor="red"}
    else if(document.getElementById('hong').checked){document.body.style.backgroundColor="pink"}
    else if(document.getElementById('vang').checked){document.body.style.backgroundColor="yellow"}
    else if(document.getElementById('lam').checked){document.body.style.backgroundColor="blue"}
    else if(document.getElementById('luc').checked){document.body.style.backgroundColor="green"}
    else if(document.getElementById('tim').checked){document.body.style.backgroundColor="purple"}
    else if(document.getElementById('nau').checked){document.body.style.backgroundColor="brown"}
    else if(document.getElementById('cam').checked){document.body.style.backgroundColor="orange"}
    else{alert('Bấm vô một ô tròn thì nó mới chạy được')}
}
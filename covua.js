let banco=[
    ['a1','b1','c1','d1','e1','f1','g1','h1'],
    ['a2','b2','c2','d2','e2','f2','g2','h2'],
    ['a3','b3','c3','d3','e3','f3','g3','h3'],
    ['a4','b4','c4','d4','e4','f4','g4','h4'],
    ['a5','b5','c5','d5','e5','f5','g5','h5'],
    ['a6','b6','c6','d6','e6','f6','g6','h6'],
    ['a7','b7','c7','d7','e7','f7','g7','h7'],
    ['a8','b8','c8','d8','e8','f8','g8','h8']
]
var o=document.getElementsByClassName('square')
var otrang=['b1','d1','f1','h1','a2','c2','e2','g2','b3','d3','f3','h3','a4','c4','e4','g4','b5','d5','f5','h5','a6','c6','e6','g6','b7','d7','f7','h7','a8','c8','e8','g8']
var oden=['a1','c1','e1','g1','b2','d2','f2','h2','a3','c3','e3','g3','b4','d4','f4','h4','a5','c5','e5','g5','b6','d6','f6','h6','a7','c7','e7','g7','b8','d8','f8','h8']
let quanco=[
b151={
    id: 'b151',
    side: 'bpiece',
    type: 'brook',
    position: banco[7][0],
    avatar: '&#9820;'
},
b131={
    id: 'b131',
    side: 'bpiece',
    type: 'bknight',
    position: banco[7][1],
    avatar: '&#9822;'
},
b141={
    id: 'b141',
    side: 'bpiece',
    type: 'bbishop',
    position: banco[7][2],
    avatar: '&#9821;'
},
b191={
    id: 'b191',
    side: 'bpiece',
    type: 'bqueen',
    position: banco[7][3],
    avatar: '&#9819;'
},
b101={
    id: 'b101',
    side: 'bpiece',
    type: 'bking',
    position: banco[7][4],
    avatar: '&#9818;'
},
b142={
    id: 'b142',
    side: 'bpiece',
    type: 'bbishop',
    position: banco[7][5],
    avatar: '&#9821;'
},
b132={
    id: 'b132',
    side: 'bpiece',
    type: 'bknight',
    position: banco[7][6],
    avatar: '&#9822;'
},
b152={
    id: 'b132',
    side: 'bpiece',
    type: 'brook',
    position: banco[7][7],
    avatar: '&#9820;'
},
b111={
    id: 'b111',
    side: 'bpiece',
    type: 'bpawn',
    position: banco[6][0],
    avatar: '&#9823;'
},
b112={
    id: 'b112',
    side: 'bpiece',
    type: 'bpawn',
    position: banco[6][1],
    avatar: '&#9823;'
},
b113={
    id: 'b113',
    side: 'bpiece',
    type: 'bpawn',
    position: banco[6][2],
    avatar: '&#9823;'
},
b114={
    id: 'b114',
    side: 'bpiece',
    type: 'bpawn',
    position: banco[6][3],
    avatar: '&#9823;'
},
b115={
    id: 'b115',
    side: 'bpiece',
    type: 'bpawn',
    position: banco[6][4],
    avatar: '&#9823;'
},
b116={
    id: 'b116',
    side: 'bpiece',
    type: 'bpawn',
    position: banco[6][5],
    avatar: '&#9823;'
},
b117={
    id: 'b117',
    side: 'bpiece',
    type: 'bpawn',
    position: banco[6][6],
    avatar: '&#9823;'
},
b118={
    id: 'b118',
    side: 'bpiece',
    type: 'bpawn',
    position: banco[6][7],
    avatar: '&#9823;'
},
w051={
    id: 'w051',
    side: 'wpiece',
    type: 'wrook',
    position: banco[0][0],
    avatar: '&#9814;'
},
w031={
    id: 'w031',
    side: 'wpiece',
    type: 'wknight',
    position: banco[0][1],
    avatar: '&#9816;'
},
w041={
    id: 'w041',
    side: 'wpiece',
    type: 'wbishop',
    position: banco[0][2],
    avatar: '&#9815;'
},
w091={
    id: 'w091',
    side: 'wpiece',
    type: 'wqueen',
    position: banco[0][3],
    avatar: '&#9813;'
},
w001={
    id: 'w001',
    side: 'wpiece',
    type: 'wking',
    position: banco[0][4],
    avatar: '&#9812;'
},
w042={
    id: 'w042',
    side: 'wpiece',
    type: 'wbishop',
    position: banco[0][5],
    avatar: '&#9815;'
},
w032={
    id: 'w032',
    side: 'wpiece',
    type: 'wknight',
    position: banco[0][6],
    avatar: '&#9816;'
},
w052={
    id: 'w052',
    side: 'wpiece',
    type: 'wrook',
    position: banco[0][7],
    avatar: '&#9814;'
},
w001={
    id: 'w001',
    side: 'wpiece',
    type: 'wpawn',
    position: banco[1][0],
    avatar: '&#9817;'
},
w002={
    id: 'w002',
    side: 'wpiece',
    type: 'wpawn',
    position: banco[1][1],
    avatar: '&#9817;'
},
w003={
    id: 'w003',
    side: 'wpiece',
    type: 'wpawn',
    position: banco[1][2],
    avatar: '&#9817;'
},
w004={
    id: 'w004',
    side: 'wpiece',
    type: 'wpawn',
    position: banco[1][3],
    avatar: '&#9817;'
},
w005={
    id: 'w005',
    side: 'wpiece',
    type: 'wpawn',
    position: banco[1][4],
    avatar: '&#9817;'
},
w006={
    id: 'w006',
    side: 'wpiece',
    type: 'wpawn',
    position: banco[1][5],
    avatar: '&#9817;'
},
w007={
    id: 'w007',
    side: 'wpiece',
    type: 'wpawn',
    position: banco[1][6],
    avatar: '&#9817;'
},
w008={
    id: 'w008',
    side: 'wpiece',
    type: 'wpawn',
    position: banco[1][7],
    avatar: '&#9817;'
},
]
function xepbanco(){
    for(c=0;c<32;c++){
        document.getElementById(otrang[c]).style.backgroundColor='rgb(155,155,155)'
        document.getElementById(oden[c]).style.backgroundColor='rgb(100,100,100)'
    }
    for(i=0;i<o.length;i++){
        for(a=0;a<quanco.length;a++){
            if(o[i].id==quanco[a].position){o[i].innerHTML=`<span class="${quanco[a].side}" id="${quanco[a].id}">${quanco[a].avatar}</span>`}
        }
    }
    var piece = document.getElementsByClassName('wpiece')
    for(add=0;add<piece.length;add++){piece[add].addEventListener('click',chess)}
    var piece = document.getElementsByClassName('bpiece')
    for(add=0;add<piece.length;add++){piece[add].addEventListener('click',chess)}
}
xepbanco()
function chess(){
    var p=0
    while(p<quanco.length){
        if(quanco[p].id==this.id){
            break
        }
        else{p++}
    }
    alert(p)
    move()
    // if(quanco[p].type=='wknight'){
    //     move(1,2,1)
    //     move(-1,2,1)
    //     move(1,-2,1)
    //     move(-1,-2,1)
    //     move(2,1,1)
    //     move(-2,1,1)
    //     move(2,-1,1)
    //     move(-2,-1,1)
    // }
    return p
}
function move(){
    alert(p)
}
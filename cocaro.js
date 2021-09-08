let banco=[
    ['aa','ab','ac','ad','ae','af','ag','ah','ai','aj','ak','al','am','an','ao','ap','aq','ar','as','at','au','av','aw','ax','ay','az'],
    ['ba','bb','bc','bd','be','bf','bg','bh','bi','bj','bk','bl','bm','bn','bo','bp','bq','br','bs','bt','bu','bv','bw','bx','by','bz'],
    ['ca','cb','cc','cd','ce','cf','cg','ch','ci','cj','ck','cl','cm','cn','co','cp','cq','cr','cs','ct','cu','cv','cw','cx','cy','cz'],
    ['da','db','dc','dd','de','df','dg','dh','di','dj','dk','dl','dm','dn','do','dp','dq','dr','ds','dt','du','dv','dw','dx','dy','dz'],
    ['ea','eb','ec','ed','ee','ef','eg','eh','ei','ej','ek','el','em','en','eo','ep','eq','er','es','et','eu','ev','ew','ex','ey','ez'],
    ['fa','fb','fc','fd','fe','ff','fg','fh','fi','fj','fk','fl','fm','fn','fo','fp','fq','fr','fs','ft','fu','fv','fw','fx','fy','fz'],
    ['ga','gb','gc','gd','ge','gf','gg','gh','gi','gj','gk','gl','gm','gn','go','gp','gq','gr','gs','gt','gu','gv','gw','gx','gy','gz'],
    ['ha','hb','hc','hd','he','hf','hg','hh','hi','hj','hk','hl','hm','hn','ho','hp','hq','hr','hs','ht','hu','hv','hw','hx','hy','hz'],
    ['ia','ib','ic','id','ie','if','ig','ih','ii','ij','ik','il','im','in','io','ip','iq','ir','is','it','iu','iv','iw','ix','iy','iz'],
    ['ja','jb','jc','jd','je','jf','jg','jh','ji','jj','jk','jl','jm','jn','jo','jp','jq','jr','js','jt','ju','jv','jw','jx','jy','jz'],
    ['ka','kb','kc','kd','ke','kf','kg','kh','ki','kj','kk','kl','km','kn','ko','kp','kq','kr','ks','kt','ku','kv','kw','kx','ky','kz'],
    ['la','lb','lc','ld','le','lf','lg','lh','li','lj','lk','ll','lm','ln','lo','lp','lq','lr','ls','lt','lu','lv','lw','lx','ly','lz'],
    ['ma','mb','mc','md','me','mf','mg','mh','mi','mj','mk','ml','mm','mn','mo','mp','mq','mr','ms','mt','mu','mv','mw','mx','my','mz'],
    ['na','nb','nc','nd','ne','nf','ng','nh','ni','nj','nk','nl','nm','nn','no','np','nq','nr','ns','nt','nu','nv','nw','nx','ny','nz'],
    ['oa','ob','oc','od','oe','of','og','oh','oi','oj','ok','ol','om','on','oo','op','oq','or','os','ot','ou','ov','ow','ox','oy','oz'],
    ['pa','pb','pc','pd','pe','pf','pg','ph','pi','pj','pk','pl','pm','pn','po','pp','pq','pr','ps','pt','pu','pv','pw','px','py','pz'],
    ['qa','qb','qc','qd','qe','qf','qg','qh','qi','qj','qk','ql','qm','qn','qo','qp','qq','qr','qs','qt','qu','qv','qw','qx','qy','qz'],
    ['ra','rb','rc','rd','re','rf','rg','rh','ri','rj','rk','rl','rm','rn','ro','rp','rq','rr','rs','rt','ru','rv','rw','rx','ry','rz'],
    ['sa','sb','sc','sd','se','sf','sg','sh','si','sj','sk','sl','sm','sn','so','sp','sq','sr','ss','st','su','sv','sw','sx','sy','sz'],
    ['ta','tb','tc','td','te','tf','tg','th','ti','tj','tk','tl','tm','tn','to','tp','tq','tr','ts','tt','tu','tv','tw','tx','ty','tz'],
    ['ua','ub','uc','ud','ue','uf','ug','uh','ui','uj','uk','ul','um','un','uo','up','uq','ur','us','ut','uu','uv','uw','ux','uy','uz'],
    ['va','vb','vc','vd','ve','vf','vg','vh','vi','vj','vk','vl','vm','vn','vo','vp','vq','vr','vs','vt','vu','vv','vw','vx','vy','vz'],
    ['wa','wb','wc','wd','we','wf','wg','wh','wi','wj','wk','wl','wm','wn','wo','wp','wq','wr','ws','wt','wu','wv','ww','wx','wy','wz'],
    ['xa','xb','xc','xd','xe','xf','xg','xh','xi','xj','xk','xl','xm','xn','xo','xp','xq','xr','xs','xt','xu','xv','xw','xx','xy','xz'],
    ['ya','yb','yc','yd','ye','yf','yg','yh','yi','yj','yk','yl','ym','yn','yo','yp','yq','yr','ys','yt','yu','yv','yw','yx','yy','zy'],
    ['za','zb','zc','zd','ze','zf','zg','zh','zi','zj','zk','zl','zm','zn','zo','zp','zq','zr','zs','zt','zu','zv','zw','zx','zy','zz']
]
var t=0
var demx=1
var demo=1
var quanx=[]
var quano=[]
var di=1
var o=document.getElementsByClassName('square')
for(i=0;i<o.length;i++){o[i].addEventListener('click',check)}
for(i=0;i<o.length;i++){o[i].addEventListener('click',vitri)}
for(i=0;i<o.length;i++){o[i].addEventListener('click',dat)}
function check(){
    var vt=this.id
    while(t<quanx.length){
        if(
            vt==quanx[t]||
            vt==quano[t]
        ){
            alert('illegal move')
            a=0
            t=0
            break;
        }
        else{t++}
    }
    if(t==quanx.length){
        a=1
        t=0
    }
    return gt=[vt,a]
}
function vitri(){
    for(r=0;r<banco.length;r++){
        if(banco[r].includes(gt[0])){
            var x=r
            var y=banco[r].indexOf(gt[0])
        }
    }
    return td=[x,y]
}
function dat(){
    if(gt[1]==1){
        if(di==1){
            document.getElementById('turn').innerHTML="Lượt:O"
            datx()
            di=0          
            winx()

        }
        else if(di==0){
            document.getElementById('turn').innerHTML="Lượt:X"
            dato()
            di=1           
            wino()
        }
    }
}
function datx(){
    document.getElementById(gt[0]).innerHTML='<span style="color:red" class="x">X</span>'
    quanx.push(gt[0])
}
function dato(){
    document.getElementById(gt[0]).innerHTML='<span style="color:blue" class="o">O</span>'
    quano.push(gt[0])
}
function winx(){
    w=1
    n=0
    while(w<5){
        while(n<quanx.length){
                if(
                banco[td[0]+w][td[1]]==quanx[n]
            ){
                n=0
                demx++
                w++
                break;
            }
            else{n++}
        }
        if(n==quanx.length){
            break;
        }
    }
    n=0
    w=1
    while(w<5){
        while(n<quanx.length){
            if(
                banco[td[0]-w][td[1]]==quanx[n]
            ){
                n=0
                demx++
                w++
                break;
            }
            else{n++}
        }
        if(n==quanx.length){
            break;
        }
    }
    if(demx>=5){
        alert('x win')
        for(i=0;i<o.length;i++){o[i].removeEventListener('click',check)}
        for(i=0;i<o.length;i++){o[i].removeEventListener('click',vitri)}
        for(i=0;i<o.length;i++){o[i].removeEventListener('click',dat)}
        for(i=0;i<o.length;i++){o[i].addEventListener('click',pressrestart)}
        demx=1
    }
    else{demx=1}
    w=1
    n=0
    while(w<5){
        while(n<quanx.length){
                if(
                banco[td[0]][td[1]+w]==quanx[n]
            ){
                n=0
                demx++
                w++
                break;
            }
            else{n++}
        }
        if(n==quanx.length){
            break;
        }
    }
    n=0
    w=1
    while(w<5){
        while(n<quanx.length){
            if(
                banco[td[0]][td[1]-w]==quanx[n]
            ){
                n=0
                demx++
                w++
                break;
            }
            else{n++}
        }
        if(n==quanx.length){
            break;
        }
    }
    if(demx>=5){
        alert('x win')
        for(i=0;i<o.length;i++){o[i].removeEventListener('click',check)}
        for(i=0;i<o.length;i++){o[i].removeEventListener('click',vitri)}
        for(i=0;i<o.length;i++){o[i].removeEventListener('click',dat)}
        for(i=0;i<o.length;i++){o[i].addEventListener('click',pressrestart)}
        demx=1
    }
    else{demx=1}
    w=1
    n=0
    while(w<5){
        while(n<quanx.length){
                if(
                banco[td[0]-w][td[1]+w]==quanx[n]
            ){
                n=0
                demx++
                w++
                break;
            }
            else{n++}
        }
        if(n==quanx.length){
            break;
        }
    }
    n=0
    w=1
    while(w<5){
        while(n<quanx.length){
            if(
                banco[td[0]+w][td[1]-w]==quanx[n]
            ){
                n=0
                demx++
                w++
                break;
            }
            else{n++}
        }
        if(n==quanx.length){
            break;
        }
    }
    if(demx>=5){
        alert('x win')
        for(i=0;i<o.length;i++){o[i].removeEventListener('click',check)}
        for(i=0;i<o.length;i++){o[i].removeEventListener('click',vitri)}
        for(i=0;i<o.length;i++){o[i].removeEventListener('click',dat)}
        for(i=0;i<o.length;i++){o[i].addEventListener('click',pressrestart)}
        demx=1
    }
    else{demx=1}
    w=1
    n=0
    while(w<5){
        while(n<quanx.length){
                if(
                banco[td[0]+w][td[1]+w]==quanx[n]
            ){
                n=0
                demx++
                w++
                break;
            }
            else{n++}
        }
        if(n==quanx.length){
            break;
        }
    }
    n=0
    w=1
    while(w<5){
        while(n<quanx.length){
            if(
                banco[td[0]-w][td[1]-w]==quanx[n]
            ){
                n=0
                demx++
                w++
                break;
            }
            else{n++}
        }
        if(n==quanx.length){
            break;
        }
    }
    if(demx>=5){
        alert('x win')
        for(i=0;i<o.length;i++){o[i].removeEventListener('click',check)}
        for(i=0;i<o.length;i++){o[i].removeEventListener('click',vitri)}
        for(i=0;i<o.length;i++){o[i].removeEventListener('click',dat)}
        for(i=0;i<o.length;i++){o[i].addEventListener('click',pressrestart)}
        demx=1
    }
    else{demx=1}
}
function wino(){
    w=1
    n=0
    while(w<5){
        while(n<quano.length){
                if(
                banco[td[0]+w][td[1]]==quano[n]
            ){
                n=0
                demo++
                w++
                break;
            }
            else{n++}
        }
        if(n==quano.length){
            break;
        }
    }
    n=0
    w=1
    while(w<5){
        while(n<quano.length){
            if(
                banco[td[0]-w][td[1]]==quano[n]
            ){
                n=0
                demo++
                w++
                break;
            }
            else{n++}
        }
        if(n==quano.length){
            break;
        }
    }
    if(demo>=5){
        alert('o win')
        for(i=0;i<o.length;i++){o[i].removeEventListener('click',check)}
        for(i=0;i<o.length;i++){o[i].removeEventListener('click',vitri)}
        for(i=0;i<o.length;i++){o[i].removeEventListener('click',dat)}
        for(i=0;i<o.length;i++){o[i].addEventListener('click',pressrestart)}
        demo=1
    }
    else{demo=1}
    w=1
    n=0
    while(w<5){
        while(n<quano.length){
                if(
                banco[td[0]][td[1]+w]==quano[n]
            ){
                n=0
                demo++
                w++
                break;
            }
            else{n++}
        }
        if(n==quano.length){
            break;
        }
    }
    n=0
    w=1
    while(w<5){
        while(n<quano.length){
            if(
                banco[td[0]][td[1]-w]==quano[n]
            ){
                n=0
                demo++
                w++
                break;
            }
            else{n++}
        }
        if(n==quano.length){
            break;
        }
    }
    if(demo>=5){
        alert('o win')
        for(i=0;i<o.length;i++){o[i].removeEventListener('click',check)}
        for(i=0;i<o.length;i++){o[i].removeEventListener('click',vitri)}
        for(i=0;i<o.length;i++){o[i].removeEventListener('click',dat)}
        for(i=0;i<o.length;i++){o[i].addEventListener('click',pressrestart)}
        demo=1
    }
    else{demo=1}
    w=1
    n=0
    while(w<5){
        while(n<quano.length){
                if(
                banco[td[0]-w][td[1]+w]==quano[n]
            ){
                n=0
                demo++
                w++
                break;
            }
            else{n++}
        }
        if(n==quano.length){
            break;
        }
    }
    n=0
    w=1
    while(w<5){
        while(n<quano.length){
            if(
                banco[td[0]+w][td[1]-w]==quano[n]
            ){
                n=0
                demo++
                w++
                break;
            }
            else{n++}
        }
        if(n==quano.length){
            break;
        }
    }
    if(demo>=5){
        alert('o win')
        for(i=0;i<o.length;i++){o[i].removeEventListener('click',check)}
        for(i=0;i<o.length;i++){o[i].removeEventListener('click',vitri)}
        for(i=0;i<o.length;i++){o[i].removeEventListener('click',dat)}
        for(i=0;i<o.length;i++){o[i].addEventListener('click',pressrestart)}
        demo=1
    }
    else{demo=1}
    w=1
    n=0
    while(w<5){
        while(n<quano.length){
                if(
                banco[td[0]+w][td[1]+w]==quano[n]
            ){
                n=0
                demo++
                w++
                break;
            }
            else{n++}
        }
        if(n==quano.length){
            break;
        }
    }
    n=0
    w=1
    while(w<5){
        while(n<quano.length){
            if(
                banco[td[0]-w][td[1]-w]==quano[n]
            ){
                n=0
                demo++
                w++
                break;
            }
            else{n++}
        }
        if(n==quano.length){
            break;
        }
    }
    if(demo>=5){
        alert('o win')
        for(i=0;i<o.length;i++){o[i].removeEventListener('click',check)}
        for(i=0;i<o.length;i++){o[i].removeEventListener('click',vitri)}
        for(i=0;i<o.length;i++){o[i].removeEventListener('click',dat)}
        for(i=0;i<o.length;i++){o[i].addEventListener('click',pressrestart)}
        demo=1
    }
    else{demo=1}
}
document.getElementById('restart').addEventListener('click',restart)
function restart(){
    for(i=0;i<o.length;i++){o[i].innerHTML=''}
    for(i=0;i<o.length;i++){o[i].addEventListener('click',check)}
    for(i=0;i<o.length;i++){o[i].addEventListener('click',vitri)}
    for(i=0;i<o.length;i++){o[i].addEventListener('click',dat)}
    for(i=0;i<o.length;i++){o[i].removeEventListener('click',pressrestart)}
    document.getElementById('turn').innerHTML="Lượt:X"
    t=0
    demx=1
    demo=1
    quanx=[]
    quano=[]
    di=1
}
function pressrestart(){
    alert('press restart')
}
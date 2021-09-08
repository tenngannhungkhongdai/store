function showword(){
    let wordlist=JSON.parse(localStorage.getItem('word'))
    for(id=0;id<wordlist.length;id++){
        var word=wordlist[id].word
        var spell=wordlist[id].spell
        var mean=wordlist[id].mean
        var use=wordlist[id].use
        var phrase=wordlist[id].phrase
        var note=wordlist[id].note
        const addHTML=`
            <tr id="row${id}">
                <td id="word${id}">${word}</td>
                <td id="spell${id}">${spell}</td>
                <td id="mean${id}">${mean}</td>
                <td id="use${id}">${use}</td>
                <td id="phrase${id}">${phrase}</td>
                <td id="note${id}">${note}</td>
                <td>
                <button type="button" class="action-update" onclick="updateword(${id})">Update</button>
                <button type="button" class="action-delete" onclick="deleteword(${id})">Delete</button>
                </td>
            </tr>
        `
        $("#listword").append(addHTML);
    }
}
showword()
$("#addword").click(function(){
    let wordlist=JSON.parse(localStorage.getItem('word'))
    let newid = wordlist.length
    let word = $("#word").val();
    let spell = $("#spell").val();
    let mean = $("#mean").val();
    let use = $("#use").val();
    let phrase = $("#phrase").val();
    let note = $("#note").val();
    if(
       word!=''&&
       spell!=''&&
        mean!=''
    ){
        const newword={
            id:newid,
            word:word,
            spell:spell,
            mean:mean,
            use:use,
            phrase:phrase,
            note:note,
        }
        wordlist.push(newword)
        localStorage.setItem('word',JSON.stringify(wordlist))
        const addHTML=`
        <tr id="row${id}">
            <td id="word${id}">${word}</td>
            <td id="spell${id}">${spell}</td>
            <td id="mean${id}">${mean}</td>
            <td id="use${id}">${use}</td>
            <td id="phrase${id}">${phrase}</td>
            <td id="note${id}">${note}</td>
            <td>
            <button type="button" class="action-update" onclick="updateword(${id})">Update</button>
            <button type="button" class="action-delete" onclick="deleteword(${id})">Delete</button>
            </td>
        </tr>
    `
        $("#listword").append(addHTML);
        clearinput()
    }
})
function clearinput() {
    $("#word").val("");
    $("#spell").val("");
    $("#mean").val("");
    $("#use").val("");
    $("#phrase").val("");
    $("#note").val("");
}
function updateword(d){
    let code = prompt('code')
    if(code == '30112004'){
        $("#word").val(document.getElementById(`word${d}`).textContent)
        $("#spell").val(document.getElementById(`spell${d}`).textContent)
        $("#mean").val(document.getElementById(`mean${d}`).textContent)
        $("#use").val(document.getElementById(`use${d}`).textContent)
        $("#phrase").val(document.getElementById(`phrase${d}`).textContent)
        $("#note").val(document.getElementById(`note${d}`).textContent)
        $("#addword").addClass("hidden")
        $("#update").removeClass("hidden")
        $("#cancel").removeClass("hidden")
        return i=d
    }
    else{alert('wrong')}
}
function back(){
    $("#addword").removeClass("hidden")
    $("#update").addClass("hidden")
    $("#cancel").addClass("hidden")
}
function change(){
    let word=$('#word').val()
    let spell=$('#spell').val()
    let mean=$('#mean').val()
    let use=$('#use').val()
    let phrase=$('#phrase').val()
    let note=$('#note').val()
    document.getElementById(`word${i}`).innerHTML=word
    document.getElementById(`spell${i}`).innerHTML=spell
    document.getElementById(`mean${i}`).innerHTML=mean
    document.getElementById(`use${i}`).innerHTML=use
    document.getElementById(`phrase${i}`).innerHTML=phrase
    document.getElementById(`note${i}`).innerHTML=note
    let wordlist=JSON.parse(localStorage.getItem('word'))
    const newword={
        id:i,
        word:word,
        spell:spell,
        mean:mean,
        use:use,
        phrase:phrase,
        note:note,
    }
    wordlist[i]=newword
    localStorage.setItem('word',JSON.stringify(wordlist))
}
function deleteword(id){
    let code = prompt('code')
    if(code == '30112004'){
        $(`#row${id}`).remove()
        let wordlist=JSON.parse(localStorage.getItem('word'))
        wordlist.splice(id,1)
        for(i=id;i<wordlist.length;i++){wordlist[i].id=i}
        localStorage.setItem('word',JSON.stringify(wordlist))
    }
    else{alert('wrong')}
}
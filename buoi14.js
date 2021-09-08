let tasklist = [localStorage.getItem('taskstore')];

tasklist =JSON.parse(tasklist)
taskslist =JSON.parse(tasklist)
let id = taskslist.length;
alert(taskslist)
// function showtask(){
//     for(i=1;i<=id;i++){
//         const newtask = {
//             id: i,
//             task: tasklist[i].name,
//             time: tasklist[i].time,
//             status: tasklist[i].status,
//             note: tasklist[i].note,
//             };
//             tasklist.push(newtask);
//             localStorage.setItem('taskstore',JSON.stringify(tasklist))
//             const addHTML = `
//             <tr>
//                 <td id="task${id}">${task}</td>
//                 <td id="time${id}">${time}</td>
//                 <td id="status${id}">${status}</td>
//                 <td id="note${id}">${note}</td>
//                 <td>
//                 <button type="button" class="action-update" onclick="updateTask(${id})">Update</button>
//                 <button type="button" class="action-delete" onclick="deleteTask(${id})">Delete</button>
//                 </td>
//             </tr>
//             `;
//             $("#listtask").append(addHTML);
//             clearInput();
//             id++;
//     }
// }
// $("#addtask").click(function (e) {
//     let task = $("#task").val();
//     let time = $("#time").val();
//     let status = $("input[name='status']:checked").val();
//     status = status === "done" ? "done" : "not yet";
//     let note = $("#note").val();
//     if(
//         task != ''&&
//         time != ''
//     ){
//         const newtask = {
//         id: id,
//         task: task,
//         time: time,
//         status: status,
//         note: note,
//         };
//         tasklist.push(newtask);
//         localStorage.setItem('taskstore',JSON.stringify(tasklist))
//         const addHTML = `
//         <tr>
//             <td id="task${id}">${task}</td>
//             <td id="time${id}">${time}</td>
//             <td id="status${id}">${status}</td>
//             <td id="note${id}">${note}</td>
//             <td>
//             <button type="button" class="action-update" onclick="updateTask(${id})">Update</button>
//             <button type="button" class="action-delete" onclick="deleteTask(${id})">Delete</button>
//             </td>
//         </tr>
//         `;
//         $("#listtask").append(addHTML);
//         clearInput();
//         id++;
//     }    
// });
// function clearInput() {
//     $("#task").val("");
//     $("#time").val("");
//     $("input[name='status']").attr("checked", false);
//     $("#note").val("");
// }
// function updateTask(id) {
//     let index = findIndexTask(id);
//     $("#task1").val("");
// }
// function findIndexTask(numberId) {
//     let index;
//     for (let i = 0; i < taskslist.length; i++) {
//       if (tasklist[i].id === numberId) {
//         index = i;
//       }
//     }
//     return index;
// }

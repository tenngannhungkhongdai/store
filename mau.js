
let listTasks = [];
let id = 0;

// C: Create
$("#submit-add").click(function (e) {
  let newTask = $("#newTask").val();
  let time = $("#time").val();
  let status = $("input[name='status']:checked").val();
  status = status === "true" ? "Done" : "Not Yet";

  const task = {
    id: id,
    name: newTask,
    time: time,
    status: status,
  };

  listTasks.push(task);

  let addHTML = `<div class="view__row">
            <div class="view__row-name center-row">
              <p>${newTask}</p>
            </div>
            <div class="view__row-time border-left-col center-row">
              <p>${time}</p>
            </div>
            <div class="view__row-status border-left-col center-row">
              <p>${status}</p>
            </div>
            <div class="view__row-action border-left-col center-row">
              <div class="button-action">
                <button type="button" class="action-update" onclick='updateTask(
                  ${id}
                )'>Update</button>
                <button type="button" class="action-delete" onclick='deleteTask(
                    ${id}
                )'>Delete</button>
              </div>
            </div>
          </div>`;
  $(".view-crud").append(addHTML);

  clearInput();
  id++;
});

// U: Update
function updateTask(id) {
  clearInput();
  console.log(id);
  //   console.log(findIndexTask(listTasks, id));
  let index = findIndexTask(id);
  console.log("Đây là index trả về: ", index);

  // Change button
  $("#submit-add").addClass("hide-button");
  $("#submit-update").removeClass("hide-button");
  $("#button-cancel").removeClass("hide-button");
  //   Gán giá trị vào các ô input
  $("#newTask").val(listTasks[index].name);
  $("#time").val(listTasks[index].time);
  let status = listTasks[index].status === "Done" ? true : false;
  $("input[name='status']:checked").val(status);
}
// Button Cancel
$("#button-cancel").click(function (e) {
  $("#submit-add").removeClass("hide-button");
  $("#submit-update").addClass("hide-button");
  $("#button-cancel").addClass("hide-button");
  clearInput();
});

// D: Delete
function deleteTask(id) {
  $(".view__row").click(function () {
    $(this).remove();
  });
  let index = findIndexTask(id);
  console.log("Đây là index trả về: ", index);
  listTasks.splice(index, 1);
}

// Search: Hàm tìm kiếm dùng cho Update và Delete
function findIndexTask(numberId) {
  let index;
  for (let i = 0; i < listTasks.length; i++) {
    if (listTasks[i].id == numberId) {
      index = i;
    }
  }
  return index;
}

function clearInput() {
  $("#newTask").val("");
  $("#time").val("");
  $("input[name='status']").attr("checked", false);
}
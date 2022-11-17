function handleToDoFormSubmit() {
    console.log("Form submitted");

    const txtTodo = document.getElementById("txtTodo");
    console.log(txtTodo);

    const todoTextValue = txtTodo.value;
    console.log(todoTextValue);

    createTodoListItem(todoTextValue);
}

function createTodoListItem(text) {

    // let liOpening = "<li>";
    // const label = "<label>" + text + "</label>";
    // const editButton = "<button>Edit</button>";
    // const deleteButton = "<button>delete</button>";
    const liClosing = "</li><label> " + text + " </label><button class=`btn btn-primary`>Edit</button><button class = `btn btn-danger`>delete</button>";

    const li = "<li>"

    const ul = document.getElementById("todoList");
    ul.innerHTML = ul.innerHTML + li;
}
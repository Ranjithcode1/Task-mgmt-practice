const taskContainer = document.querySelector(".task__container");

let globalTaskData = [];

const generateHTML = (taskData) => `<div id=${taskData.id} class="col-md-6 col-lg-4 my-4">
<div class="card ">
    <div class="card-header d-flex justify-content-end gap-2">
        <button class="btn btn-outline-info"><i class="fad fa-pencil"></i></button>
        <button class="btn btn-outline-danger" name=${taskData.id} onclick="deleteCard.apply(this, arguments)" >
        <i class="fad fa-trash-alt" name=${taskData.id} ></i></button>
    </div>
    <div class="card-body">
        <img src=${taskData.image}
            alt="image" class="card-img">
        <h5 class="card-title mt-4">
        ${taskData.title}</h5>
        <p class="card-text">
        ${taskData.description}</p>
        <span class="badge bg-primary">${taskData.type}</span>
    </div>
    <div class="card-footer text-muted">
        <button class="btn btn-outline-primary">Open Task</button>
    </div>
</div>
</div> `;

const insertToDOM = (content) =>
    taskContainer.insertAdjacentHTML("beforeend", content);

const saveToLocalStorage = () => localStorage.setItem("tasky", JSON.stringify({
    cards: globalTaskData
}));

const addNewCard = () => {

    const taskData = {
        id: `${Date.now()}`,
        title: document.getElementById("taskTitle").value,
        image: document.getElementById("ImageUrl").value,
        type: document.getElementById("taskType").value,
        description: document.getElementById("taskDescription").value,

    };

    globalTaskData.push(taskData);

    saveToLocalStorage();

    const newCard = generateHTML(taskData);

    insertToDOM(newCard);

    document.getElementById("taskTitle").value = "";
    document.getElementById("ImageUrl").value = "";
    document.getElementById("taskType").value = "";
    document.getElementById("taskDescription").value = "";

    return;
};



const loadExistingCadrs = () => {

    const getData = localStorage.getItem("tasky");

    if (!getData) return;

    const taskCards = JSON.parse(getData);

    globalTaskData = taskCards.cards;

    globalTaskData.map((taskData) => {

        const newCard = generateHTML(taskData);


        insertToDOM(newCard);
    });

    return;

};

const deleteCard = (event) => {

    const targetID = event.target.getAttribute("name");
    const elementType = event.target.tagName;

    const removeTask = globalTaskData.filter((task) => task.id !== targetID);

    globalTaskData = removeTask;

    saveToLocalStorage();

    if (elementType === "BUTTON") {
        return taskContainer.removeChild(
            event.target.parentNode.parentNode.parentNode
        );
    } else {
        return taskContainer.removeChild(
            event.target.parentNode.parentNode.parentNode.parentNode
        );
    }

};
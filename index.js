const taskContainer = document.querySelector(".task__container");


const addNewCard = () => {

    const taskData = {
        id: `${Date.now()}`,
        title: document.getElementById("taskTitle").value,
        image: document.getElementById("ImageUrl").value,
        type: document.getElementById("taskType").value,
        description: document.getElementById("taskDescription").value,

    };


 const newCard = ` 
<div id=${taskData.id} class="col-md-6 col-lg-4 my-4">
    <div class="card ">
        <div class="card-header d-flex justify-content-end gap-2">
            <button class="btn btn-outline-info"><i class="fad fa-pencil"></i></button>
            <button class="btn btn-outline-danger"><i class="fad fa-trash-alt"></i></button>
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


    taskContainer.insertAdjacentHTML("beforeend", newCard);

    document.getElementById("taskTitle").value = "";
    document.getElementById("ImageUrl").value = "";
    document.getElementById("taskType").value = "";
    document.getElementById("taskDescription").value = "";

    return;
};
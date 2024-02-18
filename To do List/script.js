const Input = document.getElementById('input')
const ListTask = document.querySelector('.list-task')

function AddTask() {
    if (Input.value === '') {
        alert("You Most Something Write!")
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = Input.value
        ListTask.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    Input.value = "";
    SaveData()
}
ListTask.addEventListener('click', function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        SaveData()
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        SaveData()
    }
}, false)

function SaveData(){
    localStorage.setItem("data", ListTask.innerHTML)
}

function ShowData(){
    ListTask.innerHTML = localStorage.getItem("data")
}
ShowData()
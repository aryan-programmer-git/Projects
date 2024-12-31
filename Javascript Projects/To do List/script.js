const Display = document.getElementById("display")
let Unorderedlist = document.createElement("ul")
Display.append(Unorderedlist)
let Input = document.getElementById("input-task")
function addTask() {
    if (Input.value === "") {
        alert("Please write something")
    }
    else {
        let list = document.createElement("li")
        list.classList.add("checked")
        list.classList.toggle("checked")
        console.log(list.className)
        list.innerHTML = Input.value
        Unorderedlist.appendChild(list)
        let remove = document.createElement("span")
        remove.innerHTML = "&times;";
        list.appendChild(remove) 
    }
    Input.value = ""
    savedata()
}
Unorderedlist.addEventListener('click', (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        savedata()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata()
    }
})

function savedata() {
    localStorage.setItem("data",Unorderedlist.innerHTML)
}
function showDAta() {
    Unorderedlist.innerHTML = localStorage.getItem("data")
}
showDAta()
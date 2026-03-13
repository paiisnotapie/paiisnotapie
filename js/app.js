const editBtn = document.getElementById("editBtn")
const nameDisplay = document.getElementById("nameDisplay")
const nameInput = document.getElementById("nameInput")
const comma = document.getElementById("comma")

let editing = false


// Load name from Local Storage
const savedName = localStorage.getItem("username")

if(savedName){
  nameDisplay.textContent = savedName
  comma.textContent = ","
}


// Toggle edit mode
editBtn.addEventListener("click", () => {

  if(!editing){

    nameInput.style.display = "inline"
    nameDisplay.style.display = "none"

    nameInput.value = nameDisplay.textContent
    nameInput.focus()

    editing = true

  }else{

    nameInput.style.display = "none"
    nameDisplay.style.display = "inline"

    editing = false
  }

})


// Save name when pressing Enter
nameInput.addEventListener("keydown", (e) => {

  if(e.key === "Enter"){

    const name = nameInput.value.trim()

    if(name !== ""){
      nameDisplay.textContent = name
      comma.textContent = ","
      localStorage.setItem("username", name)

    }else{
      nameDisplay.textContent = ""
      comma.textContent = ""
      localStorage.removeItem("username")
    }

    nameInput.style.display = "none"
    nameDisplay.style.display = "inline"

    editing = false
  }

})

const noteForm = document.querySelector("#note-form")
const noteInput = document.querySelector("#input-note")
const submitButton = document.querySelector("#submitButton")
const notes = document.querySelector("#notes")
const buttonRemoved = `<button class= "buttonRemove" onclick = "removeNote(this)"> <span class="text">Delete</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span>
</button>`
const removeAll = document.querySelector("#submitButton2")



let notesStorage = localStorage.getItem("notesStr") ? JSON.parse(localStorage.getItem("notesStr")) : []

noteForm.addEventListener('submit', e => {
    e.preventDefault()
    notesStorage.push(noteInput.value)
    localStorage.setItem('notesStr', JSON.stringify(notesStorage))
    listBuilder(noteInput.value)
    noteInput.value = ""
})

const listBuilder = (text) => {
    const note = document.createElement("li")
    note.innerHTML = `✨✨✨${text}✨✨✨ ${buttonRemoved} `
    notes.appendChild(note)
}

const removeNote = (button) => {
    let noteDelete = button.parentNode
    const index = notesStorage.indexOf(noteDelete)
    notesStorage.splice(index, 1)
    localStorage.setItem("notesStr", JSON.stringify(notesStorage))
    noteDelete.remove()
}


 removeAll.onclick = (e) => {    
    e.preventDefault()        
    notesStorage = []
    localStorage.setItem("notesStr", JSON.stringify(notesStorage))
    notes.innerHTML = " "
 };  
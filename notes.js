const fs = require('fs')
const chalk = require('chalk')


const addNote =  (title, body) => {
    try{
        const notes = loadNotes()
        const duplicateNote = notes.find((notes) => notes.title === title)                
       
        if (!duplicateNote) {
            notes.push({
                title: title,
                body: body
            })
            saveNotes(notes)
            console.log(chalk.green.inverse('New note added!'))
        } else {
            console.log(chalk.red.inverse('Note title taken'))
        }
        
        
    } catch (error) {
        console.log(error)
    }
}

const removeNote = (title)  => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((notes) =>  notes.title !== title)

    if (notes.length > notesToKeep.length) {
       console.log(chalk.green.inverse('Note removed!'))
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }

    saveNotes(notesToKeep)
}

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.blue.bold('Your notes'))

   notes.forEach((notes) =>{
    console.log("Title: " + chalk.blue.bold(notes.title)  +  " Body: " + chalk.green(notes.body))
   })
}

const readNotes = (title) =>  {
    const notes = loadNotes()
    const note =  notes.find((notes) => notes.title === title)
    if(note){
        console.log(chalk.cyan.inverse(note.title))
        console.log(note.body)
    }
    else{
        console.log(chalk.red.inverse("Note Not Found!"))
    } 
} 
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}
 
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

//Customize yargs version
yargs.version('1.1.0')

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//Create a remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
     }
    })

//Create a read command
yargs.command({
    command: 'read',
    describe: 'Reading a note',
    builder: {
         title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
         }
    },
    handler(argv) {
        notes.readNotes(argv.title)
    }
})

//Create a list command
yargs.command({
    command: 'list',
    describe: 'Listing new note',
    handler() {
        notes.listNotes()
    }
})
//Using yargs to make our notes add, remove, read, list

yargs.parse()

//console.log(yargs.argv)


// NOnoN0nOYes (Note taking app)
// Save a note
const notes = [];
function addNote(content, id)
{
    const noteObj = {};
    noteObj.content = content;
    noteObj.id = id;
    notes.push(noteObj);
}
addNote('Hack', 1);
addNote('Your', 2);
addNote('Future', 3);
addNote('Coding School', 4);

// Get a note
function getNoteFromId(id)
{
    for (let i = 0; i < notes.length; i++){
        if (isNaN(id)){
            return 'Please enter a valid id in numbers.';
        }
        else if (id === notes[i].id) {
            return notes[i];
        }
    } 
    return 'Not in the list.'       
}    
console.log(getNoteFromId('hhhhmc'));
console.log(getNoteFromId());
console.log(getNoteFromId(1));
console.log(getNoteFromId(11));

// Get all notes
console.log(notes);

// Log out notes  "The note with id: 1, has the following note text: "some example note"

function logOutNotesFormatted()
{
     for(let i = 0; i < notes.length; i++)
     {
         console.log(`The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}.`);
     }
}
logOutNotesFormatted();
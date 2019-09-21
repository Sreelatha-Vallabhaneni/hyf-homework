
//**********************  My favorite songs  ***************************
const songDatabase = [{
    songId: 1,
    title: 'My baby',
    artist: 'Soggy socks',
},
{
    songId: 2,
    title: '3 nails in wood',
    artist: 'The carpenters',
},
{
    songId: 3,
    title: 'Blacker than black',
    artist: 'Instant coffee',
},
{
    songId: 4,
    title: 'When is enough too little?',
    artist: 'The spies girls',
},
];

const myPlaylist = [];

// Add song to database

function addSongToDatabase(song)
{
    const songObj = new Object;
    songObj.songId = songDatabase.length + 1;
    songObj.title = song.title;
    songObj.artist = song.artist;
    songDatabase.push(songObj);
}
const favSong1 = {
    title: 'La La Like it', 
    artist: 'Amna',
}
const favSong2 = {
    title: 'Kvinde min',
    artist: 'Kim Larsen',
}
addSongToDatabase(favSong1);
addSongToDatabase(favSong2);
//console.log(songDatabase);

// Searching for a song
console.log('Song Search :-')
function getSongByTitle(title) {
    for (let i = 0; i < songDatabase.length; i++) {
        if (title === songDatabase[i].title) { 
            return songDatabase[i]; 
        }
    }
    //const indexNumber = songDatabase.indexOf(songDatabase[i]);
    //return 'Index number:' + indexNumber;
    return 'No song in the list';
}
const searchedSong = getSongByTitle('When is enough too little?');
console.log(searchedSong);
const searchedSong1 = getSongByTitle('When is enough too');
console.log(searchedSong1);
const searchedSong2 = getSongByTitle('La La Like it');
console.log(searchedSong2);

// Fuzzy Search
function fuzzySearch(text, search)
{
    const search = search.replace(/\ /g, '').toLowerCase();
    var fuzzysongs =[];
    const searchPosition = 0;
    // Go through each character in the text
    for (let i = 0; i < text.length; i++) 
    {
        const titleChar = text[i].title;
        // if we match a character in the search, highlight it
        if (searchPosition < search.length  &&
            titleChar.toLowerCase() == search[searchPosition])
        {
            searchPosition += 1;
        }
        fuzzysongs.push(titleChar)
         
    }// If are characters remaining in the search text,
    // return an empty string to indicate no match
    if (searchPosition != search.length) {
        return '';
    }
    return fuzzysongs.join ('');
}
console.log(fuzzySearch('When is enough too little ?','when to lttl'));  /* I am still working on fuzzy search its not working*/

// Create our own playlist
console.log('\n myPlayList :-');
const myPlayList = [];
function addSongToMyPlaylist(title)
{
    if (getSongByTitle(title))
    {
        function addSong(title) 
        {
            myPlayList.push({ 'SongID': getSongByTitle(title).songId, title, 'artist': getSongByTitle(title).artist});
        }
        return addSong(title);
    }
}
addSongToMyPlaylist('When is enough too little?');
addSongToMyPlaylist('Kvinde min');
addSongToMyPlaylist('3 nails in wood');
console.log(myPlayList);
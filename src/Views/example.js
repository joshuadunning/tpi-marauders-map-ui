const note = document.getElementById("note");
const noteBtn = document.createElement("noteBtn");

getNote();

function getNote() {

const config = {

    headers: {
        "Accept": "application/json"
    },
    mode: "no-cors"
}
fetch('http://localhost:8086/note/1', config)
.then(response => response.json)
.then(data => {
    alert(data);
    note.innerText = data;
}); 

/*fetch('http://localhost:8086/note/1', config).then(function(response){
        response.json().then(function(data) {
            console.log(data);
        });
    }).catch(function(error) {
        console.log('Fetch Error:', error);
    }); */

} 





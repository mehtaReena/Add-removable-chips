const addbtn = document.querySelector(".addbtn");
const chipContainerEl = document.querySelector(".chipContainer");
const nameEl = document.querySelector(".name");

let id = 0;
addbtn.addEventListener("click", (e) => {
    let name = nameEl.value;
    if(name)
    createChip(name)
    else
    alert("Please enter user name!")
});


function createChip(text) {

    id = id + 1;
    let newChip = document.createElement('div');
    newChip.setAttribute("id", id)
    let remove = document.createElement('button');
    remove.classList.add("remove")

    newChip.classList.add("chip");
    let img = document.createElement("img")
    let personName = document.createElement('div');
    personName.innerText = text;
    img.src = 'bBHe98c.png';
    img.classList.add("chip-img")
    remove.innerText = '❌';
    remove.setAttribute("value" ,id)
    remove.addEventListener("click", function (e) {

        removeChip(e.target.value);
    });

    newChip.appendChild(img);
    newChip.appendChild(personName);
    newChip.appendChild(remove)
    nameEl.value = "";


    chipContainerEl.appendChild(newChip)

    function removeChip(id) {
        let elem = document.getElementById(id);
        elem.parentNode.removeChild(elem);


    }






}


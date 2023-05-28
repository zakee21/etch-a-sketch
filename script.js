//function to create boxes with mouseover eventListeners using a "for" loop
    //Includes calculating boxes to appropriate size
function divBox (box) {
    for (i = 0; i < Math.pow(box, 2); i++) {
        const container = document.querySelector('#container');
        const div = document.createElement('div');
        div.classList.add('box');
        div.style.width = 100 / box + '%'
        div.addEventListener('mouseover', changeBackground);
        container.appendChild(div);
    };
};

//function to change background color for each box
function changeBackground() {
    this.style.backgroundColor = 'black';
};

//function to remove old grid boxes before adding new grid boxes
function removeBox() {
    const box = document.querySelectorAll('.box');
    for (let i = 0; i < box.length; i++) {
        box[i].remove();
    };
};

//Call function to set grid size default at 16 x 16 when page loads
divBox(16);
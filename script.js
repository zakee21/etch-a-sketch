//creat 16 x 16 divs which equals 256 individual divs
//function to create boxes with mouseover eventListeners using a "for" loop
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

function removeBox() {
    const box = document.querySelectorAll('.box');
    for (let i = 0; i < box.length; i++) {
        box[i].remove();
    };
};

divBox(16);

//logic and equation for calculating the width/height of each box:
//user enters number of boxes per row: 4
//4 is multiplied by 4 to get total number of boxes: 16
// box then = 16
//must divid 100 by the original number entered by user (4),
    // which can be obtained with finding it's square root

//turn the 256 divs into squares
//line up the divs into a 16 rows and 16 columns
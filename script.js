//creat 16 x 16 divs which equals 256 individual divs
//function to create boxes with mouseover eventListeners using a "for" loop
function divBox (box) {
    for (i = 0; i < box; i++) {
        const container = document.querySelector('#container');
        const div = document.createElement('div');
        div.classList.add('box');
        div.addEventListener('mouseover', changeBackground);
        container.appendChild(div);
    };
};
//function to change background color for each box
function changeBackground() {
    this.style.backgroundColor = 'black';
    //const test = document.querySelectorAll(".test");
    //for (i = 0; i < test.length; i++) {
    //test[i].style.backgroundColor = "black";
    //console.log('it works??');
    //};
};

divBox(256);


//turn the 256 divs into squares
//line up the divs into a 16 rows and 16 columns
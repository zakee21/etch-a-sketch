/*const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);*/


//creat 16 x 16 divs which equals 256 individual divs
//function to create row of box divs using a "for" loop
function divBox (box) {
    for (i = 0; i < box; i++) {
        const container = document.querySelector('#container');
        const div = document.createElement('div');
        div.classList.add('box');
        container.appendChild(div);
    };
};

divBox(256);



//const divColumn = document.createElement('div');
//div.classList.add('box');
//container.appendChild(div);

//divColumn(16);

//turn the 256 divs into squares
//line up the divs into a 16 rows and 16 columns
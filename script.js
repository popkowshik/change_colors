var index = 0;

function changeColor(){
    var colors = ['red','yellow','purple','green','violet','black','#FFC0CB'];

    // document.getElementsByTagName('body')[0].style.background = colors[index++]

    document.body.style.background = colors[index++]

    if(index == colors.length){
        index = 0;
    }
}


// ----------------------automatically will change color using time --------------------------------

// var index = 0;
// var colors = ['red', 'yellow', 'purple', 'green', 'violet', 'black','rose'];

// setInterval(() => {
//     document.body.style.background = colors[index++];
//     if (index >= colors.length) index = 0;
// }, 1000); // Changes color every 1 second

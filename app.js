const grid = document.querySelector('#drawingBord');
let clicked = true;

const rageInput = document.getElementById('slider');
const size = document.querySelector('#size');

let num=rageInput.value;
size.textContent=rageInput.value;

// take the input from the slider and build the new grid
rageInput.addEventListener('click', function (){
    gridRemove();
    size.textContent=rageInput.value;
    num = rageInput.value;
    newgrid();
})

// take the input from the slider and build the new grid

rageInput.addEventListener('touchmove', function (){
    gridRemove();
    size.textContent=rageInput.value;
    num = rageInput.value;
    newgrid();
})

// take the input from the slider and build the new grid

rageInput.addEventListener('mousemove', function (){
    gridRemove();
    size.textContent=rageInput.value;
    num = rageInput.value;
    newgrid();
})

// funtion to remove the grid from the dom
function gridRemove(){
    let squr = document.querySelectorAll('.squr');
    squr.forEach((div)=>{
        div.remove();
    })
    
}

// declare global funtion to use the color
let colorSe = "white";
// declare array to use as the random color effect
let rainbow = ['red','blue','green','violet', 'indigo','yellow','orange']

// funtion for building new funtion
newgrid()
function newgrid(){
    let gridWidth = grid.clientWidth;
    let gridHeight = grid.clientHeight;
    
    let squrHeight=gridHeight/num;
    let squrWidth = gridWidth/num;
  for (i=1; i<=(num*num); i++){
    let squr = document.createElement('div')
    // when the mouse is over the grid the color change as per the input
    squr.addEventListener('mouseover',function () {
        this.style.backgroundColor=colorChange();
    })
    squr.className='squr';
    // add the width and height to the divs to fit inside the grid
    squr.setAttribute('style', `width:${squrWidth}px;height: ${squrHeight}px;`);
    grid.appendChild(squr);
  }
}

// function for compare the color variable and return the appropriate color code
function colorChange(){
    if (!clicked){return}

    if (colorSe==="black"){
        return colorSe;
    }
    else if(colorSe==="rainbow"){
 return rainbow[Math.floor(Math.random()*7)];
    }
    else if (colorSe==="erase")
    {
        return "rgb(111, 49, 49)"
    }
    else if(colorSe=="random")
    {
        // retun the color code from color input
        return document.getElementById('color').value
         
    }
}

// black button
const blackBtn = document.querySelector('.black');
blackBtn.onclick=()=>{
    colorSe = "black";
    
    // delete the class from other button and 
    // add 'selector' class to the button for css effects
    let d = document.querySelectorAll('.selector')
    if (d)
    {
     d.forEach((d)=>d.classList.remove('selector'))
    }
    
    blackBtn.classList.add('selector')
}

// random color button
const randColrBtn = document.querySelector('.randomColor');
randColrBtn.onclick=()=>{
    colorSe = "rainbow"

    // delete the class from other button and 
    // add 'selector' class to the button for css effects
    let d = document.querySelectorAll('.selector')
    if (d)
    {
     d.forEach((d)=>d.classList.remove('selector'))
    }
    
    randColrBtn.classList.add('selector')
}

// eraser button
const eraserBtn = document.querySelector('.eraser');
eraserBtn.onclick=()=>{
   colorSe="erase"


   // delete the class from other button and 
    // add 'selector' class to the button for css effects
   let d = document.querySelectorAll('.selector')
    if (d)
    {
     d.forEach((d)=>d.classList.remove('selector'))
    }
    
    eraserBtn.classList.add('selector')
}

// reset button
const resetBtn = document.querySelector('.reset');
resetBtn.onclick=()=>{
   let squr = document.querySelectorAll('.squr');
    squr.forEach((sq)=> sq.style.backgroundColor='rgb(111, 49, 49)')
        
    

}

// color button
const colorBtn = document.querySelector('.color');
colorBtn.onclick=()=>{
    colorSe='random'


    // delete the class from other button and 
    // add 'selector' class to the button for css effects
    let d = document.querySelectorAll('.selector')
    if (d)
    {
     d.forEach((d)=>d.classList.remove('selector'))
    }

    document.getElementById('color').classList.add('selector')
    colorBtn.classList.add('selector');
}



document.body.onmousedown=()=> (clicked=true)
document.body.onmouseup=()=> (clicked=false)


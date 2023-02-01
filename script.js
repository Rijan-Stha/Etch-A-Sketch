const row = document.querySelector('#row').value;
const column = document.querySelector('#column').value;
const grid = document.querySelectorAll('.grid');
const color = document.querySelector('#color');
const eraser = document.querySelector('#eraser');
const canvas = document.querySelector('#section-grid');

let a,b;
function gridSetter(rows,columns){
    document.querySelector('#section-grid').innerHTML = '';
    for(let i=1;i<=columns;i++){
        for (let i =1; i<= rows; i++){
            let div = document.createElement('div');
            div.setAttribute('class','grid-el');
            document.querySelector('#section-grid').append(div);
        }
    }

    document.querySelector('#section-grid').style.gridTemplateColumns =  `repeat(${columns},1fr)`;
    document.querySelector('#section-grid').style.gridTemplateRows =  `repeat(${rows},1fr)`;
}

gridSetter(50,50);
grid.forEach(item=>{
    item.addEventListener('keyup',(e)=>{
    k = e.target.value;
        console.log(Number(k));
      if(typeof Number(k) == 'number' ){
        if(e.target === document.querySelector('#row')){
             a = k;
             
        }else{
             b = k;
        }
      }
      gridSetter(a,b);
    });
});

let clr = color.value;

function colr(){
    color.onchange = (e)=>{
        clr = e.target.value;
    }

    eraser.onclick = ()=>{
        clr = '#fff';
    }

    return clr;
}

canvas.onmousedown = function(event){

    function onMouseMove(event){
        event.target.style.backgroundColor = colr();
    }

    canvas.addEventListener('mousemove',onMouseMove,false);

    canvas.onmouseup = () =>{
        canvas.removeEventListener('mousemove',onMouseMove,false);
        canvas.onmouseup = null;
    }

    canvas.ondragstart = function(){
        return false;
    }
}
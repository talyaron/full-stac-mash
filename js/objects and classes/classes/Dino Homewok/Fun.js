
class Dino {
    constructor(imgSrc, name) {
        this.imgSrc = imgSrc;
        this.name = name;

        this.addDinoToDom();
        // this.div.addEventListener
    }

    addDinoToDom() {

        this.div = document.createElement('div');
        this.div.innerHTML = `<img src='${this.imgSrc}'>`;
        this.div.style.left='0px';
        this.div.style.top='0px';
        this.div.style.transform='rotate(0deg)';
        this.div.style.width = '100px';
        document.body.appendChild(this.div);
    }

    moveDino(direction) {
        //get it's current location
        console.dir(this.div.style)
       let x = this.div.style.left;
       console.log(x)
       x = x.replace('px','');
       console.log(x)
       x = parseInt(x);
       console.log(x)
       console.dir(this.div)
       
       
       console.dir(this.div.style)
       let y = this.div.style.top;
       console.log(y)
       y = y.replace('px','');
       console.log(y)
       y = parseInt(y);
       console.log(y)
       console.dir(this.div)

       console.dir(this.div.style)
       let m = this.div.style.transform;
       console.log(m)
       m = m.replace('rotate(','');
       console.log(m);
       m = m.replace('deg)','');
       console.log(m);
       m = parseInt(m);
       console.log(m)
       console.dir(this.div)



       switch (direction) {

        case "ArrowUp":
            console.log('up');
            this.div.style.top = `${y-20}px`;
            break;
        case "ArrowDown":
            console.log('down');
            this.div.style.top = `${y+20}px`;
            break;
        case "ArrowLeft":
            console.log('left', x);
            console.dir(this.div)
           
            this.div.style.left = `${x-20}px`;
            break;
        case "ArrowRight":
            console.log('right');
            this.div.style.left =  `${x+20}px`;
            break;

        case "r":
            console.log('rotate');
            this.div.style.transform = `rotate(${m+360}deg)`;
            break;
        case "t":
        console.log('twist');
            this.div.style.transform = `rotate(${m-360}deg)`;
            break;
        case "4": 
            console.log('quickly rotate');
            this.div.style.transform = `rotate(${m+1440}deg)`;
            break;
        case "5":
            console.log('fast twist');
            this.div.style.transform = `rotate(${m-1440}deg)`;
            break;
       


            
 
        default:

        }
    }
    
}

let dino1 = new Dino('pic/dino1.png', 'dino1');



let dino2 = new Dino('pic/dino2.png', 'dino2');



let theMovingDino = 0

const dinos = document.querySelectorAll('div')

for(let i = 0; i < dinos.length; i++){
    dinos[i].addEventListener('click', function (event){
      
        theMovingDino = i + 1
    });

};




document.addEventListener('keyup', function (event) {
    const direction = event.key;

    if(theMovingDino == 0) {
        dino1.moveDino(direction);
        dino2.moveDino(direction);
    }
    
  if(theMovingDino == 1) {
    dino1.moveDino(direction);
    dino1.div.style.zIndex = 1;
  } else {
    dino1.div.style.zIndex = 0;
  }
    

   if(theMovingDino == 2) {
    dino2.moveDino(direction);
    dino2.div.style.zIndex = 1;
  } else {
    dino2.div.style.zIndex = 0;
  }
    
    
});
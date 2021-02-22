

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
       const y = this.div.clientTop;

       switch (direction) {

        case "ArrowUp":
            console.log('up');
            break;
        case "ArrowDown":
            console.log('down');
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
        default:

    }
    }
}

let dino1 = new Dino('pic/dino1.png', 'dino1');



let dino2 = new Dino('pic/dino2.png', 'dino2');




document.addEventListener('keyup', function (event) {
    const direction = event.key;
    
    dino1.moveDino(direction);

    
});
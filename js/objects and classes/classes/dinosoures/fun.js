

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
        document.body.appendChild(this.div);
    }

    moveDino(direction) {
        //get it's current location
       const x = this.div.getBoundingClientRect().left
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
           
            this.div.style.offsetLeft = `${x-10}px`;
            break;
        case "ArrowRight":
            console.log('right');
            break;
        default:

    }
    }
}

let dino1 = new Dino('pic/dino1.png', 'dino1');

dino1.addDinoToDom();

let dino2 = new Dino('pic/dino2.png', 'dino2');
dino2.addDinoToDom();



document.addEventListener('keyup', function (event) {
    const direction = event.key;
    
    dino1.moveDino(direction);

    
});
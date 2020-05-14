console.log('we have functions')

const pictures = document.querySelectorAll('.moveToHomePicture')
console.dir(pictures)

pictures.forEach(picture=>{
    picture.addEventListener('click',()=>{
        console.log('go to home')
        window.location.href = "/";
    })
})
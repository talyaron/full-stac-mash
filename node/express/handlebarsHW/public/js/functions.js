console.log('we have functions')

const allImages = document.querySelectorAll('.moveToHomePicture')
console.dir(allImages)

allImages.forEach(image=>{
    image.addEventListener('click',()=>{
        console.log('go to home')
        window.location.href = "/";
    })
})





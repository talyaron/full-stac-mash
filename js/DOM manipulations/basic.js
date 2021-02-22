const hi = document.getElementById('hi');
console.dir(hi)

hi.style.color = 'green';

const paragraphs = document.getElementsByTagName('p');

// paragraphs.forEach(paragrph=>{
//     paragrph.style.color = 'pink';
// })

for(let i = 0; i<paragraphs.length;i++){
    
    paragraphs[i].style.color = 'pink';
}

const big = document.getElementsByClassName('big');

for(let i = 0; i<big.length;i++){
    big[i].style.fontSize = '3rem';
}
console.dir(big)

console.dir(paragraphs);

const greens = document.querySelectorAll('.green');
console.dir(greens);

greens.forEach(green=>{
    green.style.color = 'green';
    green.innerText = 'we are green';
    
})
const express = require('express');
const app = express();

const port = 3002;

const users = [{ name: "Masha", id: '1234' }, { name: 'Lidia', id: '123' }, { name: 'Masha', id: '1236' }]


app.get('/:id', (req, res) => {
    const { id } = req.params;
    let name = false;
    

    for (let i in users) {

        //if the id in the object equals the id from the parmas, so this is the right object
        if (users[i].id === id) {
            name = users[i].name;
            break;
        };


    }

    if (name === false) {
        res.send(`Sorry no Id found for id ${id}`)
    } else if (name == '') {
        res.send(`Please update your name`)

    } else {
        res.send(`<h1>Hi: ${name}</h1><h2>and your ID is ${id}</h2>`)
    }
})

app.get('/getId/:name',(req, res)=>{
    const {name} = req.params;
    let id = false;
    let ids =[];

    for(let i in users){
        if(name === users[i].name){ ids.push(users[i].id); id = true};
        
    }

    if(id === false){
        res.send(`No id was found for the name ${name}`)
    } else{
        let resString = '';
        ids.forEach(ID=>{
            resString +=`<p>The name ${name} has id: ${ID}</p>`
        })
        res.send(resString )
    }
})



// app.get('/masha',(req,res)=>{
//     res.send('Hi Masha')
// })

// app.get('/lidia',(req,res)=>{
//     res.send('Hi Lidia')
// })

app.listen(port, () => { console.log(`server listen on port ${port}`) })
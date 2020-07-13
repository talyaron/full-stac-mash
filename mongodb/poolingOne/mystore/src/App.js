import React, { useEffect, useState } from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//  pages
 import Lipsticks from './view/pages/lipsticks/lipsticks';
 import Eyeshadows from './view/pages/eyeshadows/eyeshadows';
 import Foundations from './view/pages/foundations/foundations';
 import Home from './view/pages/home/home';


 export default function App() {
     

   
  return (<div>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/foundations">Foundations</Link>
            </li>
            <li>
              <Link to="/lipsticks">Lipsticks</Link>
            </li>
            <li>
              <Link to="/eyeshadows">Eyeshadows</Link>
            </li>
            <li>
              <Link to="/">Makeup Store Main</Link>
            </li>
           
          
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
     
          <Route path="/foundations">
            <Foundations/>
          </Route>
          <Route path="/lipsticks">
            <Lipsticks/>
          </Route>
          <Route path="/eyeshadows">
            <Eyeshadows/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
          

          
        </Switch>
        
      </div>
    </Router>
      
                </div>
  );
}




// function App() {

//   const [products, setProducts] = useState([]);
//   // const [edit, setEdit] = useState(false)

//   useEffect(() => {
//     fetch('/api/get-all-products')
//     .then(res => res.json())
//     .then(data => {
//       console.log(data)
//       setProducts(data);
//     })

//     // fetch('/api/get-all-lipstick')
//     //   .then(res => res.json())
//     //   .then(data => {
//     //     console.log(data)
//     //     setProducts(data);
//     //   })

//     //   fetch('/api/get-all-eyeshadow')
//     //   .then(res => res.json())
//     //   .then(data => {
//     //     console.log(data)
//     //     setProducts(data);
//     //   })

//     //   fetch('/api/get-all-foundation')
//     //   .then(res => res.json())
//     //   .then(data => {
//     //     console.log(data)
//     //     setProducts(data);
//     //   })

//   }, [])

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>My Makeup Store</h1>
      
//         {
//           products.map((product, index) => {
//             return <h3 key={index}>{product.name}: <Color product={product} /></h3>
//           })
//         }
     
//       </header>
//     </div>
//   );
// }

// export default App;

// import React from 'react';

// import {Routes, Route} from 'react-router-dom';

// import './App.css'
// import Home from './pages/Home/Home';
// import Cart from './pages/Cart/Cart';


// const App = () => {
  


//   return (
//    <div className='container'>
//     <Routes>
      
//         <Route  path="/" component={Home}/>
//         <Route  path="/cart" component={Cart}/>
     
//     </Routes>
   
//     {/* <Home/>
//     <Cart/> */}
//     </div>
//   );
// }

// export default App;

import React from 'react';
import './App.css';
import {
   BrowserRouter as Router,
  Route,
  Routes,  
} from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';

const App = () => {
  return (
    <div className='container'>
      <Routes>   
      <Route exact path='/' component={Home} />
          <Route exact path='/cart' component={Cart} />
          <Route replace to='/' />       
        
        </Routes>
    </div>
  );
};

export default App;

// import React from "react";
// import './Home.css'
// import Banner from "../../components/Home/Banner/Banner";
// import Menu from "../../components/common/Menu/Menu";
// import CountBtn from "../../components/common/CartCountBtn/CountBtn";
// import { menuItemsData } from "../../components/common/Menu/data";



// const Home = () => {
//     return (
//         <div>
//             {/* <Banner/> */}
//             <Banner/>
//             {/* <Menu/> */}
//             <Menu list={menuItemsData}/>
               
              
//             <CountBtn/>
//         </div>

//     )
// }

// export default Home

import React, { useRef } from 'react';
import CountBtn from '../../components/common/CartCountBtn/CountBtn';
import Banner from '../../components/Home/Banner/Banner';
import Menu from '../../components/common/Menu/Menu';
import { menuItemsData } from '../../components/common/Menu/data';

const Home = () => {
  const menuRef = useRef();

  const handleScrollMenu = () => {
    menuRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Banner handleScrollMenu={handleScrollMenu} />
      <Menu list={menuItemsData} ref={menuRef} />
    
      <CountBtn />
    </div>
  );
};

export default Home;
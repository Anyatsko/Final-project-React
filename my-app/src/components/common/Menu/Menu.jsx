import React, {forwardRef} from "react";
import MenuItem from "./MenuItem/MenuItem";
import './Menu.css'





const Menu = forwardRef(({ list }, ref) => (
    <main ref={ref}>
      {list.map((item) => (
        <MenuItem item={item} key={item.id} />
      ))}
    </main>
  ));
  
  export default Menu;
  
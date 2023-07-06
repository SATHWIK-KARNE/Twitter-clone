import React from "react";
import "./SidebarOptions.css";

// since icon is a component, capital I
function SidebarOptions({active,text,Icon}){
  return(
    <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
      <Icon />
      <h2>{text}</h2> 
      {/* using props by putting it in {} */}
    </div>
  );
}

export default SidebarOptions;
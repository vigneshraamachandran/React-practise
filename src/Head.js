import React from 'react';
import './App.css';
import Data from './datas.js';
// import Box from './Box.js'
export default function Head(){
    const [value,setValue]=React.useState(Data.array.on)
    const style={
        backgroundColor:value?"black":"blue"
    }
    function toggle(){
        setValue(value=>!value)
    }
    const[value1,setval]=React.useState(Data.array.id)
    return(
        <div style={style} key={value1} onMouseOver={toggle} className="box"></div>
    )
}
   
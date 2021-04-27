import React, { useState } from 'react';
import Box from './box';


const Textbox = () => {

    // var x = 'red'
    // var y = 50
    let [colour, setcolour] = useState('red');
    var [font, setfont] = useState(50);

    function getcolour(colour){
        setcolour(colour.target.value)
    
    }
    function getfont(font){
        setfont(font.target.value+'px')
    }
    return ( 
        <div className="text">
            <h1>Home</h1>
            < Box colour = {colour} font = {font}  getcolour = {getcolour} getfont = {getfont} />
        </div> 

     );
}
 
export default Textbox;
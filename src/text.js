import React, { useState } from 'react';


const Textbox = () => {

    // var x = 'red'
    // var y = 50
    let [colour, setcolour] = useState('red');
    let [font, setfont] = useState(50);

    const handleclick = (event) => {
            setcolour(colour.target.value);
            setfont(font.target.value)
    }
    function getcolour(colour){
        setcolour(colour.target.value)
    
    }
    function getfont(font){
        setfont(font.target.value)
    }
    return ( 
        <nav className="textbox">
            <h1>Home</h1>
            <div className="links">
                
                    <label>Colour
                        <input type="text" onChange={getcolour} />
                    </label>
                    <label>Font
                        <input type="text" onChange={getfont} />
                    </label>
                    <button onClick={handleclick}>Submit</button>
                
                <p style={{color: colour, fontSize: font}}>Hello this is a paragraph</p>
            </div>
        </nav>
     );
}
 
export default Textbox;
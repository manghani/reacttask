const Box = (props) => {

    const colour = props.colour;
    const font = props.font;

    const getcolour = props.getcolour;
    const getfont = props.getfont;
    return ( 
        <div className="box">
            <label>Colour
                        <input type="text" onChange={getcolour} />
                    </label>
                    <label>Font
                        <input type="number" onChange={getfont} />
                    </label>
                    <button >Submit</button>
                
                <p style={{color: colour, fontSize: font}}>Hello this is a paragraph</p>
        </div>
     );
}
 
export default Box;
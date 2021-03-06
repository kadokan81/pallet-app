import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css'


class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const colorBoxes = this.props.colors.map(color => (
            <ColorBox background ={color.color} name = {color.name}/>
        ))
        return ( 
            <div className="Palette">
              {/* // navbar goes here */}
              <div className="Palette-colors">{colorBoxes} </div>
                  {/* footer eventually */}
             
            </div>
         );
    }
}
 
export default Palette;
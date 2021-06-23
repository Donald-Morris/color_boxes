import React ,{Component} from 'react';
import Box from './Box'

import './BoxContainer.css'

class BoxContainer extends Component{
    static defaultProps = {
        numBoxes: 20,
        allColors: ['aqua','coral','lightcyan','salmon','lime','tomato', 'teal', 'grey', 'red', 'blue', 'pink', 'purple', 'orange', 'yellow', 'green']
    }
   
    render(){
    const boxes = Array.from({length: this.props.numBoxes}).map(()=> <Box color={this.props.allColors}/>)
    return <div className='BoxContainer'>{boxes}</div>
    }
    
}
export default BoxContainer
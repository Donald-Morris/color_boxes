import React, {Component} from 'react';
import {choice} from './helper.js'
import './Box.css' 


class Box extends Component{

  
    constructor(props){
        super(props);
        this.state = {
            bgColor: choice(this.props.color)
        }
        this.handleClick = this.handleClick.bind(this)
    }
    randomColor(){
        let randColor;
        do{
            randColor = choice(this.props.color)
        } while(randColor === this.props.bgColor)
        this.setState({bgColor: randColor})
    }

    handleClick(){
        this.randomColor()
    }
    render(){
        return <div onClick={this.handleClick} className='Box' style={{backgroundColor:this.state.bgColor}}></div>
    }
}

export default Box
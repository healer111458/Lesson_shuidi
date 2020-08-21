import React, { Component } from 'react';
import {CSSTransition} from 'react-transition-group';


class Dance extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isShow:true
         }
         this.toToggole=this.toToggole.bind(this)
    }
    render() { 
        return ( 
            <div>
                <CSSTransition
                    in={this.state.isShow}
                    timeout={2000}
                    classNames="dance-text"
                    unmountOnExit
                >
                    <div>dance - 街舞</div>
                </CSSTransition>
                
                <div><button onClick={this.toToggole}>开始</button></div>
            </div>
         );
    }

    toToggole(){
        this.setState({
            isShow:this.state.isShow?false:true
        })
    }
}
 
export default Dance;
import React, { Component, Fragment } from 'react';

class Healer extends Component {
    render() { 
        return (
            <Fragment>
                <button onClick={this.healer.bind(this)}>healer</button>
                <div>
                    <img src='./assets/111.jpg' />
                </div>
            </Fragment>
        );
    }
    healer() {
        console.log('显示healer图片')
    }
}
 
export default Healer;
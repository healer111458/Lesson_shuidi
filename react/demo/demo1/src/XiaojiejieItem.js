import React, { Component } from 'react';
import PropTypes from 'prop-types';

class XiaojiejieItem extends Component {

    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }

    render() { 
        return ( 
            <li key onClick={this.handleClick}>
                {this.props.avname}为你服务-{this.props.content}
            </li>
         );
    }
    handleClick() {
        // this.props.list = []
        console.log(this.props.index)
        this.props.deleteItem(this.props.index)
    }
}
    
XiaojiejieItem.propTypes={
    avname:PropTypes.string.isRequired,
    content:PropTypes.string,
    index:PropTypes.number,
    deleteItem:PropTypes.func
}
XiaojiejieItem.defaultProps={
    avname:'k2'
}

export default XiaojiejieItem;
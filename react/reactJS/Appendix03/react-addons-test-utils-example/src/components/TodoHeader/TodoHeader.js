import React from 'react';

class TodoHeader extends React.Component {
  constructor(props) {
    super(props);
    this.toggleButton = this.toggleButton.bind(this);
    this.state = {
      isActivated: false,
    };
  }
  toggleButton() {
    this.setState({
      isActivated: !this.state.isActivated,      
    })
  }
  render() {
    return (
      <div>
        <button disabled={this.state.isActivated} onClick={this.toggleButton}>Add</button>
      </div>
    );
  };
}

export default TodoHeader;
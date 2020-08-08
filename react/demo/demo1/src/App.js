import React,{Component} from 'react'

class App extends Component{
    render() {
        return (
            <ul className="my-list">
                <li>{true? 'healer':'K2'}</li>
                <li>K2</li>
            </ul>
        )
        // var child1 = React.createElement('li','null','healer')
        // var child2 = React.createElement('li','null','K2')
        // var root = React.createElement('ul',{className:'my-list'},child1,child2)
    }
}
export default App
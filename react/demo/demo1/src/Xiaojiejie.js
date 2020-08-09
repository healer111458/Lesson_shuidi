import React,{Component,Fragment} from 'react'
import './style.css'
import XiaojiejieItem from './XiaojiejieItem'

class Xiaojiejie extends Component{
    constructor(props){
        super(props)
        this.state = {
            inputValue:'',
            list:['点菜','上菜']
        }
    }

    render(){
        return (

            //flex
            <Fragment>
                {/* healer */}
                <div>
                    <label htmlFor="healer">增加列表：</label>
                <input id ='healer' className ='input' value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
                <button onClick={this.addList.bind(this)} >增加服务</button></div>
                <ul>
                    {
                        this.state.list.map((item,index) => {
                            return( 
                                <li
                                    key={index+item}
                                    onClick={this.deleteItem.bind(this,index)}
                                    dangerouslySetInnerHTML={{__html:item}}
                                >

                                </li>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    //输入新服务
    inputChange(e) {
        // console.log(this)
        // this.state.inputValue = e.target.value
        this.setState({
            inputValue:e.target.value
        })
    }
    //增加列表
    addList(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            // list:['点菜','上菜',this.state.inputValue]
            inputValue:''
        })
    }
    deleteItem(index){
        // console.log(index) //修能优化
        // 局部变量的性能会得到优化
        let list = this.state.list
        list.splice(index,1)
        this.setState({
            list:list
        })
    }
}
export default Xiaojiejie
import React,{Component,Fragment} from 'react'
import axios from 'axios'
import './style.css'
import XiaojiejieItem from './XiaojiejieItem'
import Dance from './Dance'
// import K2 from './K2'

class Xiaojiejie extends Component{
    constructor(props){
        super(props)
        this.state = {
            inputValue:'',
            list:[]
        }
    }

    //axios 优先写在componentDidMount生命周期函数中
    componentDidMount(){
        axios.get('https://easy-mock.com/mock/5f3e87d037dd743fd5db5ba6/healer/xiaojiejie')
        .then((res)=>{
            console.log('axios 获取成功!'+JSON.stringify(res))
            this.setState({
                list:res.data.data
            })
        })
        .catch((error)=>{console.log('获取失败！'+error)})
    }

    render(){
        return (

            //flex
            <Fragment>
                {/* healer
                healer 注释方法 */}
                <div>
                    {/* k2 */}
                    <label htmlFor="healer">增加列表：</label>
                <input 
                id ='healer' 
                className ='input' 
                value={this.state.inputValue} 
                onChange={this.inputChange.bind(this)}
                ref = {(input) => {this.input=input}} 
                />
                <button onClick={this.addList.bind(this)} >增加服务</button></div>

                    <ul ref={(ul)=>{this.ul=ul}}>
                    {
                        this.state.list.map((item,index) => {
                            return(  
                                // <li
                                //     key={index+item}
                                //     onClick={this.deleteItem.bind(this,index)}
                                //     dangerouslySetInnerHTML={{__html:item}}
                                // >
                                // </li>

                                <XiaojiejieItem 

                                    key= {index+item}
                                    content={item}
                                    index={index}
                                    list={this.state.list}
                                    deleteItem={this.deleteItem.bind(this)}
                                />

                            )
                        })
                    }
                </ul>

                <Dance/>
                {/* <K2 /> */}
            </Fragment>
        )
    }

    //输入新服务
    inputChange() {
        // console.log(this)
        // this.state.inputValue = e.target.value
        this.setState({
            inputValue:this.input.value
        })
    }
    //增加列表
    addList(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            // list:['点菜','上菜',this.state.inputValue]
            inputValue:''
        },()=>{
        console.log(this.ul.querySelectorAll('li').length)
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
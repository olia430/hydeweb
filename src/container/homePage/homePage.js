import React from 'react'
import { Button,Icon } from 'antd'
import './homePage.css'

class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.locationSelection = this.locationSelection.bind(this)
    }
    locationSelection(){
        console.log('1')
        this.props.history.push('./locationSelection')
    }
    render(){
          return (
              <div>
                  <Button onClick={this.locationSelection}><Icon type="plus" />定制自己的行程</Button>
              </div>
          )
    }
}

export default HomePage



// import React,{Component,Fragment} from 'react'

// class HomePage extends Component {
//   constructor(){
//     super()  // 要想使用this必须使用super
//     this.state = {
//       postList:[
//         'item1',
//         'item2',
//         'item3'
//       ],
//     //   inputValue:""
//     }
//   }
//   render(){
//     // jsx语法
//      return (
//        <Fragment>
//           <ul> 
//             {
//                this.state.postList.map((value,index)=>{
//                  return (
//                     <li key={index}>{ value }
//                         <button onClick={this.delete.bind(this,index)}>删除</button>
//                     </li>
//                   )
//                })
//             }
//           </ul>
//           {/* <div> {this.state.inputValue} </div> */}
//           <div>
//             <textarea 
//               value={ this.state.inputValue }
//               onChange={ this.handleInput.bind(this) } 
//               name="" id="">
//             </textarea> <br/>
//             <button onClick={ this.submit.bind(this) }>发布</button>
//           </div>
//       </Fragment>
//     )
//   }
//   submit(){
//     // console.log(0)
//     this.setState({
//     // postList:this.state.postList.push(e.target.value) 错误的，改变了postList原来的值，且要用this.setState设置postList
//       postList:[...this.state.postList,this.state.inputValue],
//       inputValue:"11"
//     })
//   }
//   handleInput(e){
//     // this.state.inputValue = e.target.value   错误的，不能直接赋值
//     // 需要bind(this)改变this指向，让this指向这个实例
//     this.setState({
//       inputValue:e.target.value,
//     })
//     console.log(e.target.value);
//   }
//   delete(index){
//     // 删除操作需要保留一个副本，在副本上进行操作，该postList是局部的postList,不影响全局的postList
//     let postList = [...this.state.postList]
//     postList.splice(index,1)  
//     // 数组删除操作用splice
//     this.setState({
//       postList,
//     })
//   }
// } 

// export default HomePage
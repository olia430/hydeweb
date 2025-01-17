

import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addGun,removeGun,addGunAsync} from './index.redux'

@connect(
     state=>({num:state}),
     { addGun,removeGun,addGunAsync}
  )
class App extends Component {
  render() {
    return (
      <div>
          <h1>现在有机枪{this.props.num}把</h1>
          <button onClick={this.props.addGun}>申请武器</button>
          <button onClick={this.props.removeGun}>回收武器</button>
          <button onClick={this.props.addGunAsync}>拖两天再给</button>
          {/* <Button onClick={this.props.addGun}>tianjiaxingcheng</Button> */}
      </div>
    );
  }
}

export default App;
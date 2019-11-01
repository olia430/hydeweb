import React from 'react'
import { Button,Icon } from 'antd'
import {Link} from "react-router-dom";
import './homePage.css'

class HomePage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
          return (
              <div>
                  <ul>
                    <ol>
                        <Button><Icon type="plus" /><Link to='/create'>制定我的行程</Link></Button>
                    </ol>
                    <ol>
                        <Link to='/drag'>拖拽demo</Link>
                    </ol>
                  </ul>
              </div>
          )
    }
}

export default HomePage

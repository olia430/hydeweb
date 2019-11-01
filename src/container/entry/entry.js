import React from 'react'
import {Link} from "react-router-dom";

export default class Entry extends React.Component{

    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to='/'>首页</Link>
                    </li>
                    <li>
                        <Link to='/create'>制定我的行程</Link>
                    </li>
                    <li>
                        <Link to='/drag'>拖拽</Link>
                    </li>
                </ul>
            </div>
        )
    }
}
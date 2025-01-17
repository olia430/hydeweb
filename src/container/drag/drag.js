import React, { Component } from 'react';
import CardItem from './CardItem'
// import {DragDropContext} from 'react-dnd'
// import HTML5Backend from 'react-dnd-html5-backend'

const CardList = [{ //定义卡片内容
    title:"first Card",
    id:1,
    content:"this is first Card"
},{
    title:"second Card",
    id:2,
    content:"this is second Card"
},{
    title:"Third Card",
    id:3,
    content:"this is Third Card"
}
];
class CardBox extends Component {
    state = {
        CardList
    };
    render() {
        return (
            <div className='card'>
                {CardList.map((item,index) => {
                    return(
                        <CardItem //向次级界面传递参数
                            key={item.id}
                            title={item.title}
                            content={item.content}
                            index={index}
                        />
                    )
                })}
            </div>
        );
    }
}

export default CardBox
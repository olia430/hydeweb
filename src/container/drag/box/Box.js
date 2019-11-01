import React from 'react'
import {useDrag} from 'react-dnd'
// import {Card} from "antd";

const style = {
    width:'100%',
    height:'100px',
    lineHeight:'100px',
    border: '1px dashed gray',
    backgroundColor: 'white',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    cursor: 'move',
    float: 'left',
    textAlign:'center',
}
const Box = ({name, type, isDropped}) => {
    const [{isDragging}, drag] = useDrag({
        item: {name, type},
        isDragging(monitor) {
            const item = monitor.getItem()
            return name === item.name
        },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    })
    const opacity = isDragging ? 0.4 : 1
    return (
        <div ref={drag} style={{...style, opacity, background: '#ccc'}}>
            {name}
        </div>
    )
}
export default Box

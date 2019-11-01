import React from 'react'
import { useDrop } from 'react-dnd'
import {Card} from "antd";

const style = {
    height: '100px',
    width: '100%',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: 'normal',
    float: 'left',
}

const Dustbin = ({ lastDroppedItem, accepts: accept, onDrop }) => {
    const [{ isOver, canDrop }, drop] = useDrop({
        accept,
        collect: monitor => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
        drop: item => onDrop(item),
    })
    const isActive = isOver && canDrop
    let backgroundColor = '#ccc'
    if (isActive) {
        backgroundColor = 'darkgreen'
    } else if (canDrop) {
        backgroundColor = 'darkkhaki'
    }
    return (
        <div ref={drop} style={{ ...style, backgroundColor }}>
            {isActive
                ? 'Release to drop'
                : `This dustbin accepts: ${accept.join(', ')}`}

            {lastDroppedItem && (
                <Card>Last dropped: {JSON.stringify(lastDroppedItem)}</Card>
            )}
        </div>
    )
}
export default Dustbin

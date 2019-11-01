import React from "react";
import {Row, Col,} from 'antd'

class EditDaysComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            day: props.fundays
        }
    }

    decreaseDay = () => {
        const {day} = this.state;
        if (day === 0) return;
        if (day <= 1) {
            this.setState({
                day: day - 0.5
            });
            return;
        }
        this.setState({
            day: day - 1
        })
    }
    plusDay = () => {
        const {day} = this.state;
        if (day === 0.5) {
            this.setState({
                day: 1
            });
            return;
        }
        this.setState({
            day: this.state.day + 1
        })
    }

    render() {
        const {day} = this.state;

        return (
            <Row style={{width: '100px',fontSize:'14px'}}>
                <Col align="center" span={6}>
                    <div className='virtulBtn' onClick={this.decreaseDay}>-</div>
                </Col>
                <Col align="center" span={8}>{day}天</Col>
                <Col align="center" span={6}>
                    <div className='virtulBtn' onClick={this.plusDay}>+</div>
                </Col>
            </Row>
        )
    }

}

export default EditDaysComponent
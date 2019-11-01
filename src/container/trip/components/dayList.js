import React from "react";
import {Card, List} from "antd-mobile";
import {
    Col,
    Row,
    Icon,
} from "antd";
import {
    getTrip, getTripDaily,
} from '../trip.action'
import {connect} from "react-redux";

class DayList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        this.props.getTrip()
    }

    changeDay = (index) => {
        let day = index % 2 === 0 ? 'dayEventOne' : 'dayEventTwo'
        this.props.getTripDaily(day)
    }

    render() {
        const {cityList, model} = this.props
        return (
            <div>
                <Card>
                    <List>
                        {
                            cityList && cityList.length && cityList.map((item, index) => {
                                return (
                                    <div>
                                        <List.Item
                                            key={index}
                                            multipleLine
                                            onClick={() => this.changeDay(index)}
                                        >
                                            <Row>
                                                <Col span={6}>
                                                    <div style={{
                                                        width: '50px',
                                                        height: '50px',
                                                        lineHeight: '47px',
                                                        textAlign: 'center',
                                                        fontSize: '20px',
                                                        float: 'left',
                                                        borderRadius: '25px',
                                                        background: '#5a6',
                                                        color: '#fff'
                                                    }}>
                                                        D{index + 1}
                                                    </div>
                                                </Col>
                                                {
                                                    model === 'standard' && (
                                                        <Col span={10}>
                                                            <div style={{color: '#999', fontSize: '14px'}}>暂无出发日期</div>
                                                            {item.city_list && item.city_list.length ? item.city_list.map((m, index) => {
                                                                return <span key={index}>
                                                                {m.name}
                                                                    {(index + 1) === item.city_list.length ? null : ' > '}
                                                            </span>
                                                            }) : null}
                                                        </Col>
                                                    )
                                                }
                                                {
                                                    model === 'standard' && (
                                                        <Col align='right' span={8}>
                                                            <div style={{color: '#ccc'}}>
                                                                <Icon type="align-left"/>
                                                            </div>
                                                        </Col>
                                                    )
                                                }
                                            </Row>

                                        </List.Item>
                                    </div>
                                )
                            })
                        }


                    </List>
                </Card>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        cityList: state.trip.cityList,
    }
}

const actionCreators = {
    getTrip,
    getTripDaily,
}

export default DayList = connect(mapStateToProps, actionCreators)(DayList)

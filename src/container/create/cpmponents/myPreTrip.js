import React from 'react'
import {Card} from "antd-mobile";
import {Link} from "react-router-dom";
import {DatePicker, Steps, Col, Row} from 'antd';
import EditDaysComponent from '../../../component/setDays/setDays'
import {GetDistance} from '../../../component/utils'
import {saveTrip} from "../create.action";
import {connect} from "react-redux";

const {Step} = Steps;

class MyPreTrip extends React.Component {
    constructor(props) {
        super(props)
    }

    changeDate = () => {
    }

    saveTrip = () => {

    }

    render() {
        const {toGoList} = this.props
        return (
            <div>
                <Card>
                    <Card.Header
                        title="我的行程"
                        thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                        extra={<DatePicker onChange={this.changeDate}/>}
                    />
                    <Card.Body>
                        <Steps current={toGoList.length} onChange={this.onChange} direction="vertical">
                            {
                                toGoList && toGoList.map((item, index) => {
                                    return (
                                        <Step
                                            key={index}
                                            title={
                                                <Row style={{width: '300px'}}>
                                                    <Col align='left' span={8}>
                                                        {item.cityname}
                                                    </Col>
                                                    <Col span={6}/>
                                                    <Col span={8} align='right'>
                                                        <EditDaysComponent fundays={item.fundays}/>
                                                    </Col>
                                                </Row>
                                            }
                                            // 数组最后一组不显示距离
                                            description={index + 1 !== toGoList.length ?
                                                <Row style={{fontSize: '14px', lineHeight: '30px', width: '300px'}}>
                                                    <Col align='left' span={8}>
                                                        {parseInt(
                                                            // 根据两点经纬度计算地图上两点距离函数
                                                            GetDistance(
                                                                item.lat,
                                                                item.lng,
                                                                toGoList[index + 1].lat,
                                                                toGoList[index + 1].lng,
                                                            )
                                                        )} km
                                                    </Col>
                                                    <Col align='left' span={8}>
                                                        1h 42min
                                                    </Col>
                                                    <Col align='left' span={8}>
                                                        约￥568
                                                    </Col>
                                                </Row> : null
                                            }
                                        />
                                    )
                                })
                            }
                        </Steps>
                        <Link to={'trip/create'}>
                                   <span
                                       style={{
                                           height: '40px',
                                           lineHeight: '40px',
                                           marginTop:'10px',
                                           fontSize: '22px',
                                           color: '#fff',
                                           width: '100%',
                                           display:'block',
                                           background: '#0073b6',
                                           textAlign: 'center'
                                       }}
                                   >
                                       下一步
                                   </span>
                        </Link>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        hot: state.location.hot
    }
}

const actionCreators = {
    saveTrip,
}

export default MyPreTrip = connect(mapStateToProps, actionCreators)(MyPreTrip)


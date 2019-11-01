import React from "react";
import {Card, List,} from "antd-mobile";
import {DatePicker, Button, Icon} from 'antd'
import {connect} from "react-redux";

import {
    getTripDaily
} from '../trip.action'
import {GetDistance} from '../../../components/utils'


class TripEvents extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        this.props.getTripDaily('dayEventOne')
    }

    render() {
        const {tripDaily} = this.props
        return (
            <div>
                <Card>
                    <div style={{margin: '10px'}}><DatePicker/></div>
                    <div>
                        <span style={{padding: '0 20px'}}>上海</span>
                        <Button type="dashed">+增加城市</Button>
                    </div>
                    <List>
                        {
                            tripDaily && tripDaily.length && tripDaily.map((item, index) => {
                                return (
                                    <List.Item key={index}>
                                        {item.cn_name}
                                        <div style={{
                                            width: '100%',
                                            height: '30px',
                                            //background:'#eee',
                                            fontSize: '14px',
                                            lineHeight: '30px',
                                            color: '#999',
                                        }}>
                                            {
                                                index + 1 !== tripDaily.length ? (
                                                    <div>
                                                       <span style={{paddingRight: '10px'}}>
                                                        <Icon type="arrow-right"/>
                                                       </span>
                                                        {
                                                            GetDistance(
                                                                item.lat,
                                                                item.lng,
                                                                tripDaily[index + 1].lat,
                                                                tripDaily[index + 1].lng,
                                                            ).toFixed(2)
                                                        }
                                                        km
                                                    </div>
                                                ) : null

                                            }
                                        </div>
                                    </List.Item>
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
        tripDaily: state.trip.tripDaily
    }
}

const actionCreators = {
    getTripDaily,
}

export default TripEvents = connect(mapStateToProps, actionCreators)(TripEvents)

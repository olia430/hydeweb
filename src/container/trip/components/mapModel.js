import React from "react";
import CityList from "./dayList";
import TripEvents from "./tripEvents";
import {Col, Row, Card, Radio} from "antd";
import MapInCreateEvents from './mapInCreateEvents'
import axios from "axios";

class MapModel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: null
        }
    }

    changeState = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    change = (e) => {
        this.setState({
            value: e.target.value
        })
        if(e.target.value == null){
            return this.getMarks([])
        }
        axios.get(`http://192.168.1.163:9003/source/${e.target.value}`).then(res => {
            const {data: {list}} = res
            this.getMarks(list)
        })
    }


    getMarks = (list) => {
        const mapPorps = [];
        list.map(item => {
            mapPorps.push({
                position: {
                    lat: Number(item.lat),
                    lng: Number(item.lng),
                },
                title: item.cn_name
            })
        })
        this.setState({
            mapPorps
        })
    }

    render() {
        const {mapPorps} = this.state
        const heightCard = document.documentElement.clientHeight * 0.8

        return <div>

            <Row style={{marginTop: '10px'}}>
                <Col span={2} offset={1} style={{height: heightCard, overflow: 'scroll'}}>
                    <CityList model="map"/>
                </Col>
                <Col span={4} offset={1} style={{height: heightCard, overflow: 'scroll',}}>
                    <TripEvents/>
                </Col>
                <Col span={14} offset={1}>
                    <Card
                        title={
                            <Radio.Group onChange={(e) => this.change(e)} value={this.state.value}>
                                <Radio value={null}>无</Radio>
                                <Radio value='nature'>景点</Radio>
                                <Radio value='food'>美食</Radio>
                                <Radio value='shop'>购物</Radio>
                                <Radio value='experience'>体验</Radio>
                                <Radio value='traffic'>交通</Radio>
                                <Radio value='hotel'>酒店</Radio>
                            </Radio.Group>
                        }
                    >
                        <MapInCreateEvents mapPorps={mapPorps}/>
                    </Card>
                </Col>
            </Row>

        </div>
    }

}

export default MapModel
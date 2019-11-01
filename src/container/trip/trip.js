import React from "react";
import {
    Radio,
    Row,
    Col,
} from 'antd';

import {Card, Icon, List, SearchBar, Tabs, Button} from "antd-mobile";

import CityList from "./components/dayList";
import CityPlaces from "./components/cityPlaces";
import TripEvents from "./components/tripEvents";

// import {
//     getAfrica,
//     getAsia,
//     getEurope,
//     getHot,
//     getNorthAmerica,
//     getOceania,
//     getSouthAmerica,
//     saveTrip
// } from "../create/create.action";
import {connect} from "react-redux";
import MapModel from './components/mapModel'

class Trip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modelValue: 'default',
            // modelValue: 'map',
        }
    }

    changeState = (name, value) => {
        this.setState({
            [name]: value
        })
    }


    render() {
        const {tripList} = this.props
        const heightCard = document.documentElement.clientHeight * 0.8

        return (
            <div style={{background: '#4fa485', height: document.documentElement.clientHeight}}>
                <div style={{marginLeft:'40%',padding:'20px 0 10px 0'}}>
                    <Radio.Group onChange={e => this.changeState('modelValue', e.target.value)}
                                 value={this.state.modelValue} size="large">
                        <Radio.Button value="default">标准模式</Radio.Button>
                        <Radio.Button value="map">地图模式</Radio.Button>
                    </Radio.Group>
                </div>
                {this.state.modelValue === 'default' && (
                    <Row style={{marginTop: '10px'}}>
                        <Col span={5} offset={1} style={{height: heightCard, overflow: 'scroll',}}>
                            <CityList model="standard"/>
                        </Col>
                        <Col span={7} offset={1}  style={{height:heightCard, overflow:'scroll',}}>
                            <TripEvents/>
                        </Col>
                        <Col span={8} offset={1}>
                            <CityPlaces/>
                        </Col>
                    </Row>
                )}
                {this.state.modelValue === 'map' && (
                    <MapModel />
                )}

            </div>
        );
    }

}


function mapStateToProps(state) {
    return {
        tripList: state.location.trip
    }
}

const actionCreators = {}

export default Trip = connect(mapStateToProps, actionCreators)(Trip)



import React from 'react'
import {connect} from 'react-redux'

import axios from "axios";
import {
    getHot,
    getAfrica,
    getAsia,
    getEurope,
    getNorthAmerica,
    getSouthAmerica,
    getOceania,
    saveTrip,
    changeMapCenter,
    getNationList,
} from "./create.action";
// import MapGoogle from '../map/map'
import MapLeaflet from '../map/mapLeaflet'
import LocationView from './cpmponents/locationView'
import CityView from './cpmponents/cityView'
import MyPreTrip from './cpmponents/myPreTrip'

import {Drawer} from 'antd-mobile';


class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            docked: false,
            locationVisible: true,
            toGoList: [],
            defaultPosition: {lat: 20, lng: 120},
        }
    }

    componentDidMount() {
        //this.getList('hot')
        //this.getLocationList()
        this.props.getNationList('hot')
    }

    getLocationList = (loc) => {
        return this.props.getNationList(loc)

        axios.get(`http://192.168.1.163:9003/location/${loc}`).then(res => {
            const {data: {data: {list}}} = res
            this.getMarks(list)
            this.setState({
                list
            })
        })
    }

    getList = loc => {
        const {
            getHot,
            getAfrica,
            getAsia,
            getEurope,
            getNorthAmerica,
            getSouthAmerica,
            getOceania,
        } = this.props

        switch (loc) {
            case 'hot':
                return getHot();
            case 'africa':
                return getAfrica();
            case 'asia':
                return getAsia();
            case 'europe':
                return getEurope();
            case 'northAmerica':
                return getNorthAmerica();
            case 'southAmerica':
                return getSouthAmerica();
            case 'oceania':
                return getOceania();
            default:
                return
        }
        this.changeState()
    }

    getMarks = (list) => {
        const mapPorps = []
        list.map(item => {
            mapPorps.push({
                position: {
                    lat: Number(item.lat),
                    lng: Number(item.lng),
                },
                title: item.catename
            })
        })
        this.setState({
            mapPorps
        })
    }

    markerJump = () => {
        const {mapPorps} = this.state
        mapPorps[0].animation = 1
        this.setState({
            mapPorps
        })
    }

    onDock = (d) => {
        this.setState({
            [d]: !this.state[d],
        });
    }

    changeState = (v, k) => {
        this.setState({
            [v]: k
        })
    }

    changeTabLocation = v => {
        this.props.changeMapCenter(v.defaultPosition)
        this.changeState('defaultPosition', v.defaultPosition)
        this.getLocationList(v.value)
        //切换到洲际视角
        this.changeState('locationVisible', true)
    }

    addCity = item => {
        const toGoList = [...this.state.toGoList, item]
        const routeLine = []

        toGoList.map(item => {
            routeLine.push({
                lat: Number(item.lat),
                lng: Number(item.lng),
            })
        })
        this.props.saveTrip(toGoList)
        this.setState({
            toGoList,
            routeLine
        })
    }

    render() {
        const {locationVisible, toGoList,} = this.state
        const {nationList} = this.props

        //切换大洲和城市容器
        const drawContent = locationVisible ?
            <LocationView
                list={nationList}
                changeTabLocation={this.changeTabLocation}
                jumpToCity={() => this.onDock('locationVisible')}
            /> :
            <CityView
                getMarks={this.getMarks}
                markerJump={this.markerJump}
                changeTabLocation={this.changeTabLocation}
                addCity={this.addCity}
            />


        return (
            <div
                style={{
                    height: document.documentElement.clientHeight,
                    width: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    background:'#23d'

                }}
            >
                <div
                    style={{
                        padding: '20px',
                        minWidth: '400px',
                        height: '1000px',
                        position: 'absolute',
                        top: '20px',
                        left: '20px',
                        zIndex: 1000,
                        overflow: 'hidden'
                    }}
                >

                    {/* <NavBar icon={<Icon type="ellipsis"/>} onLeftClick={() => this.onDock('docked')}>
                        Docked in document
                    </NavBar>*/}

                    <div
                        style={{
                            position: 'absolute',
                            top: 10,
                            left: 8,
                            width: '800px',
                            height: '900px',
                        }}>
                        <Drawer
                            className="my-drawer"
                            style={{minHeight: document.documentElement.clientHeight}}
                            contentStyle={{color: '#A6A6A6', textAlign: 'center', float: 'left'}}
                            sidebarStyle={{border: '1px solid #ddd'}}
                            sidebar={drawContent}
                            //docked={this.state.docked}
                            docked={true}
                        >

                        </Drawer>
                    </div>
                    <div>
                        {
                            toGoList.length ?
                                <div style={{
                                    width: '350px',
                                    margin: '2px 0 0 360px',
                                }}>
                                    <MyPreTrip toGoList={toGoList}/>
                                  {/*  <Link to={'trip/create'}>
                                        <Button>下一步</Button>
                                    </Link>*/}
                                </div> : null
                        }
                    </div>

                </div>

                <div>
                    {/*<MapGoogle
                        mapPorps={mapPorps}
                        pathCoordinates={routeLine}
                        defaultPosition={defaultPosition}
                    />*/}
                    <MapLeaflet markers={this.props.markers}/>
                </div>

            </div>);
    }
}


function mapStateToProps(state) {
    return {
        hot: state.location.hot,
        markers: state.location.markers,
        nationList: state.location.nationList,
    }
}

const actionCreators = {
    getHot,
    getAfrica,
    getAsia,
    getEurope,
    getNorthAmerica,
    getSouthAmerica,
    getOceania,
    saveTrip,
    changeMapCenter,
    getNationList,
}

export default Create = connect(mapStateToProps, actionCreators)(Create)

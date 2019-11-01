import React from "react";
import { Tabs, Card} from 'antd'
import {getCityPlaces,addTripEvents} from "../trip.action";
import {connect} from "react-redux";
import zjj from "../../../images/zjj.jpg";


const {Meta} = Card;
const {TabPane} = Tabs;


class CityPlaces extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        this.props.getCityPlaces()
    }

    changeTab = () => {

    }

    addEvents = (item) => {
        this.props.addTripEvents(item)
    }

    render() {
        const heightCard = document.documentElement.clientHeight * 0.8
        const {cityStations} = this.props

        return (
            <Card style={{height: heightCard, width: '500px', overflow: 'scroll'}}>
                <Tabs defaultActiveKey="2" onChange={this.changeTab}>
                    <TabPane tab="路线" key="1">
                        Content of Tab Pane 1
                    </TabPane>
                    <TabPane tab="游玩" key="2">
                        {
                            cityStations && cityStations.length && cityStations.map((item, index) => {
                                return (
                                    <div key={index} style={{
                                        width: '200px',
                                        height: '270px',
                                        float: 'left',
                                        margin: '10px 10px 10px 0',
                                    }}>
                                        <Card
                                            hoverable
                                            cover={<img alt="example" src={zjj}/>}
                                            actions={[
                                                <div onClick={() => this.addEvents(item)}
                                                     className="hoverMask">+添加到当日行程</div>
                                            ]}
                                        >
                                            <Meta title={item.cn_name} description="www.instagram.com"/>
                                        </Card>
                                    </div>
                                )
                            })
                        }

                    </TabPane>
                    <TabPane tab="住宿" key="3">
                        Content of Tab Pane 3

                    </TabPane>
                    <TabPane tab="城际交通" key="4">
                        Content of Tab Pane 4
                    </TabPane>
                    <TabPane tab="折扣" key="5">
                        Content of Tab Pane 5
                    </TabPane>
                </Tabs>
            </Card>
        )
    }
}

function mapStateToProps(state) {
    return {
        cityStations: state.trip.cityStations
    }
}

const actionCreators = {
    getCityPlaces,
    addTripEvents,
}

export default CityPlaces = connect(mapStateToProps, actionCreators)(CityPlaces)

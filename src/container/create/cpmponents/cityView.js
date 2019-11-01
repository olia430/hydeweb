import React from 'react'
import axios from 'axios'
import {Card, Icon, List, SearchBar, Tabs, Button} from "antd-mobile";


class CityView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
        }
    }

    componentDidMount() {
        axios.get(`http://192.168.1.163:9003/city/china`).then(res => {
            const {data: {list}} = res
            this.props.getMarks(list)
            this.setState({
                list
            })
        })
    }

    render() {
        const {list} = this.state
        const tabs = [
            {title: "热门", value: 'hot', defaultPosition: {lat: 20, lng: 120}},
            {title: "亚洲", value: 'asia', defaultPosition: {lat: 20, lng: 120}},
            {title: "欧洲", value: 'europe', defaultPosition: {lat: 50, lng: 20}},
            {title: "北美", value: 'northAmerica', defaultPosition: {lat: 20, lng: -90}},
            {title: "南美", value: 'southAmerica', defaultPosition: {lat: -25, lng: -60}},
            {title: "非洲", value: 'africa', defaultPosition: {lat: 0, lng: 20}},
            {title: "大洋洲", value: 'oceania', defaultPosition: {lat: -20, lng: 155}},
        ];
        return (
            <div>
                <Card style={{color: '#fff'}}>
                    <Card.Header
                        title={<span style={{color:'#fff'}}>选择目的地</span>}
                        style={{
                            background: '#379e65',
                            lineHeight: '52px',
                            height: '52px',
                            fontSize: '22px',
                        }}
                        extra={<Icon type="ellipsis" onClick={() => this.onDock('docked')}/>}
                    />
                    <Card.Body>
                        <div>
                            <SearchBar placeholder="Search" maxLength={8}/>
                        </div>
                        <div>
                            <Tabs
                                onChange={this.props.changeTabLocation} tabs={tabs}
                            />
                        </div>
                    </Card.Body>
                </Card>
                <List>
                    {list && list.map((item, index) => {
                            return (
                                <List.Item
                                    key={index}
                                    multipleLine
                                    onClick={this.props.markerJump}
                                >
                                    <div>
                                        {item.cityname}
                                    </div>
                                    <div style={{fontSize: '14px', color: '#555'}}>
                                        {item.cityname_en}
                                    </div>
                                    <div
                                        style={{
                                            fontSize: '12px',
                                            color: '#777'
                                        }}>
                                        {item.beentocounts}人去过，{item.plantocounts}人想去
                                    </div>
                                    <div>
                                        <Button
                                            style={{
                                                width: '30px',
                                                height: '30px',
                                                alignItems: 'center',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                position: 'absolute',
                                                top: '28px',
                                                right: '15px',
                                                fontSize: '18px'
                                            }}
                                            type="default" size="small"
                                            onClick={()=>this.props.addCity(item)}
                                        >
                                            +
                                        </Button>
                                    </div>
                                </List.Item>
                            );
                        }
                    )}
                </List>
            </div>
        )
    }

}


export default CityView
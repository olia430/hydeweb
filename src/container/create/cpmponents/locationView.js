import React from 'react'
// import axios from 'axios'
import {Card, Icon, List, SearchBar, Tabs} from "antd-mobile";

class CityView extends React.Component {
    clickSelect = () => {
        // axios.post('http://dt1.itrip.com/api_open/product/query_json', {
        //     appKey: 'itrip_api_open',
        //     ts: 'test',
        //     token: '8d210cf2042c18333b9fbbb30b9384ff',
        //     productId: 2004,
        // }).then(res => {
        //     console.log(res);
        // })
    }

    render() {
        const {list} = this.props
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
                <Card>
                    <Card.Header
                        title={<span style={{color: '#fff'}}>选择目的地</span>}
                        onClick={this.clickSelect}
                        style={{
                            background: '#379e65',
                            lineHeight: '52px',
                            height: '52px',
                            fontSize: '22px',
                        }}
                        //thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                        extra={<Icon type="ellipsis" onClick={() => this.onDock('docked')}/>}
                    />
                    <Card.Body>
                        <div>
                            <SearchBar placeholder="Search" maxLength={8}/>
                        </div>
                        <div>
                            <Tabs
                                onChange={(e)=>this.props.changeTabLocation(e)} tabs={tabs}
                            />
                        </div>
                    </Card.Body>
                </Card>
                <div  style={{htight:'600px',overflow:'hidden'}}>
                    <List>
                        {list && list.map((item, index) => {
                            if (index === 0) {
                                return (
                                    <List.Item
                                        key={index}
                                        arrow="horizontal"
                                        //thumb={item.piclist['120']}
                                        multipleLine
                                        onClick={this.props.jumpToCity}
                                    >
                                        <div>{item.catename}</div>
                                        <div style={{fontSize: '14px', color: '#555'}}>{item.catename_en}</div>
                                    </List.Item>);
                            }
                            return (
                                <List.Item
                                    key={index}
                                    arrow="horizontal"
                                    onClick={this.props.jumpToCity}
                                    activeStyle={{background: '#ccc'}}
                                    //thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
                                >
                                    <div>{item.catename}</div>
                                    <div style={{fontSize: '14px', color: '#555'}}>{item.catename_en}</div>
                                    <div
                                        style={{fontSize: '12px', color: '#777'}}>{item.beentocounts}人去过，{item.plantocounts}人想去
                                    </div>
                                </List.Item>);
                        })}
                    </List>

                </div>
            </div>
        )
    }
}


export default CityView
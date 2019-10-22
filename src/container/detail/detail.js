import React from 'react'
import { Menu, Icon, Card, List,Input,Dropdown,Tabs,Checkbox  } from 'antd';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import MapSelectBox from "../../component/mapSelectBox/mapSelectBox"
import './detail.css'
import icon from '../../images/view.png'
import icon1 from '../../images/hotel.png'
import icon2 from '../../images/w1080.jpg'
import { duration } from 'moment';

const { Meta } = Card;
const { Search } = Input;
const { TabPane } = Tabs;
const gridStyle = {
    width: '33%',
    textAlign: 'center',
  };
const gridStyle1 = {
  width: '100%',
  textAlign: 'center',
};
const checkboxStyle = {
  width: '80%',
  textAlign: 'center',
}

const MyMapComponent = compose(
    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyADXRPfT4-ecgGNiq6mNJ0GuU7HjguF4MA&v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%`,position: `absolute`,left:`50%`,top:`50%`,transform: `translate(-50%, -10%)`,fontSize:'30px'}}>加载中...</div>,
      containerElement: <div style={{ height: `900px` }} />,
      mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
  )((props) =>
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
      {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} onClick={props.onMarkerClick} />}
    </GoogleMap>
  )

  

class Detail extends React.Component{

    state = {
        current: 'unordered-list',
        isMarkerShown: false,
        addList:[
            'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
        ],
        checkAll: false,
        indeterminate: true,
      };

    componentDidMount() {
    this.delayedShowMarker()
    }

    delayedShowMarker = () => {
    setTimeout(() => {
        this.setState({ isMarkerShown: true })
    }, 3000)
    }

    handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
    }

    handleClick = e => {
    this.setState({
        current: e.key,
    });
    };
    
    renderView(){
        const plainOptions = ['全部', '景点', '美食', '购物', '体验', '交通'];
        return(
            <div>
                <Checkbox.Group options={plainOptions} style={checkboxStyle} defaultValue={['景点']}/>
                <div style={{height:'400px',overflowY:'scroll'}}>
                    <Card>
                        <Card.Grid style={gridStyle}>
                            <img src={icon2} style={{width:'200px'}}/>
                            <p>颐和园</p>
                            <Meta description="+添加到行程" style={{cursor:'pointer'}}/>
                        </Card.Grid>
                        <Card.Grid hoverable={false} style={gridStyle}>
                            <img src={icon2} style={{width:'200px'}}/>
                            <p>颐和园</p>
                            <Meta description="+添加到行程" style={{cursor:'pointer'}}/>
                        </Card.Grid>
                        <Card.Grid style={gridStyle}>
                            <img src={icon2} style={{width:'200px'}}/>
                            <p>颐和园</p>
                            <Meta description="+添加到行程" style={{cursor:'pointer'}}/>
                        </Card.Grid>
                        <Card.Grid style={gridStyle}>
                            <img src={icon2} style={{width:'200px'}}/>
                            <p>颐和园</p>
                            <Meta description="+添加到行程" style={{cursor:'pointer'}}/>
                        </Card.Grid>
                        <Card.Grid style={gridStyle}>
                            <img src={icon2} style={{width:'200px'}}/>
                            <p>颐和园</p>
                            <Meta description="+添加到行程" style={{cursor:'pointer'}}/>
                        </Card.Grid>
                        <Card.Grid style={gridStyle}>
                            <img src={icon2} style={{width:'200px'}}/>
                            <p>颐和园</p>
                            <Meta description="+添加到行程" style={{cursor:'pointer'}}/>
                        </Card.Grid>
                        <Card.Grid style={gridStyle}>
                            <img src={icon2} style={{width:'200px'}}/>
                            <p>颐和园</p>
                            <Meta description="+添加到行程" style={{cursor:'pointer'}}/>
                        </Card.Grid>
                    </Card>
                </div>
            </div>
        )
    }

    renderUnorderedList(){
        const menu = (
            <Menu>
              <Menu.Item key="1">
                上海
              </Menu.Item>
              <Menu.Item key="2">
                北京
              </Menu.Item>
              <Menu.Item key="3">
                广州
              </Menu.Item>
              <Menu.Item key="4">
                <Input placeholder="输入城市名字" />
              </Menu.Item>
            </Menu>
          );
        return(
            <div>
                 <Card
                    style={{ width: 260,marginTop:'30px',marginLeft:'40px' }}
                >
                    {
                        this.state.addList.map((value,index)=>{
                          return (
                            <div key={index}>
                                <Card style={{ width: 200}} >
                                  <div style={{display:'flex'}}>
                                    <div style={{width:'50px',height:'50px',borderRadius:'50px',backgroundColor:'#41c074'}}><p style={{color:'white',fontSize:'24px',textAlign:'center',lineHeight:'50px'}}>D1</p></div>
                                    <div style={{display:'flex',flexDirection:'column'}}>
                                        <span>10月14日 周一</span>
                                        <span style={{fontSize:'22px'}}>上海>北京</span>
                                    </div>
                                  </div>
                                </Card>
                            </div>
                          )
                        })
                      }
                    <Meta description="+增加一天" style={{cursor:'pointer'}}/>
                </Card>
                <Card
                    style={{ width: 780,marginTop:'-543px',marginLeft:'320px' }}
                >   <div style={{display:'flex',flexDirection:'column',borderBlockEnd:'1px solid grey'}}>
                        <span>10月14日</span>
                        <span style={{fontSize:'20px',marginBottom:'30px'}}>上海>北京<Input placeholder="+增加城市" /></span>
                    </div>
                    <Card.Grid style={gridStyle1}>
                        <span style={{display:'flex'}}><img style={{width:'30px'}} src={icon}/><p style={{marginLeft:'12px'}}>故宫</p></span>
                        <span style={{display:'flex',marginTop:'30px'}}><Icon type="car" /><p style={{marginLeft:'12px'}}>19.08km</p></span>
                    </Card.Grid>
                    <Card.Grid style={gridStyle1}>
                        <span style={{display:'flex'}}><img style={{width:'30px'}} src={icon}/><p style={{marginLeft:'12px'}}>颐和园</p></span>
                    </Card.Grid>
                    <div >
                        <img style={{width:'34px'}} src={icon1}/><p style={{marginLeft:'12px'}}>今天还没安排住宿，请点击添加</p>
                    </div>
                </Card>
                <Card
                    style={{ width: 780,marginTop:'-390px',marginLeft:'1120px' }}
                >
                    <div style={{borderBlockEnd:'1px solid '}}> 
                        <Dropdown overlay={menu} style={{marginBottom:'20px'}}>
                            <span style={{fontSize:'16px',cursor:'pointer'}}>
                               北京<Icon type="down" />
                               {/* <Search onSearch={value => console.log(value)} enterButton /> */}
                            </span>
                        </Dropdown>
                    </div>
                    <div>
                        <Tabs defaultActiveKey="2">
                            <TabPane tab={<span><Icon type="rise"/>路线</span>}key="1">
                              Tab 1
                            </TabPane>
                            <TabPane tab={<span><Icon type="smile"/>游玩</span>}key="2">
                              {this.renderView()}
                            </TabPane>
                            <TabPane tab={<span><Icon type="shop"/>住宿</span>}key="3">
                              Tab 1
                            </TabPane>
                            <TabPane tab={<span><Icon type="car"/>城际交通</span>}key="4">
                              Tab 1
                            </TabPane>
                            <TabPane tab={<span><Icon type="edit"/>折扣</span>}key="5">
                              Tab 1
                            </TabPane>
                        </Tabs>
                    </div>
                </Card>
            </div>
        )
    }

    renderEnvironment(){
        return(
            <div>
                 <Card style={{ width: 80,marginTop:'30px',marginLeft:'40px' }}>
                    <div style={{marginTop:'14px',width:'50px',height:'50px',borderRadius:'50px',backgroundColor:'#41c074'}}><p style={{color:'white',fontSize:'24px',textAlign:'center',lineHeight:'50px'}}>D1</p></div>
                    <div style={{marginTop:'14px',width:'50px',height:'50px',borderRadius:'50px',backgroundColor:'#41c074'}}><p style={{color:'white',fontSize:'24px',textAlign:'center',lineHeight:'50px'}}>D2</p></div>
                    <div style={{marginTop:'14px',width:'50px',height:'50px',borderRadius:'50px',backgroundColor:'#41c074'}}><p style={{color:'white',fontSize:'24px',textAlign:'center',lineHeight:'50px'}}>D3</p></div>
                    <div style={{marginTop:'14px',width:'50px',height:'50px',borderRadius:'50px',backgroundColor:'#41c074'}}><p style={{color:'white',fontSize:'24px',textAlign:'center',lineHeight:'50px'}}>D4</p></div>
                    <div style={{marginTop:'14px',width:'50px',height:'50px',borderRadius:'50px',backgroundColor:'#41c074'}}><p style={{color:'white',fontSize:'24px',textAlign:'center',lineHeight:'50px'}}>D5</p></div>
                </Card>
                <Card
                    style={{ width: 240,marginTop:'-360px',marginLeft:'150px' }}
                >   <div style={{display:'flex',flexDirection:'column',borderBlockEnd:'1px solid grey'}}>
                        <span>10月14日</span>
                        <span style={{fontSize:'20px',marginBottom:'30px'}}>上海>北京<Input placeholder="+增加城市" /></span>
                    </div>
                    <Card.Grid style={gridStyle1}>
                        <span style={{display:'flex'}}><img style={{width:'30px'}} src={icon}/><p style={{marginLeft:'12px'}}>故宫</p></span>
                        <span style={{display:'flex',marginTop:'30px'}}><Icon type="car" /><p style={{marginLeft:'12px'}}>19.08km</p></span>
                    </Card.Grid>
                    <Card.Grid style={gridStyle1}>
                        <span style={{display:'flex'}}><img style={{width:'30px'}} src={icon}/><p style={{marginLeft:'12px'}}>颐和园</p></span>
                    </Card.Grid>
                    <div >
                        <img style={{width:'34px'}} src={icon1}/><p style={{marginLeft:'12px'}}>今天还没安排住宿，请点击添加</p>
                    </div>
                </Card>
                {/* <Card
                    style={{ width: 1450,marginTop:'-106px',marginLeft:'420px' }}
                >
                     <MyMapComponent
                        isMarkerShown={this.state.isMarkerShown}
                        onMarkerClick={this.handleMarkerClick}
                    />
                </Card> */}
                <div style={{marginLeft:'40px',marginTop:'-380px'}}>
                  <MapSelectBox/>
                </div>
            </div>
        )
    }

    render() {
        return (
          <div className='all'>
              <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item key="unordered-list">
                <Icon type="unordered-list" />
                标准模式
                </Menu.Item>
                <Menu.Item key="environment">
                <Icon type="environment" />
                地图模式
                </Menu.Item>
              </Menu>
              {
                  this.state.current==='unordered-list'?
                  <div>
                    {this.renderUnorderedList()}
                  </div>
                  :
                  <div>
                    {this.renderEnvironment()}
                  </div>
              }
          </div>
        );
      }
}


export default Detail


import React from "react"
import { compose, withProps } from "recompose"
import { Card,Dropdown,Icon,Checkbox } from 'antd';
import { withScriptjs, withGoogleMap, GoogleMap, Marker,Polyline} from "react-google-maps"

const MyMapComponent = compose(
  withProps({
    googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyADXRPfT4-ecgGNiq6mNJ0GuU7HjguF4MA&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%`,position: `absolute`,left:`50%`,top:`50%`,transform: `translate(-50%, -10%)`,fontSize:'30px'}}>加载中...</div>,
    containerElement: <div style={{ height: `900px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={7} defaultCenter={{ lat: -34.897, lng: 151.144 }}>
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: -35.397, lng: 149.644 }} onClick={props.onMarkerClick} />}
    <Polyline path={[{ lat: -34.397, lng: 150.644 }, { lat: -35.397, lng: 149.644 }]}/>
  </GoogleMap>
));

const checkboxStyle = {
  width: '80%',
  textAlign: 'center',
}


class MapSelectBox extends React.PureComponent {
  state = {
    isMarkerShown: false,
  }

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

  render() {
    const plainOptions = ['全部', '景点', '美食', '购物', '体验', '交通'];
    return (
      <div>
          <Card
                style={{ width: 1450,marginTop:'-106px',marginLeft:'420px' }}
            >
              <div style={{borderBlockEnd:'1px solid '}}> 
                  <Dropdown style={{marginBottom:'20px'}}>
                      <span style={{fontSize:'16px',cursor:'pointer'}}>
                          北京<Icon type="down" />
                      </span>
                  </Dropdown>
                  <Checkbox.Group options={plainOptions} style={checkboxStyle} defaultValue={['景点']}/>
              </div>
              <MyMapComponent
                isMarkerShown={this.state.isMarkerShown}
                onMarkerClick={this.handleMarkerClick}
              />
            </Card>
      </div>
      
    )
  }
}

export default MapSelectBox;



    
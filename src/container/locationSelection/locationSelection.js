import React from "react"
import SelectBox from "../../component/selectBox/selectBox"
import MapIndex from "../../component/leaflet/leafletmap"

const google = window.google;

class LocationSelection extends React.PureComponent {
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
    return (
      <div >
         <div style={{position:'relative',zIndex:1}}><MapIndex/></div>
         <div style={{position:'relative',zIndex:2,marginTop:'-470px'}}><SelectBox history={this.props.history}/></div>
      </div>
      
    )
  }
}

export default LocationSelection;




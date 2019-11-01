import React from 'react';
import L from 'leaflet';

import {connect} from "react-redux";

const iconStyle1 = L.icon({
    iconUrl: 'http://m.qpic.cn/psb?/V12zoSLu31ox7L/yVcJoWL49yaeLRh1eBY9Da.xVQG6LmmLojmG7GMmRR4!/b/dIMAAAAAAAAA&bo=yADIAAAAAAADByI!&rf=viewer_4',
    iconSize: [30, 40],
    iconAnchor: [20, 50],
    // popupAnchor: [-3, -76],
})

class MapLeaflet extends React.Component {
    componentDidMount() {

        //定义地图配置项
        const mapOption = {
            center: this.props.mapCenter,
            zoom: 4,
            layers: [
                L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                }),
            ]
        }

        //创建map
        this.map = L.map('indexMap', mapOption);

        //声明标记层
        this.markerLayer = null
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //移动地图
        if (prevProps.mapCenter !== this.props.mapCenter) {
            this.map.setView(this.props.mapCenter)
        }

        if (!Object.is(prevProps.markers, this.props.markers)) {
            //this.layer = L.layerGroup().addTo(this.map);
            this.updateMarkers(this.props.markers)
            // this.props.markers.map((item, index) => {
            //     L.marker(item.position, {icon: iconStyle1}).addTo(this.map)
            // })
        }
    }

    updateMarkers = (markersData) => {
        // this.layer.clearLayers();
        markersData.forEach(marker => {
            //定义标记层
            this.markerLayer = L.marker(marker.position, {icon: iconStyle1})

            //标记层添加Tooltip层
            this.markerLayer.bindTooltip(marker.title, {
                permanent: true,
                direction: 'right',
                offset: [4, -30]
            }).openTooltip();

            //标记层添加点击事件
            this.markerLayer.on(
                'click', (e) => {
                    this.map.setView(marker.position)
                    //this.marker.bindPopup('werewrweq').openPopup();
                })

            //标记层加入地图
            this.markerLayer.addTo(this.map)

        });
        //this.layerGroup.addLayer(this.markerLayer).addTo(this.map)
    }

    render() {
        return (
            <div>
                <div
                    id="indexMap"
                    //onClick={this.clearMarker}
                    style={{width: '100%', height: document.documentElement.clientHeight}}
                >
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        mapCenter: state.location.mapCenter,
        markers: state.location.markerArr,
    }
}

const actionCreators = {}

export default MapLeaflet = connect(mapStateToProps, actionCreators)(MapLeaflet)



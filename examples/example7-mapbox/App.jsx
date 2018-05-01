import React, { Component } from 'react';
import MapGL from "react-map-gl";
import ControlPanel from './ControlPanel';
import './App.css';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiaWFuc2hlbiIsImEiOiJjamZucWMydXcwOThqMzNvOWtobnVtanQ3In0.SmBxq_Zue3IYNVAelutVDg';

class App extends Component {
    state = {
        mapStyle: '',
        viewport: {
          latitude: 22.805,
          longitude: 114.147,
          zoom: 9.5,
          bearing: 0,
          pitch: 0,
          width: 500,
          height: 500
        }
    };
    componentDidMount() {
        window.addEventListener('resize', this._resize);
        this._resize();
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this._resize);
    }
    
    _resize = () => {
        this.setState({
          viewport: {
            ...this.state.viewport,
            width: this.props.width || window.innerWidth,
            height: this.props.height || window.innerHeight
          }
        });
    };
    _onViewportChange = viewport => this.setState({viewport});

    _onStyleChange = mapStyle => this.setState({mapStyle});

    render() {
        const {viewport, mapStyle} = this.state;
        return (
            <MapGL
                {...viewport}
                mapStyle={mapStyle}
                onViewportChange={this._onViewportChange}
                mapboxApiAccessToken={MAPBOX_TOKEN} >
                <ControlPanel
                    containerComponent={this.props.containerComponent}
                    onChange={this._onStyleChange} />
            </MapGL>
        );
    }
}

export default App;
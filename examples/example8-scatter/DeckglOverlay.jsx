import React, {Component} from 'react';
import DeckGL, {ScatterplotLayer} from 'deck.gl';

export default class DeckGLOverlay extends Component {
  static get defaultViewport() {
    return {
      longitude: 114.1,
      latitude: 22.75,
      zoom: 10,
      maxZoom: 16,
      pitch: 0,
      bearing: 0
    };
  }

  render() {
    const {viewport, maleColor, femaleColor, data, radius} = this.props;
    
    const layer = new ScatterplotLayer({
      id: 'scatter-plot',
      data,
      radiusScale: radius,
      radiusMinPixels: 0.25,
      getPosition: d => [d[0], d[1], 0],
      getColor: d => (d[2]),
      getRadius: d => 10,
      updateTriggers: {
        getColor: [maleColor, femaleColor]
      }
    });

    return <DeckGL width="100%" height="100%" {...viewport} layers={[layer]} />;
  }
}

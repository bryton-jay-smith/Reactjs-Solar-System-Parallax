import React from 'react';

import Planets from './Planets.jsx';

class App extends React.Component {
render() {
  return (
    <div>
      <Planets planet="mercury" size="0.3%"/>
      <Planets planet="venus" size="0.9%" />
      <Planets planet="earth" size="1.0%" />
      <Planets planet="mars" size="0.5%" />
      <Planets planet="jupiter" size="11.0%" />
      <Planets planet="saturn" size="9.0%" />
      <Planets planet="uranus" size="4.0%" />
      <Planets planet="neptune" size="3.9%" />
    </div>
  )
}
}

export default App;

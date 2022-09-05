import React, { CSSProperties } from 'react';
import './App.css';
import Image from './inteliver/Image';

const styleImage: CSSProperties = {
  // maxWidth: '670px',
  // maxHeight: '680px',
};

const App = () => (
  <div className="App">
    <Image
      src="https://img9.irna.ir/d/r2/2022/08/23/4/169868889.jpg"
      alt="a person talking"
      style={styleImage}
      className="image-test"
      width="300"
    />
  </div>
);

export default App;

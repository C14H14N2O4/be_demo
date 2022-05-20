import React from 'react';
import ReactDOM from 'react-dom/client';
import Location from './Location'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Location/>
      <Location/>
      <Location/>
    </div>
  </React.StrictMode>
);


/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom/client';
import FilesDropZone from './filesdropzone';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <FilesDropZone />
  </React.StrictMode>
);

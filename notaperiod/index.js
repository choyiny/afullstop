import React from 'react';
import { render } from 'react-dom';
import { parseQueryString } from './utilities';
import BaseDesign from './designs/BaseDesign';
import './template/global.css';

const getURLQuery = () => parseQueryString(window.location.search);

/**
  This actually renders the component based design. You can just switch the
  design component and the browser will render the appropriate page. The URL of
  the renderered design will be still the of our index.html.
**/
render(<BaseDesign {...getURLQuery()} />, document.getElementById('root'));

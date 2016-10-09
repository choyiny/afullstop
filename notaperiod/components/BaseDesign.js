import React, { PropTypes } from 'react';
import { getRandomFromArray, getSubPathURL } from '../utilities';

/**
  These are javascript objects describing CSS styles.
  With the correspondent webpack workflow it will be possible to import plain
  css style sheets, so you don't need to write your styles in .js if you don't
  want to.
**/

const baseStyle = {
  fontFamily: 'Tangerine, cursive',
  fontWeight: 400,
  fontSize: '2rem',
  color: 'white',
};

const styles = {
  container: {
    backgroundColor: '#7697cd',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexFlow: 'column',
  },
  title: {
    ...baseStyle,
    fontSize: '4rem',
    margin: 0,
  },
  link: {
    ...baseStyle,
    textDecoration: 'none',
    color: 'rgba(0, 0, 0, 0.75)',
  },
};


/**
  To receive a random design that our link will point at. Later, this code will
  be replaced with react based logic.
**/
const designs = [
  'configurable.html',
  'dictionaryDefinition.html',
  'gradienBackground.html',
  'textAnimation.html',
  'typedText.html',
];

const getRandomDesignURL = () => getSubPathURL(`designs/${getRandomFromArray(designs)}`, window.location);

/**
  This is the real page markup! It gets the URL query parameters as properties,
  so you can access them easily.
**/
const BaseDesign = props => (
  <div className="container" style={styles.container}>
    <h1 style={{ ...styles.title, fontWeight: 700 }}><span id="nametext">Dear {props.name ? props.name : 'Anonymous'},</span></h1>
    <h1 style={styles.title}>This is a full stop, not a period. A full stop.</h1>
    <a style={styles.link} href={getRandomDesignURL()}>really?</a>
  </div>
);

BaseDesign.propTypes = {
  name: PropTypes.string,
};

export default BaseDesign;

import React from 'react';

export default class App extends React.Component {
  render() {
    const { data } = this.props;
    const { header, title, subHeader } = data;
    return (
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        width="400px" height="327px" viewBox="0 0 400 327" enableBackground="new 0 0 400 327" xmlSpace="preserve">
        <rect fill="#DEF2FD" width="400" height="327" />
        <polygon opacity="0.2" fill="#7DACDC" enableBackground="new" points="0,327 200,173.797 400,327 " />
        <polygon opacity="0.2" fill="#7DACDC" enableBackground="new" points="91,327 291,280.292 491,327 " />
        <polygon opacity="0.2" fill="#7DACDC" enableBackground="new" points="-101,327 99,201 299,327 " />
        <g>
          <text transform="matrix(1 0 0 1 121.5 57.875)" fill="#0093C0" fontSize="29.7691">{ header ? header : "React Node" }</text>
          <text transform="matrix(1 0 0 1 38.5483 114.1104)" fill="#016082" fontSize="97.8796">{ title ? title : "Dynamic"}</text>
          <text transform="matrix(1 0 0 1 41.5005 141.4561)" fill="#0093C0" fontSize="14.5332" letterSpacing="140">{ subHeader ? subHeader : "SVG"}</text>
        </g>
      </svg>
    )
  }
}

import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <svg height="100" width="400" xmlnsXlink="http://www.w3.org/1999/xlink">
          <a xlinkHref="" target="_blank">
            <text x="50" y="50" fill="red">Hello</text>
          </a>
          <text x="0" y="100">
            An SVG Animation
          </text>
        </svg>
      </div>
    )
  }
}

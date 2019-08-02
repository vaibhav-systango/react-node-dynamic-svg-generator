import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <svg height="100" width="1000" xmlnsXlink="http://www.w3.org/1999/xlink">
          <a xlinkHref="" target="_blank">
            <text x="50" y="50" fill="red">{this.props.data && this.props.data.displayText}</text>
          </a>
          <text x="0" y="100">
            An SVG dnamic configurable demo using Node, express and React js, You can change query params value and ?displayText=text to see the changes.  
          </text>
        </svg>
      </div>
    )
  }
}

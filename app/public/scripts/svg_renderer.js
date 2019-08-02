import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './app'
export default function(data) {
  return ReactDOMServer.renderToStaticMarkup(<App data={data} />);
}

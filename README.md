
Dynamic SVG’s

With React & Node!

by Vaibhav Gurnani & Manraj Parmar on <add date here>
Problem ?
 Many times we need to customize SVG according to our requirements and need to reuse the same SVG with different configuration. So to keep at frontend and customize according to out requirements will increase complexity and decrease performance and we can not re-use the same logics in different application or platform. Also it makes no sense to serve millions of SVG’s via static files or via bucket storage. How about a solution where we can generate our SVG’s in run time & provide it to our client side applications.

What are SVG’s ?
Scalable Vector Graphics (SVG) is an XML-based vector image format for      two-dimensional graphics with support for interactivity and animation.

Why SVG’s ?

1. SVG = WEB & HTML5 Standard format – it means that this is the real trend in online today
2. SVG is SEO friendly – when embedding to your website
3. SVG has a very small size so it loads faster – very good for Adwords Campaigns and  Social Ads
4. SVGs help reducing the final size of the HTML5 package
5. SVG is an Infinitely scalable vectorial graphic
6. Retina and Mobile ready – looks good on any screen
7. SVGs help reducing the final size of the HTML5 package.
8. Uploading your logo as SVG makes it super sharp and prevents distortion
9. An SVG lets you recolor your uploaded graphics
10. You can add custom shapes or design elements to your design
11. You can solve special character text issues with SVG

How did we Combat This ?
There are cases such as apps or fantasy games, where we need to showcase data in tables or team logos etc. We can keep all the logics at Backend that will take inputs from frontend as Parameter in the form of JSON/XML and will customize SVG according to our customization with minimum complexity, high performance and can re-use on any platform. 
 There are multiple ways to achieve this solution but without spending too much time in exploration(which we actually did), would like to recommend most awesome way to achieve solution using one of the trending technology stack’s in Client & Server Side  (Node JS with Express framework and React).

Quick Summary to Solution ?
React is one of today’s most popular ways to create a component-based UI. It helps to organize an application into small, human-digestible chunks. With its “re-render the whole world” approach, you can avoid any complex internal interactions between small components, while your application continues to be blazingly fast due to the DOM-diffing that React does under the hood (i.e. updating only the parts of the DOM that need to be updated). But can we apply the same techniques to web graphics — SVG in particular? Yes! we don’t know about you, but for me SVG code becomes messy pretty fast. Trying to grasp what’s wrong with a graph or visualization just by looking at SVG generator templates (or the SVG source itself) is often overwhelming, and attempts to maintain internal structure or separation of concerns are often complex and tedious.

We don’t know about you guys, but for us SVG code became messy pretty fast. Trying to grasp what’s wrong with a graph or visualization just by looking at SVG generator templates (or the SVG source itself) is often overwhelming, and attempts to maintain internal structure or separation of concerns are often complex and tedious.





Sneak Peek into Solution with Codebase ?

React works with the DOM, So we can work with SVG with the same way that work with HTML without any difference.

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
We can make any type of complex SVG as well using React and also we can use any npm libraries to make things easier. 

But the concern is We need to customize at backend and get customized SVG on frontend. React has no real DOM dependency, so you can render it on a server easily.

We will be using an API endpoint from Node Express app to get SVG from backend(Rendered via React DOM) using SSR.
Node Js + Express  - Provide an API with proper code structure and routings. 
React Js - Provide a customized SVG with using any NPM library as well!
So, We will be needed an approach that will utilize Node js, Express and React features.

Steps to Integrate this Solution ?

Need to install express, react, react-dom, body-parser, babel.

Package.json -  contain all dependency

{
 "name": "svg-node-react",
 "version": "1.0.0",
 "description": "Create SVG using XML",
 "main": "server.js",
 "scripts": {
   "start": "node server.js"
 },
 "author": "",
 "license": "ISC",
 "dependencies": {
   "babel-preset-es2015": "^6.24.1",
   "babel-preset-react": "^6.24.1",
   "babel-preset-stage-0": "^6.24.1",
   "babel-register": "^6.26.0",
   "body-parser": "^1.19.0",
   "eslint-plugin-react": "^3.16.1",
   "express": "^4.17.1",
   "react": "^0.14.0",
   "react-dom": "^0.14.0",
   "xmldom": "^0.1.27"
 }
}

Server.js  - Initial file to run the backend code
We use simple Express app that handles incoming requests for SVG graphs (server.js):


require("babel-register");
const express = require('express');
const app = express();
const routes = require('./app/routes');
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*"); //here configure your origin pointing to your app
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
});

app.use('/api', routes);
const server = app.listen(3006, function () {
 const host = server.address().address;
 const port = server.address().port;
 console.log('XML parser and SVG, JSON generator app listening at http://%s:%s', host, port);
});
 .babelrc - Allow to support react, es6 syntax

{
   "presets": ["es2015", "stage-0", "react"]
 }
routes/index.js - contain all routes.

const express = require('express');
const router = express.Router();
const svgGenerator = require('../controllers/svgGenerator');

router.get('/svg', svgGenerator.getSVG); // this route returns the SVG generated from react app
module.exports = router;
controllers/svgGenerator.js - 
As you can see, only these lines are really from our application, rest server.js had generic boilerplate code for node express app:

const svgRenderer = require('../public/scripts/svg_renderer').default;

exports.getSVG = function(req, res) {
   const svg = svgRenderer(req.query);
   res.send(svg);
}
public/scripts/svg_render.js - To pass parameter to make dynamic SVG and return SVG to the express route.

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './app'
export default function(data) {
 return ReactDOMServer.renderToStaticMarkup(<App data={data} />);
}
public/scripts/app.js - In this script, we will create a configurable SVG.

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
To test it, we would run command:
node server.js

Open : 
http://localhost:3006/api/svg?header=React%20Node&title=Dynamic&subHeader=SVG

Will get SVG and can re-use with dynamic data at any platform(Server-side rendering!). Here we’re using custom data rendered from query params in the api call ‘/svg?header=React Node&title=Dynamic&subHeader=SVG’ , similarly we can configure and GET OR POST route with custom query params or request body to achieve dynamic rendering by passing necessary template/xml/json data.


Hope this will help you to achieve your requirements, you can easily change all the SVG configuration/generator logic at server end can easily change without breaking any external dependencies. We can also handle complex SVG with animations and custom styles, but this needs to be handled in your client side application where we are consuming this dynamic SVG api.

If you missed anything, you can find the whole example in the repository.

https://github.com/vaibhav-systango/react-node-dynamic-svg-generator.git


And feel free to contact on vaibhav@systango.com



CONCLUSION
We can’t say that you should be mandatorily using SVG in your mobile/web apps, but they certainly have their added advantages. Also for a use case where we need to generate dynamic view which is reusable across all apps, it makes sense to write such reusable piece of code like showing graphs/data/tabular analytics in an isolated React Node app which can be reused across all the platforms, and the same logic doesn’t need to be written across all the client side applications. This would save time & will definitely have efficient & robust performance. These vector images have the potential to create a shift in the way your client side apps perform and definitely a better user experience.To get detailed information or contact our team, visit us here.


READ MORE TECH CONTENT ON OUR WEBSITE 

 
                                   						         
    UK 								         India	
1 Fore Street,             							Building No.1 3rd-4th Floor
London EC2Y 9DT 						         Crystal IT Park (SEZ), Indore , 452001






Generating SVG With React
=====================


### Usage

```
npm install
npm start
open http://localhost:3003
```

### Endpoints

```
http://localhost:3005/svg

--to return svg

http://localhost:3005/api/details

--to return svg header data.


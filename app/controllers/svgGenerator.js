const svgRenderer = require('../public/scripts/svg_renderer').default;

exports.getSVG = function(req, res) {
    const svg = svgRenderer(req.query);
    res.send(svg);
}
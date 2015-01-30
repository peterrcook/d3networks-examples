var nodes = [
  {"name" : "Miles"},
  {"name": "John"},
  {"name": "Thelonious"}
];

var links = [
  {"source": 0, "target": 1},
  {"source": 0, "target": 2}
];

var forceLayout = d3.layout.force();

forceLayout
  .size([800, 600])
  .charge(-1000)
  .linkDistance(100)
  .on('tick', update);


function createNodes() {
  d3.select('svg')
    .selectAll('line')
    .data(links)
    .enter()
    .append('line');

  d3.select('svg')
    .selectAll('circle')
    .data(nodes)
    .enter()
    .append('circle')
    .attr('r', 5);
}


function update() {
  d3.select('svg')
    .selectAll('line')
    .attr('x1', function(d) {return d.source.x;})
    .attr('y1', function(d) {return d.source.y;})
    .attr('x2', function(d) {return d.target.x;})
    .attr('y2', function(d) {return d.target.y;});

  d3.select('svg')
    .selectAll('circle')
    .attr('cx', function(d) {return d.x;})
    .attr('cy', function(d) {return d.y;});
}

createNodes();

forceLayout
  .nodes(nodes)
  .links(links);

forceLayout.start();

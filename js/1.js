var nodes = [
  {"name" : "Miles"},
  {"name": "John"},
  {"name": "Thelonious"}
];

var links = [
  {"source": 0, "target": 1},
  {"source": 0, "target": 2}
];

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

createNodes();
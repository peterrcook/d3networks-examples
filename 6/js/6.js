d3.json('data/network.json', function(err, json) {

  var radiusScale = d3.scale.sqrt().domain([0, 500000]).range([0, 10]);

  var forceLayout = d3.layout.force()
      .size([600, 300])
      .charge(-800)
      .gravity(0.5)
      .on('tick', update);

  function createNodes() {
    d3.select('svg')
      .selectAll('line')
      .data(json.links)
      .enter()
      .append('line');

    d3.select('svg')
      .selectAll('circle')
      .data(json.nodes)
      .enter()
      .append('circle')
      .attr('r', function(d) {
        return radiusScale(d.listeners);
      })
      .on('mouseover', function(d) {
        d3.select('.info')
          .text(d.name);
      });
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
    .nodes(json.nodes)
    .links(json.links)
    .start();
});

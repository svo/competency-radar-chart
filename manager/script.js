var w = window.innerWidth - 300, h = window.innerWidth - 300;

var colorscale = d3.scale.category10();

var LegendOptions = ['Manager'];

var d = [
		  [
        {axis: "Provides Clarity", value: 3},
        {axis: "Ensures Accountability", value: 3},
        {axis: "Encourages Growth", value: 3},
        {axis: "Gives Recognition", value: 3},
        {axis: "Provides Meaning", value: 2}
      ]
		];

var mycfg = {
  w: w,
  h: h,
  maxValue: 5,
  levels: 5,
  ExtraWidthX: 300
}

RadarChart.draw("#chart", d, mycfg);

var svg = d3.select('#body')
	.selectAll('svg')
	.append('svg')
	.attr("width", w+300)
	.attr("height", h)

var text = svg.append("text")
	.attr("class", "title")
	.attr('transform', 'translate(90,0)')
	.attr("x", w - 70)
	.attr("y", 10)
	.attr("font-size", "12px")
	.attr("fill", "#404040")
	.text("Competencies");

var legend = svg.append("g")
	.attr("class", "legend")
	.attr("height", 100)
	.attr("width", 200)
	.attr('transform', 'translate(90,20)')
	;
	legend.selectAll('rect')
	  .data(LegendOptions)
	  .enter()
	  .append("rect")
	  .attr("x", w - 65)
	  .attr("y", function(d, i) { return i * 20;})
	  .attr("width", 10)
	  .attr("height", 10)
	  .style("fill", function(d, i) { return colorscale(i);})
	  ;
	legend.selectAll('text')
	  .data(LegendOptions)
	  .enter()
	  .append("text")
	  .attr("x", w - 52)
	  .attr("y", function(d, i) { return i * 20 + 9;})
	  .attr("font-size", "11px")
	  .attr("fill", "#737373")
	  .text(function(d) { return d; })
	  ;

const drawScatterplot = (data) => {
    // T06-2 Step 2.2
    /// Set the dimensions and margins of the chart area
const svg = d3.select("#scatterplot")
.append("svg")
.attr("viewBox", `0 0 ${width} ${height}`);
    /// Create an inner chart group with margins
    innerChartS = svg
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);
    // T06-2 Step 2.3
    /// Set up x and y scales using data extents
    const xExtent = d3. extent(data, d => d.star);
    const yExtent = d3. extent(data, d => d.screenSize);
    /// Map star ratings and screen sizes to positions within the chart area.
    const xScaleS = d3.scaleLinear()
    .domain(xExtent [0], xExtent[1] +0.5)
    .range([0, innerWidth]);
    const yScaleS = d3.scaleLinear()
    .domain(yExtent[0], yExtent[1])
    .range([innerHeight, 0]);
    // T06-2 Step 2.4
    /// (Corrected code) Set up colours for screen technologies
    const uniqueTechs = [...new Set(data.map(d => d.screenTech))];
colorScale = d3.scaleOrdinal()
  .domain(["LED", "LCD", "OLED"])
  .range(["#3182bd", "#e6550d", "#31a354"]); 

    colorScale
        .domain(uniqueTechs)
        .range(d3.schemeCategory10);
    
    // T06-2 Step 2.5 Draw the circles
innerChartS.selectAll("circle")
  .data(data)
  .enter()
  .append("circle")
  .attr("cx", d => xScaleS(d.star))
  .attr("cy", d => yScaleS(d.energyConsumption))
  .attr("r", 4)
  .attr("fill", d => colorScale(d.screenTech)) 
  .attr("opacity", 0.5); 
    // T06-2 Step 2.6 Add bottom and left axis
    /// Add axes
const xAxisS = d3.axisBottom(xScaleS);

innerChartS.append("g")
  .attr("class", "x-axis")
  .attr("transform", `translate(0, ${innerHeight})`)
  .call(xAxisS);
const yAxisS = d3.axisLeft(yScaleS);

innerChartS.append("g")
  .attr("class", "y-axis")
  .call(yAxisS); 
    /// Add a legend on the right-hand side
// Step 2.7: Add a legend on the right-hand side
const legend = svg.append('g')
  .attr('class', 'legend')
  .attr('transform', `translate(${width - 140}, ${margin.top})`);
uniqueTechs.forEach((tech, i) => {
  const g = legend.append('g')
    .attr('transform', `translate(0, ${i * 22})`);
  g.append('rect')
    .attr('width', 12)
    .attr('height', 12)
    .attr('fill', colorScale(tech));
  g.append('text')
    .attr('x', 18)
    .attr('y', 10)
    .text(tech)
    .attr('class', 'axis-label');
});
    // Show each screen technology with its matching point colour.

};
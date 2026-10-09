// Set up dimensions and margins
const margin = { top: 40, right: 30, bottom: 50, left: 70 };
const width = 800; // Total width of the chart
const height = 400; // Total height of the chart
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;

let innerChartS;
const tooltipWidth = 65;
const tooltipHeight = 32;
const bingenerator = d3.bin()
.value(d => d.energyConsumption)
/* Make the colours accessible globally */
/****************************************/
const barColor = "#606464";
const bodyBackgroundColor = "#fffaf0";

// Set up the scales
const xScale = d3.scaleLinear();
const yScale = d3.scaleLinear();
const xScaleS = d3.scaleLinear();
const yScaleS = d3.scaleLinear();
const colorScale = d3.scaleOrdinal();

// T06-1 Step 6.2 Create a bin generator using d3.bin
const binGenerator = d3.bin()
  .value(d => d.energyConsumption) // Specify the value accessor
// T06-1 Step 7.2 Make the filter options accessible globally
const filters_screen=[
    {id: "all", label: "All", isActive:true},
    {id:"LED", label:"LED", isActive:false},
    {id:"LCD", label:"LCD", isActive:false},
    {id:"OLED", label:"OLED", isActive:false}
]
// T06-2 Step 1.4 Set up shared constant

// T06-2 Step 3.3 Add tooltipWidth and tooltipHeight
function createTooltip() {
  // Step 3.2: Append tooltip group element to scatterplot's innerChartS
  const tooltip = innerChartS.append("g")
    .attr("id", "tooltip")
    .style("opacity", 0); // Hide initially

  // Step 3.3: Append tooltip background rectangle
  tooltip.append("rect")
    .attr("width", tooltipWidth)
    .attr("height", tooltipHeight)
    .attr("rx", 5) // Rounded corners
    .attr("ry", 5)
    .attr("fill", colors.barColor) // Matching color theme
    .attr("opacity", 0.85);

  tooltip.append("text")
    .attr("x", tooltipWidth / 2)
    .attr("y", tooltipHeight / 2 + 5)
    .attr("text-anchor", "middle")
    .attr("fill", "#ffffff")
    .style("font-weight", "bold");
}

function buildMetadata(sample) {

    var url = `/metadata/${sample}`;
// Use `d3.json` to fetch the metadata for a sample
    d3.json(url).then(function(info) {


         // Use d3 to select the panel with id of `#sample-metadata`
        var dashb = d3.select("#sample-metadata");
        // Use `.html("") to clear any existing metadata
        dashb.html("");

        // Use `Object.entries` to add each key and value pair to the panel
         // Hint: Inside the loop, you will need to use d3 to append new
         // tags for each key-value in the metadata.
         Object.entries(info).forEach(([i, x]) => {
            //append a paragraph tag
            var paragraph = dashb.append("p");

            //write text for the tag
            paragraph.text(`${i}: ${x}`);
        });

    // BONUS: Build the Gauge Chart
        var weekfreq = info['WFREQ'];
        buildGauge(weekfreq);
    });
}

//function to build the bubble and pie charts
function buildCharts(sample) {
    
    //Use `d3.json` to fetch the sample data for the plots
    var url = `/samples/${sample}`;

    //get json output with d3 and build plots
    d3.json(url).then(function(otus) {

        var otuids = otus['otu_ids'];
        var otuvalues = otus['sample_values'];
        var otulabels = otus['otu_labels'];

        // HINT: You will need to use slice() to grab the top 10 sample_values
        var otuidstop = otuids.slice(0, 10);
        var otuvaluestop = otuvalues.slice(0, 10);
        var otulabelstop = otulabels.slice(0, 10);

        //Build a Bubble Chart using the sample data
        var trace1 = {
            x: otuids,
            y: otuvalues,
            mode: "markers",
            marker: {
                size: otuvalues,
                color: otuids
            },
            text: otulabels,
            textinfo: 'none',
            hoverinfo: 'x+y+z+text',
            type: 'scatter'
        };
        var data1 = [trace1];

        var layout1 = {
            showlegend: false,
            title: `Data for Sample ${sample}`,
            xaxis: {title: "OTU ID"},
            yaxis: {title: "Value"}
        };

        Plotly.newPlot("bubble", data1, layout1);

        //Build a Pie Chart
        var trace2 = {
            values: otuvaluestop,
            labels: otuidstop,
            type: 'pie',
            text: otulabelstop,
            textinfo: 'percent',
            hoverinfo: 'label+text+value+percent'
        };
        var data2 = [trace2];

        var layout2 = {
            title: `Top Ten Measurements for Sample ${sample}`,
        };

        Plotly.newPlot("pie", data2, layout2);

    });
}

//function to initiate plots
function init() {
    //grab a reference to the dropdown select
    var selector = d3.select("#selDataset");

    //use the list of sample names to populate the select options
    d3.json("/names").then((sampleNames) => {
        sampleNames.forEach((sample) => {
            selector.append("option").text(sample).property("value", sample);
        });

        //use the first sample from list to build the initial plots
        const firstSample = sampleNames[0];
        buildCharts(firstSample);
        buildMetadata(firstSample);
    });
}

//function to change charts when a new sample is selected
function optionChanged(newSample) {
    //fetch new data and build charts
    buildCharts(newSample);
    buildMetadata(newSample);
}

//Initialize the dashboard
init();
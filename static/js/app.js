//Sample data at URL Below

let url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Promise Pending
let dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);

// Fetch the JSON data and console log it
let data = d3.json(url).then(function(data) {
   console.log(data);

   let names = data.names;
   let samples = data.samples;

   console.log("Names: "+ names);
   console.log("Samples: " + samples);

   let numSamples = (samples[0].sample_values.slice(0,10));

   numSamples = numSamples.reverse();

   console.log (samples[0].otu_ids.slice(0,10));

   let axis = axis_name_f(samples[0].otu_ids.slice(0,10));

   axis = axis.reverse();

   console.log (samples[0].otu_labels.slice(0,10));

   let labels =  (samples[0].otu_labels.slice(0,10));

   labels = labels.reverse();

   console.log(axis);



  //Top 10 data


// Trace1 for the Greek Data
let trace1 = {
    x: numSamples,
    y: axis,
    text: labels,
    name: "OTU",
    type: "bar",
    orientation: "h"
  };
  
  // Data array
  // `data` has already been defined, so we must choose a new name here:
  let traceData = [trace1];
  
  // Apply a title to the layout
  let layout = {
    title: "Top 10 OTUs",
    margin: {
      l: 100,
      r: 100,
      t: 100,
      b: 100
    }
  };
  
  // Render the plot to the div tag with id "plot"
  // Note that we use `traceData` here, not `data`
  Plotly.newPlot("bar", traceData, layout);
  



});


function axis_name_f(arr) {
    let axis_name = [];
    for (let i = 0; i < arr.length; i++) {
      let name = ""  ;
      name = "OTU "+arr[i];
      axis_name.push(name)
    }
      
    return axis_name;
  }
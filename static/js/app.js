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
   let metadata = data.metadata

   console.log("Names: "+ names);
   console.log("Samples: " + samples);
   
   //Invoking functions to plot charts in the html 
   plotBarChart(samples[0]);

   plotBubbleChart(samples[0]);

   plotMetaData (metadata[0])



});


function axis_name_f(arr) {
    let axis_name = [];
    for (let i = 0; i < arr.length; i++) {
      let name = ""  ;
      name = "OTU "+arr[i];
      axis_name.push(name);
    }
      
    return axis_name;
  }



//Function to plot the BarCharts

function plotBarChart (samples){
    

    //Top 10 data
    let numSamples = (samples.sample_values.slice(0,10));
    numSamples = numSamples.reverse();
    
    let axis = samples.otu_ids.slice(0,10).map(sample => `OTC ${sample}`);
    axis = axis.reverse();
 

    let labels =  (samples.otu_labels.slice(0,10));
    labels = labels.reverse();
    
    
    // Trace1 for the Top 10 OTUs
    
    let trace = {
        x: numSamples,
        y: axis,
        text: labels,
        name: "OTU",
        type: "bar",
        orientation: "h"
   };
   
   // Data array
   let traceData = [trace];
   
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
   
   // Render the plot to the div tag with id "bar"
   Plotly.newPlot("bar", traceData, layout);

}


//Function to plot the BarCharts


function plotBubbleChart (samples){
    
    
    //Top 10 data
        
    let numSamples = (samples.sample_values);
    
    let axis = samples.otu_ids;
        
    let labels =  (samples.otu_labels);     

    let trace = {
        x: axis,
        y: numSamples,
        text: labels,
        mode: "markers",
        marker:{
            size:numSamples,
            color:axis,
            colorscale:"Earth"
        }
      };
      
      // Data array
 
      let traceData = [trace];
      
      // Apply a title to the layout
      let layout = {
        title: "Bacteria Per Sample",
        hovermode: "closest",
        xaxis: {title: "OTU ID"}
      };
      
      Plotly.newPlot("bubble", traceData, layout);


}


function plotMetaData (metadata){

    // Create an array of category labels
    let dataLabels = Object.keys(metadata);

        
    // Create an array with Metadata Values
    let dataValues = Object.values(metadata);


    console.log("Labels " + dataLabels);

    console.log("values " + dataValues);

    // for (let i=0;dataValues.length;i++){

    //     console.log(dataLabels[i] + " : " + dataValues[i]);
    // }




// // Create a new element
// let li1 = d3.select("ul").append("li");
// li1.text("A new item has been added!");

// // Use chaining to create a new element and set its text
// let li2 = d3.select("ul").append("li").text("Another new item!");

}
# plotly-challenge
### Summary
This repository contains an interactive dashboard to explore the Belly Button Biodiversity DataSet.<br>
### Technical Details
In order to run the code, it is required:<br>
* Python and SQLAlchemy<br>
* SQLAlchemy ORM queries, Pandas, and Matplotlib.<br>
### Screenshots
Pie.JPG<br>
![Pie](Pie.JPG)<br><br>
GaugeGraph.JPG<br>
![GaugeGraph](GaugeGraph.JPG)<br><br>
Bubble.JPG<br>
![Bubble](Bubble.JPG)<br><br>
### Explanations<br>
The outcome is shown in screenshots for reference purpose of the public.<br>


# plotly-challenge
Belly Button Biodiversity<br>
Build an interactive dashboard to explore the Belly Button Biodiversity DataSet.<br>

Inside the local git repository, create a directory for the Plotly challenge.<br>
Use the folder name to correspond to the challenge: Belly_Button_Diversity.<br>
This is a full stack app so add the html, js, css, python and sqlite files.<br>

## Step 1 - Plotly.js<br>
Use Plotly.js to build interactive charts for your dashboard.<br>
Create a PIE chart that uses data from your samples route (/samples/<sample>) to display the top 10 samples.<br>
Use sample_values as the values for the PIE chart.<br>
Use otu_ids as the labels for the pie chart.<br>
Use otu_labels as the hovertext for the chart.<br>

Create a Bubble Chart that uses data from the samples route (/samples/<sample>) to display each sample.<br>
Use otu_ids for the x values.<br>
Use sample_values for the y values.<br>
Use sample_values for the marker size.<br>
Use otu_ids for the marker colors.<br>
Use otu_labels for the text values.<br>

Display the sample metadata from the route /metadata/<sample><br>
Display each key/value pair from the metadata JSON object somewhere on the page.<br>
Update all of the plots any time that a new sample is selected.<br>
Create any layout for the dashboard.<br>

## Step 2 - Heroku<br>
Deploy your Flask app to Heroku.<br>
Use the provided sqlite file for the database.<br>
Optional Challenge<br>
Adapt the Gauge Chart from https://plot.ly/javascript/gauge-charts/ to plot the Weekly Washing Frequency obtained from the /metadata/<sample>route.<br>
Modify the example gauge code to show the top ten values ranging from 0 - 9.<br>
Update the chart whenever a new sample is selected.<br>

* Flask API<br>
Use Flask API starter code to serve the data needed for your plots.<br>
Test your routes by visiting each one in the browser.<br>
Pip install -r requirements.txt before starting the server.<br>

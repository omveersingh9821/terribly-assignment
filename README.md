## Getting Started
Step 1:- create next.js app   -> "npx create-next-app terribly-tales" after that "cd terribly-tales" then "npm run dev"

Step 2:- install axios for making HTTP requests  -> "npm install axios"
Step 3:- install chart.js and react-chartjs-2 package which is very helpul to create dynamic chart in minimal effort and time  -> "npm install react-chartjs-2 chart.js"
The Chart.register() method is called to register the required chart scales and elements.

Step4 :- inside return statement conditional rendering will be happen. On first load, only has a Submit button
after that when you click on fetchData() method will be invoke and using setShow(false) to hide submit button
and show chart.
options in chart.js ->  to modify chart like text color maintainAspectRatio etc.,


## fetchData()
This method is responsible for fetching data from api.
It is responsible for displaying chart.
First fetch data after that convert this data.
Convert fetch data into array.
Then make a frequency array.
then use of setHistogramData() to set data in histogramData.
Then map this array to chart.js chart.
Then display chart.



## Screenshots
## Getting Started
Step 1:- create react.js app   -> "npx create-react-app terribly-tales" after that "cd terribly-tales" then "npm start"

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
Home Page 
<img width="750" alt="Screenshot 2023-05-14 at 8 04 48 PM" src="https://github.com/omveersingh9821/terribly-assignment/assets/88961233/a7ff1a44-e354-484a-9db0-6dcfedbb807c">

<img width="1416" alt="Screenshot 2023-05-14 at 8 05 28 PM" src="https://github.com/omveersingh9821/terribly-assignment/assets/88961233/04cfd78d-1fc3-4862-abf5-fa6e0440b53e">

## Host Link
Host Link:- https://zingy-stardust-1d78d2.netlify.app/

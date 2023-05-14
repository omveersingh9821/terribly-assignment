import React, { useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";

// Register the required scales and elements
ChartJS.register(CategoryScale, LinearScale, BarElement, Title);

const HomePage = () => {
  const [histogramData, setHistogramData] = useState(null);
  const [show, setShow] = useState(true);

  //option for Bar
  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Words',
          color: 'white', 
        },
        ticks: {
          color: 'gray', 
        },
      },
      y: {
        title: {
          display: true,
          text: 'Frequency',
          color: 'white', 
        },
        ticks: {
          color: 'gray', 
        },
      },
    },
  };


  //invoke when you click on 
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://www.terriblytinytales.com/test.txt"
      );
      const textData = response.data;

      // Split the text into an array of words
      const words = textData.toLowerCase().match(/\b\w+\b/g);
   
      // Count the frequency of each word
      const wordCount = {};
      words.forEach((word) => {
        wordCount[word] = (wordCount[word] || 0) + 1;
      });

      // Sort the words by their frequency
      const sortedWords = Object.keys(wordCount).sort(
        (a, b) => wordCount[b] - wordCount[a]
      );
      

      // slice 20 most occurring words
      const topWords = sortedWords.slice(0, 20);

      // Prepare data for the histogram
      const data = {
        labels: topWords,
        datasets: [
          {
            label: "Word Frequency",
            data: topWords.map((word) => wordCount[word]),
            backgroundColor: "rgb(32, 124, 254)",
          },
        ],
      };
      setHistogramData(data);
      setShow(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const exportCSV = () => {
    if (!histogramData) return;

    const csvContent =
      "data:text/csv;charset=utf-8," +
      histogramData.labels.join(",") +
      "\n" +
      histogramData.datasets[0].data.join(",");

    const encodedURI = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedURI);
    link.setAttribute("download", "histogram.csv");
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="main">
      <h1>TERRIBLY TINY TALES ASSIGNMENT</h1>
      <button
        onClick={fetchData}
        style={{
          display: show ? "block" : "none",
        }}
      >
        Submit
      </button>
      {histogramData && (
        <div className="chart">
          <Bar data={histogramData} options={options} />
          <button onClick={exportCSV} disabled={!histogramData}>
            Export
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
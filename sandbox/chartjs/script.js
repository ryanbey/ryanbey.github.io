let ctx = document.getElementById('myChart');  // Canvas element

let irating = [4800, 4800, 4860, 4931, 5001, 5072, 5090, 5207, 5173];
let weekNum = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5',
               'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10',
               'Week 11', 'Week 12'];

let myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: weekNum,
        datasets: [{
            label: '2022 Season 1 iRating',
            data: irating,
            backgroundColor: "rgba(255, 0, 0, 0.3)",
            borderColor: "rgba(255, 0, 0, 0.5)",
            borderWidth: 3,
            // lineTension: 0  // Removes line curvature
        }]
    },
    options: {
        // Allows control over width and height if not using CSS
        maintainAspectRatio: false, 
        responsive: false,

        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "black",
                    suggestedMin: 4600,
                    suggestedMax: 5000
                },
                gridLines: {
                    color: "#e8e8e8"
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: "black"
                },
                gridLines: {
                    display: false
                }
            }]
        },

        legend: {
            labels: {
                fontColor: 'black'
            }
        }
    }
});
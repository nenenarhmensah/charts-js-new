var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Highway/Road/Alley/Street/Sidewalk', 'Restaurant', 'Parking/Drop Lot/Garage', 'School - College/University', 'Church'],
        datasets: [{
            label: 'Number of reported crimes',
            data: [11, 9, 8, 2, 2],
            backgroundColor: [
                '#9400D3'
            ]
        },
    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Number of Reported Hate Crimes in Maryland by Location',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'The top five most common places where reported hate crimes took place in Maryland in 2020.'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
    },
});

//Line Chart

var ctx = document.getElementById('myChartLine').getContext('2d');
var myChartLine = new Chart(ctx, {
    type: 'line',

    data: {
        labels: ['2011', '2012', '2013', '2014', '2015','2016','2017','2018','2019','2020'],
        datasets: [
        {
            label: 'Number of Reported Hate Crimes',
            data: [49, 35, 51, 16, 41, 39, 102, 48, 19, 40],
            fill: false,
            borderColor: 'rgba(255, 165, 0)',
            backgroundColor: 'rgba(255, 165, 0)',
            tension: 0.1}
        ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Number of Reported Hate Crimes in Maryland by Year',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'Maryland had a disproportionately high number of hate crimes in 2017.'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
            }
        },
    },
});

//Polar Chart
var ctx = document.getElementById('myChartPolar').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'polarArea',
          data: {
            labels: [
              'Destruction/Damage/Vandalism',
              'Simple Assault',
              'Robbery',
              'Intimidation',
              'Aggravated Assault'
            ],
            datasets: [{
              label: 'My First Dataset',
              data: [3, 3, 21, 7, 6],
              backgroundColor: [
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(201, 203, 207)',
                
              ]
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Number of Reported Hate Crimes by Type in 2020'
              }
            }
          }
        });
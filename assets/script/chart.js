// django
var django_value = {
    series: [67],
    chart: {
      height: 350,
      type: 'radialBar',
      offsetY: -10,
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          name: {
            fontSize: '16px',
            color: undefined,
            offsetY: 120
          },
          value: {
            offsetY: 76,
            fontSize: '22px',
            color: undefined,
            formatter: function (val) {
              return val + "%";
            }
          }
        },
        track: {
          background: '#f2f2f2', // Optional: Track background color
          strokeWidth: '97%',
          margin: 5, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            blur: 4,
            opacity: 0.15
          }
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91],
        colorStops: [
          {
            offset: 0,
            color: "#00E396",
            opacity: 1
          },
          {
            offset: 50,
            color: "#FEB019",
            opacity: 1
          },
          {
            offset: 100,
            color: "#FF4560",
            opacity: 1
          }
        ]
      }
    },
    stroke: {
      dashArray: 4,
      colors: ['#00E396'], // Stroke color for the gauge
    },
    labels: ['Django'],
  };
  
  var chart = new ApexCharts(document.querySelector("#django"), django_value);
  chart.render();
  

// html
var html_value = {
    series: [67],
    chart: {
      height: 350,
      type: 'radialBar',
      offsetY: -10,
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          name: {
            fontSize: '16px',
            color: undefined,
            offsetY: 120
          },
          value: {
            offsetY: 76,
            fontSize: '22px',
            color: undefined,
            formatter: function (val) {
              return val + "%";
            }
          }
        },
        track: {
          background: '#f2f2f2', // Optional: Track background color
          strokeWidth: '97%',
          margin: 5, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            blur: 4,
            opacity: 0.15
          }
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91],
        colorStops: [
          {
            offset: 0,
            color: "blue",
            opacity: 1
          },
          {
            offset: 50,
            color: "red",
            opacity: 1
          },
          {
            offset: 100,
            color: "green",
            opacity: 1
          }
        ]
      }
    },
    stroke: {
      dashArray: 4,
      colors: ['#00E396'], // Stroke color for the gauge
    },
    labels: ['Html & Css'],
  };
  
  var chart = new ApexCharts(document.querySelector("#html"), html_value);
  chart.render();
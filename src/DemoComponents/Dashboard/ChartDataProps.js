import Chartjs from 'chart.js'

export const barChartData={
    labels: ['Frucor', 'PacificHydro', 'Mayfair', ' NSW RMS', 'Macquarie Generation'],
    datasets: [{
        label: 'Clients',
        type:'line',
        data:[80, 92, 92.5, 97, 97.5],
        fill: false,
        borderColor: 'grey',
        yAxisID: 'y-axis-2'
      },{
        type: 'bar',
        label: 'Contract Period',
        data: [120, 132, 137, 137, 137, ],
        fill: false,
        backgroundColor: '#7BFC03',
        yAxisID: 'y-axis-1'
      }]
  }

  export const barChartOptions = {
    responsive: true,
    tooltips: {
      mode: 'label'
    },
    title:{
        display:true,
        text:'Clients',
        fontSize:25
    },
    elements: {
        line: {
          fill: false,
          tension:0,
        }
      },
      scales: {
        xAxes: [
          {
           
            barThickness: 30,  // number (pixels) or 'flex'
            maxBarThickness: 30, // number (pixels)
            ticks:{
                beginAtZero:true
            },
            display: true,
            gridLines: {
              display: false
            },
            scaleLabel: {
              display: true,
              labelString: 'Clients'
            }
          }
        ],
        yAxes: [
          {
            ticks:{
                min: 0,
                max: 160,
                beginAtZero:true
            },
            title:{
                display:true,
                text:'Client',
                fontSize:25
            },
            scaleLabel: {
              display: true,
              labelString: 'Revenue'
            },
            type: 'linear',
            display: true,
            position: 'left',
            id: 'y-axis-1',
            gridLines: {
              display: true
            },
            labels: {
                show: true
              }
          },
          {
            ticks:{
                beginAtZero:true,
                min: 0,
                max: 120
            },
            scaleLabel: {
              display: true,
              labelString: 'Clients'
            },
            type: 'linear',
            display: true,
            position: 'right',
            id: 'y-axis-2',
            gridLines: {
              display: false
            },
            labels: {
              show: true
            }
          }
        ]
        }
    }
export const doughnutData = {
    labels: ['Ain Al Khaleej Hospital Achieves HIMSS ', 
    'Automotive ‘Next Generation’ Operations with Oracle and DXC', 
    'Drives Business Decisions and Optimization of this Oil and Gas Firm ', 
    'Oracle R12 EBS Application',
    'Student Information System for Oracle’s PeopleSoft Campus Solutions'],
    datasets: [
        {
            label: "Projects",
            data: [20, 10, 30, 15, 25],
            fill: false,
            backgroundColor: [
                "#7BFC03",
                "#fcf003",
                "#03d3fc",
                "#000000",
                "#e00909"
            ]
        }
    ]
}
export const doughnutOptions = {
    pieceLabel: {
        render: 'label',
        arc: true,
        fontColor: '#000',
        position: 'outside'
    },
    legend: {
        position: 'right'
    },
    title:{
        display:true,
        text:'Projects in DTC',
        //fontSize:25
    },
    events: false,
    animation: {
        duration: 500,
        easing: "easeOutQuart",
        onComplete: function () {
            let ctx = this.chart.ctx;
            ctx.font = Chartjs.helpers.fontString(Chartjs.defaults.global.defaultFontFamily, 'normal', Chartjs.defaults.global.defaultFontFamily);
           
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';
            
            this.data.datasets.forEach(function (dataset) {
                for (let i = 0; i < dataset.data.length; i++) {
                    let model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
                        total = dataset._meta[Object.keys(dataset._meta)[0]].total,
                        mid_radius = model.innerRadius + (model.outerRadius - model.innerRadius) / 2,
                        start_angle = model.startAngle,
                        end_angle = model.endAngle,
                        mid_angle = start_angle + (end_angle - start_angle) / 2;
                    let x = mid_radius * Math.cos(mid_angle);
                    let y = mid_radius * Math.sin(mid_angle);
                    ctx.fillStyle = '#fff';
                    if (i === 3) {
                        ctx.fillStyle = '#444';
                    }
                    let percent = String(Math.round(dataset.data[i] / total * 100)) + "%";
                    
                    if (dataset.data[i] !== 0) {
                        ctx.fillText(dataset.data[i], model.x + x, model.y + y);
                        
                        ctx.fillText(percent, model.x + x, model.y + y + 15);
                    }
                }
            });
        }
    }
}

export const polarData = {
    labels: ['Frucor', 'PacificHydro', 'Mayfair', ' NSW RMS', 'Macquarie Generation'],
    datasets: [{
        label: 'Revenue Earned',
        //type: 'polar',
        data: [20,
            25,
            15,
            14,
            16],
        backgroundColor: [
            '#FF6384',
            '#4BC0C0',
            '#FFCE56',
            '#E7E9ED',
            '#36A2EB'
          ],
    }]
}
export const polarOptions = {
    responsive: true,
    tooltips: {
        mode: 'label'
    },
    title: {
        display: true,
        text: 'Clients',
        fontSize: 25
    },
    legend:{
        position:'right'
    }
    
}
export const radarData =  {
    labels: ['React Js', 'Viu', 'Angular', 'Type Script', 'Node Js','Meteor','BackBone JS'],
    datasets: [{
        label: 'Technologies',
        type: 'radar',
        data: [65, 59, 90, 81, 56, 55, 40],
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,1)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
    }, {
        type: 'radar',
        label: 'Human Resources',
        data: [28, 48, 40, 19, 96, 27, 100],
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        pointBackgroundColor: 'rgba(255,99,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,1)',
        // yAxisID: 'y-axis-1'
    }]
}
export const radarOptions = {
    responsive: true,
    tooltips: {
        mode: 'label'
    },
    title: {
        display: true,
        text: 'Technology Trends',
        fontSize: 25
    },
    
    
}
export const horizontalBarData = {
    labels: ['Cushman-WakeField', 'Apollo 24/7', 'DXC Portfolio', 'HPE Portal', 'Maruthi Speech Voice UI', 'BMW Dashboard UI Application'],
    datasets: [{
        label: 'Execution Estimation',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
    }]
}

export const horizontalBarOptions = {
    responsive: true,
    tooltips: {
        mode: 'label'
    },
    title: {
        display: true,
        text: 'Pipeline Project',
        fontSize: 25
    }
}
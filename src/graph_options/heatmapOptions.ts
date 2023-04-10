export const heatmapOption = {
    chart:{toolbar:{show:false},selection:{enabled:false}},legend:{show:false},
    xaxis:{labels:{show:false},tooltip:{enabled:false},axisTicks:{show:false},position:"front"},
    yaxis:{labels:{show:false},showAlways:false,tooltip:{enabled:false}},
    tooltip:{x:{show:false},y:{title:{formatter:(tr:string)=>{return `${tr}`}}}},
    dataLabels:{enabled:false},
    plotOptions:{heatmap:{enableShades:false,radius:5,
     colorScale:{
 ranges:[
 {from:0,to:0,color:"rgb(235, 235, 235)"},
 {from:1,to:2,color:"rgb(163, 254, 153)"},
 {from:3,to:4,color:"rgb(130, 225, 119)"},
 {from:5,to:6,color:"rgb(41, 179, 82)"},
 {from:7,to:8,color:"rgb(33, 132, 62)"},
 {from:9,to:100000000,color:"rgb(21, 83, 40)"}   
 ]
    }}}
 }
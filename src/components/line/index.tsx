import * as echarts from "echarts";
import React, { useEffect, useRef } from "react";
import getMobile from 'is-mobile';
import {time_frame,seriesData} from './data';

type EChartsOption = echarts.EChartsOption;

const isMobile = getMobile()
const toPercentage = (value: number) => value.toFixed(1) + "%";
const color = ["#35D4FF", "#8E35FF", "#29CC96", "#4369FF", "#FFD53F", "#DD4E4E"]
const textStyle = {
    fontSize: isMobile?"10px":"14px",
    color: "#666",
    fontFamily: "Archivo Black"
}

//const xAxis = ['2022/08/01','2023/01/01','2030/01/01'];
const xAxis =time_frame;

const smooth = 0

const Line = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    var myChart = echarts.init(containerRef.current);
    var option: EChartsOption = {
      textStyle,
      color,
      dataZoom: {
        moveOnMouseWheel: false,
        show: false,
        preventDefaultMouseMove: true,
      },
      tooltip: {
        trigger: "axis",
        confine: true,
        textStyle: {
          fontSize: 14,
        },
        axisPointer: {
          type: "cross",
          label: {
            backgroundColor: "#6a7985",
          },
        },
        valueFormatter: (v) => {
          const value = v as unknown as number;
          return toPercentage(value);
        },
      },
      legend: { 
        data: ["Private Sale","Ecosystem","Advisors","Exchange","Team","Talk to earn"],
        padding: [0, 10, 0, 10],
        bottom: 4,
        itemGap:isMobile?10:8,
      },
      grid: {
        top: 10,
        left: 20,
        right: 40,
        bottom: isMobile?80:60,
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          boundaryGap: false,
          data: xAxis,
        },
      ],
      yAxis: [
        {
          type: "value",
          axisLabel: {
            formatter: (value: number) => parseInt(value.toString()) + "%",
          },
          splitLine:{
            lineStyle:{
              color:'#666'
            }
          }
        },
      ],
      series: [
        {
          name: "Private Sale",
          symbol: "none",
          type: "line",
          silent: true,
          stack: "Total",
          smooth: smooth,
          areaStyle: {
            opacity: 1,
          },
          emphasis: {
            focus: "series",
          },
          data: seriesData['Private Sale'],
        },
        {
          name: "Ecosystem",
          symbol: "none",
          type: "line",
          silent: true,
          stack: "Total",
          smooth: smooth,
          areaStyle: {
            opacity: 1,
          },
          emphasis: {
            focus: "series",
          },
          data: seriesData['Ecosystem'],
        },
        {
            name: "Advisors",
            symbol: "none",
            type: "line",
            silent: true,
            stack: "Total",
            smooth: smooth,
            areaStyle: {
              opacity: 1,
            },
            emphasis: {
              focus: "series",
            },
            data: seriesData['Advisors'],
          },
        {
            name: "Team",
            symbol: "none",
            type: "line",
            silent: true,
            stack: "Total",
            smooth: smooth,
            areaStyle: {
              opacity: 1,
            },
            emphasis: {
              focus: "series",
            },
            data: seriesData['Team'],
          },
        {
            name: "Exchange",
            symbol: "none",
            type: "line",
            silent: true,
            stack: "Total",
            smooth: smooth,
            areaStyle: {
              opacity: 1,
            },
            emphasis: {
              focus: "series",
            },
            data: seriesData['Exchange'],
          },
        
        {
          name: "Talk to earn",
          symbol: "none",
          type: "line",
          silent: true,
          stack: "Total",
          smooth: smooth,
          areaStyle: {
            opacity: 1,
          },
          emphasis: {
            focus: "series",
          },
          data: seriesData['Talk to earn'],
        },
      ],
    };

    myChart.setOption(option);

    const onResize = () => {
      myChart && myChart.resize();
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [containerRef]);

  return <div ref={containerRef} />;
};


export default Line;
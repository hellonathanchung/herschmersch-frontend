import React, { useRef } from "react";
import ReactFrappeChart from "react-frappe-charts";
import moment from 'moment'

export default function MyChart(props) {
  console.log("Hey Kevin", props.readableXValues)

  return (
    <ReactFrappeChart
      type="line"
      colors={["#21ba45"]}
      axisOptions={{ xAxisMode: "tick", yAxisMode: "tick", xIsSeries: 1 }}
      height={250}
      data={{
        labels: props.readableXValues,
        datasets: [{ values: props.yValues }],
      }}
    />
  );
}
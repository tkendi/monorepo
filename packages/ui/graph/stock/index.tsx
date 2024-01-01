import {
  IgrFinancialChart,
  IgrFinancialChartModule,
} from "igniteui-react-charts";
import React from "react";

import useGenerateStockGraphData from "../../hooks/useGenerateStockGraphData";

import { Props } from "./types";

IgrFinancialChartModule.register();

const StockChartGraph = ({ data, chartTitle, subTitle }: Props) => {
  const { handleGenerateStockData } = useGenerateStockGraphData();

  const stockGraphDataList = handleGenerateStockData(data);

  return (
    <IgrFinancialChart
      width="100%"
      height="100%"
      isToolbarVisible={false}
      chartType="Candle"
      chartTitle={chartTitle}
      titleAlignment="Left"
      titleLeftMargin="25"
      titleTopMargin="10"
      titleBottomMargin="10"
      subtitle={subTitle}
      subtitleAlignment="Left"
      subtitleLeftMargin="25"
      subtitleTopMargin="5"
      subtitleBottomMargin="10"
      yAxisLabelLocation="OutsideLeft"
      yAxisMode="Numeric"
      yAxisTitle="Financial Prices"
      yAxisTitleLeftMargin="10"
      yAxisTitleRightMargin="5"
      yAxisLabelLeftMargin="0"
      zoomSliderType="None"
      dataSource={stockGraphDataList}
    />
  );
};

export default StockChartGraph;

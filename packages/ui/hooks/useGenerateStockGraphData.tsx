import { StcokGraphProps } from "../graph/stock/types/index";

/**
 *
 * @param {any[]} originDataList  any arry incoming
 *
 * @return {T} this result is changed graph data
 */

type graphDataListType = StcokGraphProps[];

const useGenerateStockGraphData = () => {
  const handleGenerateStockData = <T extends graphDataListType>(
    originDataList: any[],
  ): T => {
    if (!originDataList) return [] as unknown as T;
    originDataList = [...originDataList].reverse();
    const graphDataList = [] as unknown as T;

    originDataList.forEach(item => {
      const baseDate = item.basDt;
      const year = baseDate.slice(0, 4);
      const month = baseDate.slice(4, 6) - 1;
      const day = baseDate.slice(6);
      graphDataList.push({
        Date: new Date(year, month, day),
        Open: Number(item.mkp),
        High: Number(item.hipr),
        Low: Number(item.lopr),
        Close: Number(item.clpr),
        Volumne: Number(item.mrktTotAmt),
      });
    });

    return graphDataList;
  };

  return { handleGenerateStockData };
};

export default useGenerateStockGraphData;

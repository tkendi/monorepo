import { LineGraphProps } from "../graph/line/types/index.d";

/**
 *
 * @param {any[]} originDataList  any arry incoming
 *
 * @return {T} this result is changed graph data
 */

type graphDataListType = LineGraphProps["graphData"];

const useChangeLineGraphData = () => {
  const handleChangeGraphData = <T extends graphDataListType>(
    originDataList: any[],
  ): T => {
    if (!originDataList) return [] as unknown as T;
    originDataList = [...originDataList].reverse();
    const graphDataList = [
      {
        id: originDataList.at(0)?.itmsNm,
        color: "hsl(134, 70%, 50%)",
        data: [],
      },
    ] as unknown as T;

    originDataList.forEach(item => {
      graphDataList.at(0)?.data.push({
        x: item.basDt,
        y: item.mkp,
      });
    });

    return graphDataList;
  };

  return { handleChangeGraphData };
};

export default useChangeLineGraphData;

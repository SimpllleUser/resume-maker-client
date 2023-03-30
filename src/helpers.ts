import { assign } from "lodash";

const swapOrderByKeys = (list: any, fisrtIndex: string | number, secondIndex: string | number): any => {
	return assign(list, { [fisrtIndex]: list[secondIndex], [secondIndex]: list[fisrtIndex] });
};

export default swapOrderByKeys;
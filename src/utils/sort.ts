import _ from "lodash";

const sortedOderValue = (list: any[], orderName: string, orders: boolean) => {
  const ordersValue = orders ? "asc" : "desc";
  return _(list)?.orderBy(orderName, ordersValue).value();
};

export const SortUtil = { sortedOderValue };

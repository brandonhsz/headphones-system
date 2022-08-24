import { IDataInterface } from "../interfaces/dataInterface";

export const fetchData = async (url: string): Promise<IDataInterface[]> => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
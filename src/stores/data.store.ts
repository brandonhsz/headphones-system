import create from "zustand";
import { IDataInterface } from "../interfaces/dataInterface"

interface IDataStore {
  data: IDataInterface[]
  dataFiltered: IDataInterface[]
  filter: string

  setFilter: (filter: string) => void
  dataFilter: () => void
  fetch: () => void
}

export const useDataStore = create<IDataStore>((set) => ({
  data: [],
  dataFiltered: [],
  filter: '',

  setFilter: (filter: string) => set((state) => {
    state.dataFilter();
    return ({
      filter: filter
    })
  }),

  fetch: async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    set(state => ({ data, dataFiltered: data }));
  },

  dataFilter: () => set(state => ({
    dataFiltered: state.data.filter((item: any) =>
      item.name.toLowerCase().includes(state.filter.toLowerCase())
    )
  }))
}));
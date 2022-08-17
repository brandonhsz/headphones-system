import create from "zustand";
import { IDataInterface } from "../interfaces/dataInterface"

interface IDataStore {
  dataActive: IDataInterface[]
  dataInactive: IDataInterface[]
  dataFiltered: IDataInterface[]
  filter: string

  setFilter: (filter: string) => void
  dataFilter: () => void
  fetch: () => void
}

export const useDataStore = create<IDataStore>((set) => ({
  dataActive: [],
  dataInactive: [],
  dataFiltered: [],
  filter: '',

  setFilter: (filter: string) => set((state) => {
    console.log(`setFilter: ${filter}`)
    state.dataFilter();
    return ({
      filter: filter
    })
  }),

  fetch: async () => {
    const response = await fetch(import.meta.env.VITE_BACK);
    const data = await response.json();
    const active = data.filter((item: any) => item.status);
    data.map((item: any) => {
      console.log(typeof item.status);
    })
    set(state => ({
      dataActive: active,
      dataInactive: active,
      dataFiltered: data
    }));
  },

  dataFilter: () => set(state => ({
    dataFiltered: state.dataActive.filter((item: any) =>
      item.name.toLowerCase().includes(state.filter.toLowerCase()) ||
      item.employeeId.toLowerCase().includes(state.filter.toLowerCase()) ||
      item.headPhone.serialNumber.toLowerCase().includes(state.filter.toLowerCase())
    )
  }))
}));
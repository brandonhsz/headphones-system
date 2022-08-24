import create from "zustand";
import { IDataInterface } from "../interfaces/dataInterface"

interface IDataStore {
  dataActive: IDataInterface[]
  dataInactive: IDataInterface[]
  dataFilteredActive: IDataInterface[]
  dataFilteredInactive: IDataInterface[]
  filter: string

  setFilter: (filter: string) => void
  dataFilter: () => void
  fetch: () => void
}

export const useDataStore = create<IDataStore>((set) => ({
  dataActive: [],
  dataInactive: [],
  dataFilteredActive: [],
  dataFilteredInactive: [],
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
    const inactive = data.filter((item: any) => !item.status);
    data.map((item: any) => {
      console.log(typeof item.status);
    })
    set(state => ({
      dataActive: active,
      dataInactive: inactive,
      dataFilteredActive: active,
      dataFilteredInactive: inactive
    }));
  },

  dataFilter: () => set(state => ({
    dataFilteredActive: state.dataActive.filter((item: any) =>
      item.name.toLowerCase().includes(state.filter.toLowerCase()) ||
      item.employeeId.toLowerCase().includes(state.filter.toLowerCase()) ||
      item.headPhone.serialNumber.toLowerCase().includes(state.filter.toLowerCase())
    ),
    dataFilteredInactive: state.dataInactive.filter((item: any) =>
      item.name.toLowerCase().includes(state.filter.toLowerCase()) ||
      item.employeeId.toLowerCase().includes(state.filter.toLowerCase()) ||
      item.headPhone.serialNumber.toLowerCase().includes(state.filter.toLowerCase())
    )
  }))
}));
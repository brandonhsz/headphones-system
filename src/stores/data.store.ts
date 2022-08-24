import create from "zustand";
import { IDataInterface } from "../interfaces/dataInterface"
import { IUser } from "../interfaces/userinterface";
import { fetchData } from "../libs/fetching";

interface IDataStore {
  data: IDataInterface[];
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
  data: [],
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
    const data = await fetchData(import.meta.env.VITE_BACK);
    const active = data.filter((item: IUser) => item.status);
    const inactive = data.filter((item: IUser) => !item.status);

    set(state => ({
      dataActive: active,
      dataInactive: inactive,
      dataFilteredActive: active,
      dataFilteredInactive: inactive,
      data: data
    }));
  },

  dataFilter: () => set(state => ({
    dataFilteredActive: state.dataActive.filter((item: IUser) =>
      item.name.toLowerCase().includes(state.filter.toLowerCase()) ||
      item.employeeId.toLowerCase().includes(state.filter.toLowerCase()) ||
      item.headPhone.serialNumber.toLowerCase().includes(state.filter.toLowerCase())
    ),
    dataFilteredInactive: state.dataInactive.filter((item: IUser) =>
      item.name.toLowerCase().includes(state.filter.toLowerCase()) ||
      item.employeeId.toLowerCase().includes(state.filter.toLowerCase()) ||
      item.headPhone.serialNumber.toLowerCase().includes(state.filter.toLowerCase())
    ),
  }))
}));
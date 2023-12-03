import {create} from "zustand"

interface ModelData{
    source?:any;
    destination?:any;
    Price?:string;
}

interface ModelStore{
    data:ModelData;
    onset:(data?:ModelData)=>void;
}

export const useModal = create<ModelStore>((set)=>({
   data:{},
   onset:(data)=>set({data})
}))
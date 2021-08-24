import { useContext,createContext } from "react"





const DataContext = createContext();



export const useUserData = ()=>{
    return useContext(DataContext)
}


async function getUserData(){
    // const {response} = await  axios.post(API_URL + "signup", {});
    };



export default function UserDataProvider({children}){





const value = {};

return <DataContext.Provider value={value}>
    {children}
</DataContext.Provider>

}




import { createContext, useState } from "react";
import Parant from "./Parant";

export const AssetContext = createContext('gold')
export const MoneyContext= createContext(0);
const Grand = () => {

const [money, setMoney]= useState(100);

    return (
    
        <div  className="m-2 p-2 border-4 border-yellow-400">
<h2 className="text-2xl font-extrabold">This is Grand</h2>
<p>net money :{money}</p>
<MoneyContext.Provider value={[money,setMoney]}>
    
<AssetContext.Provider value="gold">
            <Parant ></Parant>
            </AssetContext.Provider>
</MoneyContext.Provider>
        </div>
    );
};


export default Grand ;

/**
 * 1.Creat a context and export it
 * 2. Add provider for the context with a any value 
 * 3. use context useContext api
 */

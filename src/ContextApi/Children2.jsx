import { useContext } from "react";
import { MoneyContext } from "./Grand";


const Children2 = () => {
const [money,setMoney]= useContext(MoneyContext)
    return (
        <div className="m-2 p-2 border-4 border-yellow-400">
            <h2>this is children 2</h2>
            <p>Money : {money}</p>
            <button onClick={()=>{setMoney(money+100)}} className="p-1 
            border-green-600">Money Receive</button>
            
        </div>
    );
};

export default Children2;
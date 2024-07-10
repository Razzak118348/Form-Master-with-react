import { useContext } from "react";
import Children2 from "./Children2";
import { AssetContext } from "./Grand";


const Children1 = () => {
    const asset= useContext(AssetContext)
    return (
        <div className=" m-2 p-2 border-4 border-yellow-400">
            <h2>This is Children 1</h2>
            <p>he has : {asset}</p>
            <Children2></Children2>
        </div>
    );
};

export default Children1;
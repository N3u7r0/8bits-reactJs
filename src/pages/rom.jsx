import { ItemDetailContainer } from "../components";
import {useRomsByID} from "../Hooks";

export const rom = () =>{
    const {rom} = useRomsByID();
    return(
        <ItemDetailContainer rom={rom}/>
    )
};
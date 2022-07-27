import { WorkoutsContext } from "../context/workoutContext";
import { useContext } from "react";



export const useWorkoutsContext = () => {
    const context=useContext(WorkoutsContext)
    
    if(!context){
        throw Error('useWorkouts context must be used inside an workout')
    }
    
    
    return context
}

import { useReducer } from "react"

// useReducer(REDUCER,intial)

const initial = 0;
export const reducer= (state=initial,action)=>{

    switch(action.type)
    {
        case "inc":
          return state+1

          case "dec":
            return state-1

           default:
                return state
    }

}
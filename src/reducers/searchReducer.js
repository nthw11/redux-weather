import { FETCH_FIVE_DAY } from "../actions"
import generateId from '../components/generateId'

const DEFAULT_STATE = {
  forecastObj: {
    id: generateId(),
    name: "",
    temp: [],
    humidity: [],
    pressure: []
  }
 
}

const searchReducer = function(state = DEFAULT_STATE, action){

  switch (action.type) {
    case FETCH_FIVE_DAY:
      if(action.payload.data){

        const fiveDayData = action.payload.data || state.forecastObj
        const id = generateId()
        const tempObj = []
        const humidObj = []
        const pressureObj = []
        fiveDayData.list.forEach(element => {
          tempObj.push(element.main.temp)
          humidObj.push(element.main.humidity)
          pressureObj.push(element.main.pressure)
        });
        
        const newObj = {
          forecastObj: {
            id:id,
            name: fiveDayData.city.name,
            temp: tempObj,
            humidity: humidObj,
            pressure: pressureObj
          }}
          console.log(newObj)
          return {...state.forecastObj, ...newObj};
        } else {
          return state
        }

      default:
        return state
      }
}


export default searchReducer

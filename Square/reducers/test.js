export default function test(state = {},action = {}){
  switch(action.type){
    case "test":
      return{
        ...state,
        test:'test'
      }
    default:
      return state;
  }
}
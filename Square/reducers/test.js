export default function test(state = {},action = {}){
  console.log(action);
  switch(action.type){
    case "watever":
      return{
        ...state,
        user:{
          ...state.user,
          state:'nok'
        }
      }
    default:
      return state;
  }
}
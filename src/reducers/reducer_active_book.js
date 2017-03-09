// state argument is not application state , only the state is the responsible for that
export default function(state = null ,action){

  switch(action.type){
     case 'BOOK_SELECTED':
       return action.payload;
  }
  return state;
}

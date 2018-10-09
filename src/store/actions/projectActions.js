export const createProject = (project) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    // make async request
    dispatch({type: 'CREATE_PROJECT', project})
  }  
}

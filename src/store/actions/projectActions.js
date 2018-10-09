export const createProject = (project) => {
  return (dispatch, getState) => {
    // make async request
    dispatch({type: 'CREATE_PROJECT', project})
  }  
}

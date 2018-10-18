export const createProject = (project) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async request
    const firestore = getFirestore()
    const profile = getState().firebase.profile
    const authorId = getState().firebase.auth.uid
    
    try {

      await firestore.collection('projects').add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId,
        createdAt: new Date()
      })

      dispatch({ type: 'CREATE_PROJECT', project })

    } catch (err) {
      dispatch({ type: 'CREATE_PROJECT_ERROR', err })
    }
  }
}

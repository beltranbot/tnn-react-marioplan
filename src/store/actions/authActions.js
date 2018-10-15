export const signIn = (credentials) => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    try {
      await firebase.auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password
      )
      dispatch({ type: 'LOGIN_SUCCESS' })
    } catch (err) {
      dispatch({ type: 'LOGIN_ERROR', err })
    }
  }
}

export const signOut = () => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    try {
      await firebase.auth().signOut()

      dispatch({ type: 'SIGNOUT_SUCCESS' })
    } catch (error) {

    }
  }
}

export const signUp = (newUser) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase()
    const firestore = getFirestore()

    try {
      let response = await firebase.auth().createUserWithEmailAndPassword(
        newUser.email,
        newUser.password
      )

      await firestore.collection('users').doc(response.user.uid).set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        initials: newUser.firstName[0].toUpperCase() + newUser.lastName[0].toUpperCase()
      })

      dispatch({ type: 'SIGNUP_SUCCESS' })
    } catch (error) {
      console.log('error', error)
      dispatch({type:'SIGNUP_ERROR', error})
    }


  }
}

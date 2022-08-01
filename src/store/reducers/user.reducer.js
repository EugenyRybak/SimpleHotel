export const initialState = {
  isUser: false,
}

export const IS_USER = 'IS_USER'

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_USER:
      return {
        ...state,
        isUser: action.payload
      }

    default:
      return state;
  }
}

export const setUser = (payload) => ({type: IS_USER, payload}) 

export default userReducer;

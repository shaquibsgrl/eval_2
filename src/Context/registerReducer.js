// write reducer for the registartion reducer

export const initState = {
    isRegister: false,
  };
  export const registerReducer = (state, action) => {
    switch (action.type) {
      case "REGISTRATION_SUCESS": {
        return {
          ...state,
          isRegister: true,
        };
      }
      default: {
        return state;
      }
    }
  };
  
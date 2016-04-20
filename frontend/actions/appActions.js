const appActionTypes = {
  INIT: 'INIT'
}

export const init = _ => {
        return {
          type: appActionTypes.INIT,
          state: {
            init: true
          }
        }
};

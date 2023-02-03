const catActionsTypes = {
    ADD: 'ADD',
    DELETE_BY_ID: 'DELETE_BY_ID'
}

const catActions = {
    ADD: (cat) => ({type: catActionsTypes.ADD, payload: cat}),
    DELETE_BY_ID: (id) => ({type: catActionsTypes.DELETE_BY_ID, payload: id})
}

const initialCat = () => []

const myCatReducer = (state, action) => {
  switch (action.type) {
      case catActionsTypes.ADD:
          const slice = state.slice(-1);
          const id = slice.length ? slice[0].id + 1 : 1;
          return [...state, {id, name: action.payload}]
      case catActionsTypes.DELETE_BY_ID:
          const index = state.findIndex(value => value.id === action.payload);
          state.slice(index, 1)
          return [...state]
      default:
          return [...state]

  }
}
export {catActions, initialCat, myCatReducer}
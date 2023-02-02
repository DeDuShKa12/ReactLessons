const dogActionsTypes = {
    ADD: 'ADD',
    DELETE_BY_ID: 'DELETE_BY_ID'
}

const dogActions = {
    ADD: (dog) => ({type: dogActionsTypes.ADD, payload: dog}),
    DELETE_BY_ID: (id) => ({type: dogActionsTypes.DELETE_BY_ID, payload: id})
}

const initialDog = () => [];


const myDogReducer = (state, action) => {

    switch (action.type) {
        case dogActionsTypes.ADD:
            const slice = state.slice(-1);
            const id = slice.length ? slice[0].id + 1 : 0;
            return [...state, {id, ...action.payload}]

        case dogActionsTypes.DELETE_BY_ID:
            const index = state.findIndex(value => value.id === action.payload);
            state.slice(index, 1)
            return [...state]


    }

}

export {
    dogActions, myDogReducer, initialDog
}
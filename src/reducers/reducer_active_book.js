//all reducers get two arguments: the current state and the action
export default function (state = null, action) { //state corresponds to only the state that this reducers is responsible for. No the Application state.
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload
    }
    return state
}

//(state = null,... : If the argument comes in undefined, set it to null
const counterReducer = (state, action) => {
    switch (action) {
        case 'INCREMENT':
            return state + 1
        default-case:
            return state
    }
}

export default counterReducer;

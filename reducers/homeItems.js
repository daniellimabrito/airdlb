const homeItems = (state = [], action) => {

    switch (action.type) {
        case 'ADD_TO_HOME':
            return [...state, action.payload]     
        case 'REMOVE_FROM_HOME':
            //console.log(action.payload);
           return state.filter(homeItems => homeItems.id !== action.payload.id)
        case 'SELECT_FROM_HOME':
        default:
            break;
    }

    return state
}

export default  homeItems;
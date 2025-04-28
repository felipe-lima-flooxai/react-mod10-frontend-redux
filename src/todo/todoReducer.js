const INITIAL_STATE = {
    description: "Ler livro",
    list: [
        {
            _id: 1,
            description: "Pagar fatura do cart",
            done: true
        },
        {
            _id: 2,
            description: "Reuniao as 10",
            done: false
        },
        {
            _id: 3,
            description: "Consulta Medica",
            done: false
        },
    ]
}


export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "DESCRIPTION_CHANGED":
            return {...state, description: action.payload}
        case "TODO_SEARCHED":
            return {...state, list: action.payload.data}
        default: 
            return state
    }
}
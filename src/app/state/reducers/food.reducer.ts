import { FoodModel } from "../../models/food.model"


export interface Action {
    type: string,
    payload?: any
}

export const ACTIONS = {
    ADD_FOOD: 'ADD_FOOD',
    REMOVE_FOOD: 'REMOVE_FOOD',
    GET_FOODS: 'GET_FOODS',
    GET_FOODS_SUCCESS: 'GET_FOODS_SUCCESS',
    GET_FOODS_FAILED: 'GET_FOODS_FAILED'
}


export interface MyAppState {
    foods: Array<FoodModel>
}

export function food_reducer(state: Array<FoodModel> = [], action: Action) {
    switch (action.type) {
        case ACTIONS.ADD_FOOD:
            return [...state, action.payload]
        case ACTIONS.REMOVE_FOOD:
            return state.filter(food => {
                return food.id != action.payload.id
            })
        case ACTIONS.GET_FOODS:
            console.log('Se ha lanzado la acción GET_FOODS')
            //var newState= state.length > 0 ? [...state, ...action.payload] : action.payload
            return state;
        case ACTIONS.GET_FOODS_SUCCESS:
            var newState= state.length > 0 ? [...state, ...action.payload] : action.payload
            return newState;
        default:
            return state;
    }
}
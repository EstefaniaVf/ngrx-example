import { ACTIONS, IFood, Action, food_reducer } from "./food.reducer"

describe('Food Reducer', () => {

    it('should add food to new state', () => {
        let initialState: Array<IFood> = [];

        let apple: IFood = {
            id: 0,
            name: "apple",
            description: "crunchy",
            color: "red",
            group: "fruit"
        }

        let addAction: Action = {
            type: ACTIONS.ADD_FOOD,
            payload: apple
        }

        let newState = food_reducer(initialState, addAction)

        expect(initialState.length).toBe(0);
        expect(newState.length).toBe(1);
        expect(newState[0].name).toContain("apple")
    })

    it('should remove a food', () => {
        let initialState: Array<IFood> = [];

        let apple: IFood = {
            id: 0,
            name: "apple",
            description: "crunchy",
            color: "red",
            group: "fruit"
        }

        let banana: IFood = {
            id: 1,
            name: "banana",
            description: "crunchy",
            color: "red",
            group: "fruit"
        }

        let firstState = food_reducer(initialState, {
            type: ACTIONS.ADD_FOOD,
            payload: apple
        })
        let secondState = food_reducer(firstState, {
            type: ACTIONS.ADD_FOOD,
            payload: banana
        })

        expect(initialState.length).toBe(0);
        expect(firstState.length).toBe(1);
        expect(secondState.length).toBe(2);

        let thirdState = food_reducer(secondState, {
            type: ACTIONS.REMOVE_FOOD,
            payload: {id:0}
        })

        expect(thirdState.length).toBe(1);
        console.log(initialState);
        console.log(firstState);
        console.log(secondState);
        console.log(thirdState);
    })

})
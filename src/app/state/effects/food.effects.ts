import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { Action } from '../../state/reducers/food.reducer';


@Injectable()
export class FoodEffects {
    url: string = 'http://localhost:3000/';

    getFood$ = createEffect(() =>
        this.actions$.pipe(
            ofType('GET_FOODS'),
            map((action: Action) => {
                switch (action.payload) {
                    case 'food':
                        this.url = this.url + 'foods-list';
                        break;
                    case 'drink':
                        this.url = this.url + 'drinks-list';
                        break;
                    default:
                        this.url = this.url + 'animals-list';
                        break;
                }
                console.log(this.url);
                return action;
            }),
            mergeMap(() =>
                this.http.get(this.url).pipe(
                    map(data => ({ type: 'GET_FOODS_SUCCESS', payload: data })),
                    catchError(() => of({ type: 'GET_FOODS_FAILED' }))
                )
            )
        )
    )

    constructor(
        private http: HttpClient,
        private actions$: Actions
    ) { }
}
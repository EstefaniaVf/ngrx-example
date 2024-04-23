import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Observable, catchError, map, mergeMap, of } from "rxjs";


@Injectable()
export class FoodEffects {

    getFood$ = createEffect(() =>
        this.actions$.pipe(
            ofType('GET_FOODS'),
            mergeMap(action =>
                this.http.get("http://localhost:3000/foods-list").pipe(
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
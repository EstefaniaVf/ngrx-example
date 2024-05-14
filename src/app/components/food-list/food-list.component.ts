import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MyAppState, Action, ACTIONS } from '../../state/reducers/food.reducer';
import { Store } from '@ngrx/store';
import { FoodModel } from '../../models/food.model';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.css'
})
export class FoodListComponent implements OnInit {
  @Input() itemTypeChild: string = '';
  foods$: Observable<Array<FoodModel>>

  constructor(private store: Store<MyAppState>) {
    this.foods$ = store.select('foods');
  }

  ngOnInit(): void {
    let getItems: Action = {
      type: ACTIONS.GET_FOODS,
      payload: this.itemTypeChild
    }

    this.store.dispatch(getItems);

  }

  deleteFood(food: FoodModel) {
    let deleteAction: Action = {
      type: ACTIONS.REMOVE_FOOD,
      payload: food
    }

    this.store.dispatch(deleteAction);

  }

}

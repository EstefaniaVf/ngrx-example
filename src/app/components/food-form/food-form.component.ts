import { Component, Input, OnInit } from '@angular/core';
import { ACTIONS, MyAppState, Action } from '../../state/reducers/food.reducer';
import { Store } from '@ngrx/store';
import { FormBuilder } from '@angular/forms';
import { FoodModel } from '../../models/food.model';

@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrl: './food-form.component.css'
})
export class FoodFormComponent implements OnInit {
  @Input() itemTypeChild: string = '';
  food!: FoodModel;
  foodForm;

  constructor(private store: Store<MyAppState>,
    private formBuilder: FormBuilder
  ) {
    this.foodForm = this.formBuilder.group({
      id: '',
      name: '',
      group: ''
    });
  }

  ngOnInit(): void {
   }

  addFood(food: any) {
    console.log(food);
    this.foodForm.reset();

    let addAction: Action = {
      type: ACTIONS.ADD_FOOD,
      payload: Object.assign({}, food)
    }

    this.store.dispatch(addAction);
  }

}

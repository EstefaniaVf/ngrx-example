import { Component, OnInit } from '@angular/core';
import { ACTIONS, IFood, MyAppState, Action } from '../food.reducer';
import { Store } from '@ngrx/store';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrl: './food-form.component.css'
})
export class FoodFormComponent implements OnInit {
  food!: IFood;
  foodForm;

  constructor(private store: Store<MyAppState>,
    private formBuilder: FormBuilder
  ) {
    this.foodForm = this.formBuilder.group({
      id: '',
      name: '',
      description: '',
      color: '',
      group: ''
    });
  }

  ngOnInit(): void {
   }

  addFood(food: any) {
    console.log(food);

    let addAction: Action = {
      type: ACTIONS.ADD_FOOD,
      payload: Object.assign({}, food)
    }

    this.store.dispatch(addAction);
  }

}

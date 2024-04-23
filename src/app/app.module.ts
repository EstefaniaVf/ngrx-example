import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { food_reducer } from './food/food.reducer';
import { EffectsModule } from '@ngrx/effects';
import { FoodEffects } from './food/food.effects';
import { CommonModule } from '@angular/common';
import { FoodComponent } from './food/food.component';
import { FoodFormComponent } from './food/food-form/food-form.component';
import { FoodListComponent } from './food/food-list/food-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        FoodFormComponent,
        FoodListComponent
    ],
    imports: [
        BrowserModule,
        StoreModule.forRoot({ foods: food_reducer }),
        StoreDevtoolsModule.instrument({ maxAge: 12 }),
        EffectsModule.forRoot([FoodEffects]),
        CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
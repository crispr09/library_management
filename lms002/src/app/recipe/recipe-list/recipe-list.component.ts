import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A Hot Recipe',
      'desc',
      'https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_960_720.jpg'
    ),
    new Recipe(
      'A Cold Recipe',
      'desc cold',
      'https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_960_720.jpg'
    ),
    new Recipe(
      'A New Cold Recipe',
      'desc new cold',
      'https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_960_720.jpg'
    ),
  ];
}

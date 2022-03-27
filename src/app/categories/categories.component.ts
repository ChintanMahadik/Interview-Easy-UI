import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { CategoryService } from './service';
import { Category } from './IE_Category';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  category_name: string;
  categories:Category[];
  constructor(public dialog: MatDialog, private categoryService: CategoryService) {
    this.category_name = '';
    this.categories=[];
  }

  ngOnInit(): void {
    this.viewCategory();
  }

  addCategoryForm() {
    const dialogRef = this.dialog.open(CategoryForm);
  }

  viewCategoryDetails() {
  }

  viewCategory() {
    console.log('Calling Categories viewing service');
    this.categoryService.viewCategories().subscribe((resp) => {
      if(resp.result=="Success")
      this.categories=resp.data;
    });
  }
}

@Component({
  selector: 'category_form',
  templateUrl: 'category_form.html',
})
export class CategoryForm {
  category_name: string;
  constructor(
    private router: Router,
    private categoryService: CategoryService,
    public dialogRef: MatDialogRef<CategoryForm>
  ) {
    this.category_name = '';
  }

  addCategory() {
    console.log('Calling Category insertion service');
    this.categoryService.addCategories(this.category_name).subscribe((resp) => {
      if (resp.result == 'Success') {
        alert(resp.result);
        this.dialogRef.close();
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['categories']);
      }); 

      } else {
        alert(resp.message);
      }
    });
  }

}

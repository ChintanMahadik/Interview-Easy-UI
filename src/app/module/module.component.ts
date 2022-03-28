import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ModuleService } from './service';
import { Module } from './Module';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss'],
})
export class ModuleComponent implements OnInit {
  categoryTitle: any;
  modules: Module[];
  constructor(
    public dialog: MatDialog,
    private moduleService: ModuleService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.modules = [];
    this.categoryTitle = this.route.snapshot.paramMap.get('categoryName');
  }

  ngOnInit(): void {
    this.viewModuleDetails();
  }

  addModuleForm() {
    const dialogRef = this.dialog.open(ModuleForm, {
      data: { categoryTitle: this.categoryTitle },
    });
  }

  viewModuleContents(moduleName: string) {
    this.router.navigate(['content', moduleName]);
  }

  viewModuleDetails() {
    this.moduleService.viewModules(this.categoryTitle).subscribe((resp) => {
      this.modules = resp;
    });
  }
}

@Component({
  selector: 'module_form',
  templateUrl: 'module_form.html',
})
export class ModuleForm {
  module_name: string;
  constructor(
    private moduleService: ModuleService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ModuleForm>,
    private router: Router
  ) {
    this.module_name = '';
  }

  addModule() {
    let moduleData: Module = { categoryName: '', moduleName: '' };
    moduleData.categoryName = this.data.categoryTitle;
    moduleData.moduleName = this.module_name;

    this.moduleService.addModule(moduleData).subscribe(resp => {
      if (resp) {
        alert("Added "+resp.moduleName+" to the "+resp.categoryName);
        this.dialogRef.close();
        this.router
          .navigateByUrl('/', { skipLocationChange: true })
          .then(() => {
            this.router.navigate(['module', resp.categoryName]);
          });
      } else {
        alert(resp);
      }
    });
  }
}

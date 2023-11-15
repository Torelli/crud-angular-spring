import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { CategoryPipe } from './pipes/category.pipe';

@NgModule({
  declarations: [],
  imports: [
    AppMaterialModule,
    CommonModule,
    ErrorDialogComponent,
    CategoryPipe,
  ],
  exports: [ErrorDialogComponent, CategoryPipe],
})
export class SharedModule {}

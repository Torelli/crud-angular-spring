import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppMaterialModule } from '../../../shared/app-material/app-material.module';
import { SharedModule } from '../../../shared/shared.module';
import { Course } from '../../model/course';

@Component({
  selector: 'app-courses-list',
  standalone: true,
  imports: [CommonModule, AppMaterialModule, SharedModule],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.scss',
})
export class CoursesListComponent {
  @Input() courses: Course[] = [];
  @Output() add = new EventEmitter(false);

  readonly displayedColumns = ['name', 'category', 'actions'];

  onAdd() {
    this.add.emit(true);
  }
}

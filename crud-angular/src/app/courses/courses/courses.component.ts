import { CoursesService } from './../services/courses.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Course } from '../model/course';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';


@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, AppMaterialModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  courses$: Observable<Course[]>;
  displayedColumns = ['name', 'category'];

  constructor(private CoursesService: CoursesService) {
    this.courses$ = this.CoursesService.findAll();
  }
}

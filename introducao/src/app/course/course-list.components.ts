
import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';


@Component({
selector:'app-course-list',
templateUrl:'./course-list.components.html'
})

export class CourseListComponent implements OnInit { 

  //  filteredCourses: Course[] = [];

    courses: Course[] = [];
    _filterBy:string;
    filteredCourses:Course[] = [];
constructor(private courseService:CourseService){}
    ngOnInit(): void { 
        this.courses=this.courseService.retrieveAll();

 
}
set filter(value:string){
  this.filteredCourses=this.courses.filter((course:Course)=>Course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase())>-1);
}
get filter(){
  return this._filterBy;
}
}


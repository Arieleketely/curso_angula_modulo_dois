import { Course } from './course';
import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class CourseService { 


    retrieveAll(): Course[] {
        return COURSES;
    }
}
 

var COURSES: Course[] = [
    {
        id: 1,
        name: 'Angular: CLI',
        realiseDate: 'November 2, 2019',
       // description: 'Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.',
        duration: 120,
        code: 'XLF-1212',
        rating: 3,
        preco: 12.99,
        imageUrl: '/assets/images/cli.png',
    },
    {
        id: 2,
        name: 'Angular: Forms',
        realiseDate: 'November 4, 2019',
       // description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Forms.',
        duration: 80,
        code: 'DWQ-3412',
        rating: 3.5,
        preco: 24.99,
        imageUrl: '/assets/images/forms.png',
    },
    {
        id: 3,
        name: 'Angular: HTTP',
        realiseDate: 'November 8, 2019',
        duration: 80,
        code: 'QPL-0913',
        rating: 4.0,
        preco: 36.99,
        imageUrl: '/assets/images/http.png',
    },
    {
        id: 4,
        name: 'Angular: Router',
        realiseDate: 'November 16, 2019',
        duration: 80,
        code: 'OHP-1095',
        rating: 4.5,
        preco: 46.99,
        imageUrl: '/assets/images/router.png',
    },
    {
        id: 5,
        name: 'Angular: Animations',
        realiseDate: 'November 25, 2019',
        duration: 80,
        code: 'PWY-9381',
        rating: 5,
        preco: 56.99,
        imageUrl: '/assets/images/animations.png',
    }
];
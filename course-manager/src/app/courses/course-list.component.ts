import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit{
    courses: Course[] = []
    ngOnInit(): void{
        this.courses = [
            {
                id: 1,
                name: 'string',
                imageUrl: 'string',
                price: 1,
                code: 'string',
                duration: 1,
                rating: 1,
                releaseDate: 'December, 2, 2022'
            },
            {
                id: 1,
                name: 'string',
                imageUrl: 'string',
                price: 1,
                code: 'string',
                duration: 1,
                rating: 1,
                releaseDate: 'December, 4, 2022'
            }
        ]
    }
}
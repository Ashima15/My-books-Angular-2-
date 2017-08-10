import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 

import { RomanticComponent } from './romantic.component';
import { MysteryComponent } from './mystery.component';
import { BooksComponent } from './books.component';
import { PageNotFoundComponent } from './pageNotFound.component';

const routes : Routes = [
    {
        path: '',
        component : BooksComponent
    },
    {
        path : 'mystery',
        component : MysteryComponent
    },
    
    {
        path : 'romantic',
        component : RomanticComponent
    },
    {
        path : 'books',
        component : BooksComponent
    },
    {
        path:'**',
        component : PageNotFoundComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    
    exports : [
        RouterModule
    ]
})

export class AppRoutingModule {}
export const routingComponents = [RomanticComponent, MysteryComponent, BooksComponent, PageNotFoundComponent];
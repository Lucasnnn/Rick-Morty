import { Routes } from "@angular/router";

const PagesRouting : Routes = [
    {
        path: 'home',
        loadChildren: ()=> import('./home/home.module').then((m)=> m.HomeModule)
    },
    {
        path: 'doc',
        loadChildren: ()=> import('./doc/doc.module').then((m)=> m.DocModule)
    }
]

export { PagesRouting };
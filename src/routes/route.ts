import { Routes } from "@angular/router"
import { EventsListComponent } from 'src/app/events/events-list.component';
import { EventDetailsComponent } from 'src/app/events/event-details/event-details.component';

export const routes: Routes = [
    { path: 'events', component: EventsListComponent },
    { path: 'events/:id', component: EventDetailsComponent },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
];
import { Routes } from "@angular/router"
import { EventsListComponent } from 'src/app/events/events-list/events-list.component';
import { EventDetailsComponent } from 'src/app/events/event-details/event-details.component';
import { CreateEventComponent } from 'src/app/events/create-event/create-event.component';

export const routes: Routes = [
    { path: 'events', component: EventsListComponent },
    { path: 'events/new', component: CreateEventComponent },
    { path: 'events/:id', component: EventDetailsComponent },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
];
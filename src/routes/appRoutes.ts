import { Routes } from "@angular/router"
import { EventsListComponent } from '../app/events/events-list/events-list.component';
import { EventDetailsComponent } from '../app/events/event-details/event-details.component';
import { CreateEventComponent } from '../app/events/create-event/create-event.component';
import { Error404Component } from '../app/errors/404.component';
import { EventRouteActivatorService } from '../app/events/shared/event-route-activator.service';
import { EventsListResolver } from '../app/events/events-list/events-list-resolver.service';

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService] },
    { path: 'events', component: EventsListComponent, resolve: { events: EventsListResolver } },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: '../app/user/user.module#UserModule'},
];
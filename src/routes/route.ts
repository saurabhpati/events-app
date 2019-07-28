import { Routes } from "@angular/router"
import { EventsListComponent } from 'src/app/events/events-list/events-list.component';
import { EventDetailsComponent } from 'src/app/events/event-details/event-details.component';
import { CreateEventComponent } from 'src/app/events/create-event/create-event.component';
import { Error404Component } from 'src/app/errors/404.component';
import { EventRouteActivatorService } from 'src/app/events/shared/event-route-activator.service';
import { CONSTANTS } from 'src/utils/constants';
import { EventsListResolver } from 'src/app/events/events-list/events-list-resolver.service';

export const routes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: [CONSTANTS.CREATE_EVENT_ROUTE_GUARD] },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService] },
    { path: 'events', component: EventsListComponent, resolve: { events: EventsListResolver } },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
];
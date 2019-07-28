import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service';
import { ToasterService } from './common/toastr.service';
import { RouterModule } from '@angular/router';
import { routes } from '../routes/route';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { EventRouteActivatorService } from './events/shared/event-route-activator.service';
import { Error404Component } from './errors/404.component';
import { CONSTANTS } from 'src/utils/constants';
import { EventsListResolver } from './events/events-list/events-list-resolver.service';

const checkDirtyState = ({ isDirty }: CreateEventComponent) => {
  if (isDirty) {
    return window.confirm('You have not saved this event. Do you really want to cancel?');
  }

  return true;
}

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    NavbarComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    EventService,
    EventsListResolver,
    ToasterService,
    EventRouteActivatorService,
    { provide: CONSTANTS.CREATE_EVENT_ROUTE_GUARD, useValue: checkDirtyState }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

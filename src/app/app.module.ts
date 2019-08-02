import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { 
  EventsListComponent, 
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivatorService,
  EventsListResolver, } from './events';
import { NavbarComponent } from './nav';
import { ToasterService } from './common';
import { appRoutes } from '../routes';
import { Error404Component } from './errors';
import { AuthService } from './user/shared/auth.service';

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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    EventsListResolver,
    ToasterService,
    EventRouteActivatorService,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
    AuthService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { EventService } from './event.service';

export class EventRouteActivatorService implements CanActivate {
    constructor(
        private readonly eventService: EventService,
        private readonly router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        const exists = !!this.eventService.getEvent(+route.params['id']);

        if (!exists) {
            this.router.navigate(['404']);
        }

        return exists;
    }
}
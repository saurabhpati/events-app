import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
    templateUrl: './event-details.component.html',
    styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
    private event;

    constructor(
        private readonly eventsService: EventService,
        private readonly route: ActivatedRoute) {
        
    }
    
    ngOnInit(): void {
        this.event = this.eventsService.getEvent(+this.route.snapshot.params['id']);
    }
}
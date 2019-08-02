import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../shared';

@Component({
    templateUrl: './event-details.component.html',
    styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
    event;

    constructor(
        private readonly eventsService: EventService,
        private readonly route: ActivatedRoute) {
        
    }
    
    ngOnInit(): void {
        this.event = this.eventsService.getEvent(+this.route.snapshot.params['id']);
    }
}
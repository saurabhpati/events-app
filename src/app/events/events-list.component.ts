import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToasterService } from '../common/toastr.service';

@Component({
    templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {
    private events: any[];
    
    constructor(private eventService: EventService, private toastrService: ToasterService) {

    }

    ngOnInit(): void {
        this.events = this.eventService.getEvents()
    }
    
    handleThumbnailClick(name) {
        this.toastrService.success(name);
    }
}
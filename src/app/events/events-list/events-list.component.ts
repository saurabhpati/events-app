import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToasterService } from '../../common';
import { IEvent } from '../shared';

@Component({
    templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {
    private events: IEvent[];
    
    constructor(private route: ActivatedRoute, private toastrService: ToasterService) {

    }

    ngOnInit(): void {
        this.events = this.route.snapshot.data['events'];
    }
    
    handleThumbnailClick(name) {
        this.toastrService.success(name);
    }
}
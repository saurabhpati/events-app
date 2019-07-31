import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToasterService } from '../../common';

@Component({
    templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {
    private events: any[];
    
    constructor(private route: ActivatedRoute, private toastrService: ToasterService) {

    }

    ngOnInit(): void {
        this.events = this.route.snapshot.data['events'];
    }
    
    handleThumbnailClick(name) {
        this.toastrService.success(name);
    }
}
import { Component, OnInit } from '@angular/core';
import { NewscreenService } from './newscreen.service';

@Component({
  selector: 'app-newscreen',
  templateUrl: './newscreen.component.html',
  styleUrls: ['./newscreen.component.scss'],
})

export class NewscreenComponent implements OnInit {

    constructor (
        private newscreenService: NewscreenService,
    ) { }

    ngOnInit() {
    }
}
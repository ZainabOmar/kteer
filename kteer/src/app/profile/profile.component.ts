import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import  { DataService } from './data.service.ts';


@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css'],
	providers: []
})
export class ProfileComponent implements OnInit {

	data: Object[] = [];

	constructor(private dataService: DataService) { }

	ngOnInit() {
		this.dataService.getReviews(localStorage.getItem("user-id")).subscribe(data => {
			this.data = data;
		})
	}

}

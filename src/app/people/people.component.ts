import { Component, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  constructor() { }

  people: Person[] = [
    { name: 'Manh Nguyen', height: 165, weight: 80 },
    { name: 'Mai Huyen', height: 155, weight: 50 },
    { name: 'Hai Hai', height: 165, weight: 65 },
    { name: 'Khuat Huyen', height: 155, weight: 50 },
    { name: 'Trang Vu', height: 160, weight: 50 },
    { name: 'Tung Vu', height: 170, weight: 70 }
  ];

  ngOnInit(): void {
  }

}

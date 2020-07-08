import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stat-filters',
  templateUrl: './stat-filters.component.html',
  styleUrls: ['./stat-filters.component.css']
})
export class StatFiltersComponent implements OnInit {
  filters: FormGroup;

  constructor(private fb: FormBuilder) {
    this.filters = fb.group({
      date: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

}
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // Form
  private searchForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      search: this.fb.control([], Validators.required),
      type: this.fb.control([], Validators.required),
    });
   }

  ngOnInit() {
  }

  onSubmit() {
    let value: any = this.searchForm.value;
    console.log(value)
    this.searchForm.reset;
  }

}

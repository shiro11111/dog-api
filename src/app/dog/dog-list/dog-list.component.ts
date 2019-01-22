import { Component, OnInit, ViewChild } from '@angular/core';
import { AppState } from '../../app.reducers';
import { Store } from '@ngrx/store';
import { LoadDogList } from '../dog.actions';
import { Observable } from 'rxjs';
import { DogState } from '../dog.reducers';
import { map } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatChipListChange, MatChipSelectionChange, MatListOption, MatSelectionList, MatSelectionListChange } from '@angular/material';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit {

  @ViewChild('list') list: MatSelectionList;

  dogList$: Observable<string[]>;
  form: FormGroup;

  constructor(private store: Store<AppState>,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.store.dispatch(new LoadDogList());

    this.dogList$ = this.store.select('dogState').pipe(
      map((state: DogState) => state && state.dogList)
    );

    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      add: null
    });
  }

  onSelectionChanged(event: MatSelectionListChange): string[] {
    if (this.list) {
      const selectedDogs = this.list.selectedOptions.selected.map((item: MatListOption) => item.value);
      return selectedDogs;
    }
    return [];
  }

  // onSelectionChange(event: MatChipSelectionChange): void {
  //   console.log(event);
  // }
  //
  // onChange(event: any): void {
  //   console.log(event);
  // }
  //
  // onClick($event, item): void {
  //   console.log($event, item);
  // }
}

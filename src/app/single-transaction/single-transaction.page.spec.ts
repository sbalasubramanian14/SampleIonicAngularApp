import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTransactionPage } from './single-transaction.page';

describe('SingleTransactionPage', () => {
  let component: SingleTransactionPage;
  let fixture: ComponentFixture<SingleTransactionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleTransactionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleTransactionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

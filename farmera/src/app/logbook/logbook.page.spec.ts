import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogbookPage } from './logbook.page';

describe('LogbookPage', () => {
  let component: LogbookPage;
  let fixture: ComponentFixture<LogbookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogbookPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogbookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

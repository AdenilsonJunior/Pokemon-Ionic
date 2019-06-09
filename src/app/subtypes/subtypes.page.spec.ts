import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtypesPage } from './subtypes.page';

describe('SubtypesPage', () => {
  let component: SubtypesPage;
  let fixture: ComponentFixture<SubtypesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubtypesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtypesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalDataPage } from './portal-data.page';

describe('PortalDataPage', () => {
  let component: PortalDataPage;
  let fixture: ComponentFixture<PortalDataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalDataPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

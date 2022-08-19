import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactpersonsComponent } from './contactpersons.component';

describe('ContactpersonsComponent', () => {
  let component: ContactpersonsComponent;
  let fixture: ComponentFixture<ContactpersonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactpersonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactpersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

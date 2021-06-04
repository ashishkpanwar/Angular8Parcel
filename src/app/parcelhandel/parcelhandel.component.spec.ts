import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelhandelComponent } from './parcelhandel.component';

describe('ParcelhandelComponent', () => {
  let component: ParcelhandelComponent;
  let fixture: ComponentFixture<ParcelhandelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParcelhandelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcelhandelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

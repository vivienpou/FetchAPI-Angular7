import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralresultsComponent } from './centralresults.component';


describe('CentralresultsComponent', () => {
  let component: CentralresultsComponent;
  let fixture: ComponentFixture<CentralresultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentralresultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentralresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

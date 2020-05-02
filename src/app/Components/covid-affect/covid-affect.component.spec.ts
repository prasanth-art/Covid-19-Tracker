import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidAffectComponent } from './covid-affect.component';

describe('CovidAffectComponent', () => {
  let component: CovidAffectComponent;
  let fixture: ComponentFixture<CovidAffectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidAffectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidAffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

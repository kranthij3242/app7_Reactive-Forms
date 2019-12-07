import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicreactiveformsComponent } from './basicreactiveforms.component';

describe('BasicreactiveformsComponent', () => {
  let component: BasicreactiveformsComponent;
  let fixture: ComponentFixture<BasicreactiveformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicreactiveformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicreactiveformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

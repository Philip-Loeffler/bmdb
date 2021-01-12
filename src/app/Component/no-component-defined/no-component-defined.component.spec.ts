import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoComponentDefinedComponent } from './no-component-defined.component';

describe('NoComponentDefinedComponent', () => {
  let component: NoComponentDefinedComponent;
  let fixture: ComponentFixture<NoComponentDefinedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoComponentDefinedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoComponentDefinedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

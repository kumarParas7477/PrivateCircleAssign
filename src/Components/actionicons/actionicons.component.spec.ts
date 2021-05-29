import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActioniconsComponent } from './actionicons.component';

describe('ActioniconsComponent', () => {
  let component: ActioniconsComponent;
  let fixture: ComponentFixture<ActioniconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActioniconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActioniconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

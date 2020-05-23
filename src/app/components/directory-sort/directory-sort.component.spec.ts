import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorySortComponent } from './directory-sort.component';

describe('DirectorySortComponent', () => {
  let component: DirectorySortComponent;
  let fixture: ComponentFixture<DirectorySortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorySortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorySortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

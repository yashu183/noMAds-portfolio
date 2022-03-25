import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetMeLineComponent } from './meet-me-line.component';

describe('MeetMeLineComponent', () => {
  let component: MeetMeLineComponent;
  let fixture: ComponentFixture<MeetMeLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetMeLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetMeLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

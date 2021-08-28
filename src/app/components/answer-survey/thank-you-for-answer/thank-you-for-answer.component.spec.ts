import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankYouForAnswerComponent } from './thank-you-for-answer.component';

describe('ThankYouForAnswerComponent', () => {
  let component: ThankYouForAnswerComponent;
  let fixture: ComponentFixture<ThankYouForAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThankYouForAnswerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankYouForAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

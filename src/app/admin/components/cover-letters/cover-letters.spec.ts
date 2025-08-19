import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverLetters } from './cover-letters';

describe('CoverLetters', () => {
  let component: CoverLetters;
  let fixture: ComponentFixture<CoverLetters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoverLetters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoverLetters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

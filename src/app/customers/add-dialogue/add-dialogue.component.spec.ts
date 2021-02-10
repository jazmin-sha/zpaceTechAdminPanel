import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDialogueComponent } from './add-dialogue.component';

describe('AddDialogueComponent', () => {
  let component: AddDialogueComponent;
  let fixture: ComponentFixture<AddDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDialogueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionsnComponent } from './instructionsn.component';

describe('InstructionsnComponent', () => {
  let component: InstructionsnComponent;
  let fixture: ComponentFixture<InstructionsnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructionsnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructionsnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

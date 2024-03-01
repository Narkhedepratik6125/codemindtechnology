import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeinformationComponent } from './recipeinformation.component';

describe('RecipeinformationComponent', () => {
  let component: RecipeinformationComponent;
  let fixture: ComponentFixture<RecipeinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeinformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

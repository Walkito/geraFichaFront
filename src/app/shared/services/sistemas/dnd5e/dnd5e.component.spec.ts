import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dnd5eComponent } from './dnd5e.component';

describe('Dnd5eComponent', () => {
  let component: Dnd5eComponent;
  let fixture: ComponentFixture<Dnd5eComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dnd5eComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dnd5eComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActionCardRowComponent } from './action-card-row.component';

describe('ActionCardRowComponent', () => {
  let component: ActionCardRowComponent;
  let fixture: ComponentFixture<ActionCardRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionCardRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionCardRowComponent);
    component = fixture.componentInstance;
    component.row = { featureName: 'Sample Feature'};
    fixture.detectChanges();
  });

  it('should create with', () => {
    expect(component).toBeTruthy();
  });
});

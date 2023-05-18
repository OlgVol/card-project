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

  it('should call toggleMenu function', () => {
    component.toggleMenu();
    expect(component.showToDoList).toBeTrue();
    component.toggleMenu();
    expect(component.showToDoList).toBeFalse();
  })
  it('should emit deleteRow event', () => {
    const deleteRowSpy = spyOn(component.deleteRow, 'emit');
    component.onDelete();
    expect(deleteRowSpy).toHaveBeenCalled();
  })
  it('should emit onEdit event', () => {
    const editSpy = spyOn(component.editRow, 'emit');
    component.onEdit();
    expect(editSpy).toHaveBeenCalled();
  })
});

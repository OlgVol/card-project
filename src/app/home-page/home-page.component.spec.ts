import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePageComponent } from './home-page.component';
import { ActionCardComponent } from '../action-card/action-card.component';
import { ActionCardRowComponent } from '../action-card-row/action-card-row.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageComponent, ActionCardComponent, ActionCardRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should to log the message', () => {
    const consoleDeleteSpy = spyOn(console, 'log');
    component.onDelete();
    expect(consoleDeleteSpy).toHaveBeenCalledWith('row deleted')
  })

  it('should to log the message', () => {
    const consoleEditSpy = spyOn(console, 'log');
    component.onEdit();
    expect(consoleEditSpy).toHaveBeenCalledWith('row edited')
  })
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoaredResultConsoleComponent } from './boared-result-console.component';

describe('BoaredResultConsoleComponent', () => {
  let component: BoaredResultConsoleComponent;
  let fixture: ComponentFixture<BoaredResultConsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoaredResultConsoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoaredResultConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

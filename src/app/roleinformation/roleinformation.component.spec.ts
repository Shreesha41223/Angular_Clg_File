import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleinformationComponent } from './roleinformation.component';

describe('RoleinformationComponent', () => {
  let component: RoleinformationComponent;
  let fixture: ComponentFixture<RoleinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoleinformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoleinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

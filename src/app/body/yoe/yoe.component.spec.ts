import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoeComponent } from './yoe.component';

describe('YoeComponent', () => {
  let component: YoeComponent;
  let fixture: ComponentFixture<YoeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

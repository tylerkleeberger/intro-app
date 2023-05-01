import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutPage } from './layout.page';

describe('ToolbarPage', () => {
  let component: LayoutPage;
  let fixture: ComponentFixture<LayoutPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayoutPage],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

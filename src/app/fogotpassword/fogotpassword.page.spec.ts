import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FogotpasswordPage } from './fogotpassword.page';

describe('FogotpasswordPage', () => {
  let component: FogotpasswordPage;
  let fixture: ComponentFixture<FogotpasswordPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FogotpasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

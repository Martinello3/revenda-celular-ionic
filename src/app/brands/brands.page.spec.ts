import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrandsPage } from './brands.page';

describe('BrandsPage', () => {
  let component: BrandsPage;
  let fixture: ComponentFixture<BrandsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInquiriesComponent } from './customer-inquiries.component';

describe('CustomerInquiriesComponent', () => {
  let component: CustomerInquiriesComponent;
  let fixture: ComponentFixture<CustomerInquiriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerInquiriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerInquiriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

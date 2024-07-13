import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a button with text "Subscribe"', () => {
    /* 
      Since we are rendering by condition, we need to check the condition first
      and then detect changes.
    */
    component.isSubscribe = false;
    fixture.detectChanges();
    const btnElement = el.queryAll(By.css('.subscribe'));
    component.btnText = "Subscribe";
    fixture.detectChanges();
    expect(btnElement[0].nativeElement.textContent).toBe('Subscribe');
    expect(btnElement[0].nativeElement.disabled).toBeFalse();
  });

  it('should change button text to "Subscribed" and disable the button when clicked', () => {
    // Set initial state and detect changes
    component.isSubscribe = false;
    fixture.detectChanges();
    let btnElement = el.queryAll(By.css('.subscribe'));

    // Simulate button click
    btnElement[0].nativeElement.click();
    fixture.detectChanges();

    /*
      When the button is clicked, the first button will be removed
      from the DOM, so we need to get the button again using queryAll.
    */
    btnElement = el.queryAll(By.css('.subscribe'));
    expect(btnElement[0].nativeElement.textContent).toBe('Subscribed');
    expect(btnElement[0].nativeElement.disabled).toBeTrue();
  });
});



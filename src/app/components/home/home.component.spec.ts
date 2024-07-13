import { async, ComponentFixture, TestBed, fakeAsync, flush } from '@angular/core/testing';
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
    component.isSubscribe = false;
    fixture.detectChanges();
    const btnElement = el.queryAll(By.css('.subscribe'));
    component.btnText = "Subscribe";
    fixture.detectChanges();
    expect(btnElement[0].nativeElement.textContent).toBe('Subscribe');
    expect(btnElement[0].nativeElement.disabled).toBeFalse();
  });

  it('should change button text to "Subscribed" and disable the button when clicked', 
    fakeAsync(
    () => {
      component.isSubscribe = false;
      fixture.detectChanges();
      let btnElement = el.queryAll(By.css('.subscribe'));
      btnElement[0].nativeElement.click();

      flush(); // Simulate the asynchronous task completion
      fixture.detectChanges();
      btnElement = el.queryAll(By.css('.subscribe'));
      expect(btnElement[0].nativeElement.textContent).toBe('Subscribed');
      expect(btnElement[0].nativeElement.disabled).toBeTrue();
    })
  );
});


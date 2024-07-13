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

  it('it should render a button a text Subscribe', () => {
    const btnElement = el.queryAll(By.css('.subscribe'));
    component.btnText = "Subscribe";
    component.isSubscribe = false;
    fixture.detectChanges();
    expect(btnElement[0].nativeElement.textContent).toBe('Subscribe');
    expect(btnElement[0].nativeElement.disabled).toBeFalse();
  });

  it('button a text Subscribed and button disable when clicked', () => {
    const btnElement = el.queryAll(By.css('.subscribe'));
    component.btnText = "Subscribe";
    component.isSubscribe = false;
    btnElement[0].nativeElement.click(); // click event before change detection
    fixture.detectChanges();
    expect(btnElement[0].nativeElement.textContent).toBe('Subscribed');
    expect(btnElement[0].nativeElement.disabled).toBeTrue();
  })
});

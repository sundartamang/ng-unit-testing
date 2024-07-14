import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { DataDirective } from 'src/app/directives/data.directive';
import { DebugElement, Renderer2 } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let el: DebugElement

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, DataDirective]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directive = new DataDirective(
      el,
      fixture.componentRef.injector.get(Renderer2)
    );
    expect(directive).toBeTruthy();
  });


  it('should highlight the background color when mouse enter', () => {
    // Query the element with the directive
    let pElement = el.query(By.css('p[appData]'));
    // Simulate mouse enter
    pElement.triggerEventHandler('mouseenter', null);
    // Detect changes
    fixture.detectChanges();
    // Check the style
    expect(pElement.nativeElement.style.backgroundColor).toBe('yellow');
  });

  it('should remove the highlight when mouse leave', () => {
    // Query the element with the directive
    let pElement = el.query(By.css('p[appData]'));
    // Simulate mouse leave
    pElement.triggerEventHandler('mouseleave', null);
    // Detect changes
    fixture.detectChanges();
    // Check the style
    expect(pElement.nativeElement.style.backgroundColor).toBe('');
  });
});

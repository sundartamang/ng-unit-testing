import { async, ComponentFixture, fakeAsync, flush, flushMicrotasks, TestBed, tick } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { of } from 'rxjs';
import {delay} from 'rxjs/operators';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('it should test promise', fakeAsync(() => {
    let counter = 0;


    setTimeout(() => {
      counter = counter + 3;
      console.log("first time out")

    }, 2000);

    setTimeout(() => {
      counter = counter + 5;
      console.log("second time out")
    }, 6000);


    Promise.resolve().then(() => {
      console.log("Promise ")
      counter = counter + 1;
    });
    // flush();
    flushMicrotasks();
    expect(counter).toBe(1)

    tick(2000);
    expect(counter).toBe(4);

    tick(6000);
    expect(counter).toBe(9);

  }));


  it('it should test the observable', fakeAsync(() => {
    let isSubscribe = false;

    let obs = of(isSubscribe).pipe(delay(1000));

    obs.subscribe(()=>{
      isSubscribe = true;
    });
    tick(1000);
    expect(isSubscribe).toBe(true);

  }))
});

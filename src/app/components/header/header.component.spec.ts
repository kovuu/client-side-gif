import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let debugEl: DebugElement;
  let nativeEl: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    component.userId = '1';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render normally when user is login', () => {
    fixture.detectChanges();
    nativeEl = debugEl.query(By.css('.left-menu a:nth-child(2)')).nativeElement;
    expect(nativeEl).toBeTruthy();
    nativeEl = debugEl.query(By.css('.header-right a')).nativeElement;
    expect(nativeEl.innerText).toBe('Logout');
  });
  it('should render normally when user is not login', () => {
    component.userId = null;
    fixture.detectChanges();
    nativeEl = debugEl.query(By.css('.left-menu a:nth-child(2)')).nativeElement;
    expect(nativeEl.textContent).toBe('Upload Image');
    nativeEl = debugEl.query(By.css('.header-right a')).nativeElement;
    expect(nativeEl.innerText).toBe('Login');
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertComponent } from './alert.component';
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

describe('AlertComponent', () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;
  let debugEl: DebugElement;
  let nativeEl: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertComponent);
    debugEl = fixture.debugElement;
    component = fixture.componentInstance;
    component.message = 'Success!';
    component.status = true;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should display alert correctly', () => {
    fixture.detectChanges();
    nativeEl = debugEl.query(By.css('div')).nativeElement;
    expect(nativeEl.textContent).toBe('Success!');
    expect(nativeEl.classList).toContain('alert-success');
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesBlockComponent } from './images-block.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ImagesBlockComponent', () => {
  let component: ImagesBlockComponent;
  let fixture: ComponentFixture<ImagesBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesBlockComponent ],
      providers: [HttpClientModule],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

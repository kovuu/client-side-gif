import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesBlockComponent } from './images-block.component';

describe('ImagesBlockComponent', () => {
  let component: ImagesBlockComponent;
  let fixture: ComponentFixture<ImagesBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesBlockComponent ]
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

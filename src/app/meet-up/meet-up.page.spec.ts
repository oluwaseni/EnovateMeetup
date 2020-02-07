import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MeetUpPage } from './meet-up.page';

describe('MeetUpPage', () => {
  let component: MeetUpPage;
  let fixture: ComponentFixture<MeetUpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetUpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MeetUpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

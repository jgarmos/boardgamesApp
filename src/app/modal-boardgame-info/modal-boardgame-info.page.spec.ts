import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalBoardgameInfoPage } from './modal-boardgame-info.page';

describe('ModalBoardgameInfoPage', () => {
  let component: ModalBoardgameInfoPage;
  let fixture: ComponentFixture<ModalBoardgameInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalBoardgameInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalBoardgameInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

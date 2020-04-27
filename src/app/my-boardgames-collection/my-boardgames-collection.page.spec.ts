import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyBoardgamesCollectionPage } from './my-boardgames-collection.page';

describe('MyBoardgamesCollectionPage', () => {
  let component: MyBoardgamesCollectionPage;
  let fixture: ComponentFixture<MyBoardgamesCollectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBoardgamesCollectionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyBoardgamesCollectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

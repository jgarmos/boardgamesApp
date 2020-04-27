import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BoardgamesLibraryPage } from './boardgames-library.page';

describe('BoardgamesLibraryPage', () => {
  let component: BoardgamesLibraryPage;
  let fixture: ComponentFixture<BoardgamesLibraryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardgamesLibraryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BoardgamesLibraryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

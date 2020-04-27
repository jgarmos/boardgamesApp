import { TestBed } from '@angular/core/testing';

import { BoardgamesApiService } from './boardgames-api.service';

describe('BoardgamesApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoardgamesApiService = TestBed.get(BoardgamesApiService);
    expect(service).toBeTruthy();
  });
});

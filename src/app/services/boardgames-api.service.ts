import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BoardgamesApiService {

  public static readonly BOARDGAMES_API_URL = "https://www.boardgameatlas.com/api/search?client_id=Gz15PmN0vr"
  
  constructor(public http:HttpClient) { }

  getBoardgames(numberOfgames:number): Observable<object>{
    
    let server_response: Observable<Object>;
    let url: string;
    url = BoardgamesApiService.BOARDGAMES_API_URL + '&skip=' + numberOfgames;
    
    //server_response = this.http.get(BoardgamesAPIService.BOARDGAMES_API_URL);
    server_response = this.http.get(url , {observe:"response"});
    return server_response;
  }

  searchBoardgameByName(name:string):Observable<object>{
    
    let server_response :Observable<object>;
    let url:string;
    url = BoardgamesApiService.BOARDGAMES_API_URL + '&name=' + name;

    server_response = this.http.get(url , {observe:"response"});
    return server_response;
  }

}

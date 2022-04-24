import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  urlArticles = 'http://127.0.0.1:8080/articles';
  provider: any;
  constructor(private Http: HttpClient) {}
  listArticles() {
    return this.Http.get(this.urlArticles + '/list');
  }

  createArticle(myform: any) {
    return this.Http.post(this.urlArticles + '/add', myform);
  }

  getArticle(id:any){
    console.log("confirmer", id);
    return this.Http.get(this.urlArticles + '/'+ id);
  }

  updateArticle(id:any, article: any) {
    return this.Http.put(this.urlArticles + '/'+id, article);
  }
}

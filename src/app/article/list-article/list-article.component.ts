import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent implements OnInit {
  listArticles: any;
  errors = [];
  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.listArticles().subscribe(
      (data) => {
        this.listArticles = data;
        console.log(this.listArticles);
      },
      (err) => {
        this.errors = err.error.message;
        alert('Error: ' + this.errors);
      }
    );
  }

  deleteArticle(article:any){

  }
}

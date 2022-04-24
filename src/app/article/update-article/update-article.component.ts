import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProviderService } from 'src/app/provider.service';
import { ArticleService } from 'src/app/services/article.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {
  public urlUpload = environment.urlUploadImage;
 id:any;
 articleToUpdate:any;
 label:any;
 price:any;
 provider!:any;
 providers:any;
 nomOldImage="";
 nomNewImage="";
 selectedProvider:any
 isImageLoading = true;
selectedFile!: File;
errors = [];
  constructor(private router: Router, private providerService:ProviderService,
    private articleService:ArticleService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.id = params.get('id');
        console.log("monid", this.id);
      }
    );

    this.articleService.getArticle(this.id).subscribe(
      (response:any) => {
        console.log("response", response);
        this.label = response["label"];
        this.price = response["price"];
        this.provider = response["provider"];
        this.selectedProvider = this.provider;
        this.nomOldImage = response["picture"];
        this.providers = this.providerService.listProviders().subscribe(
          data => {this.providers =data;}
        );
      },
      (err) => {
        this.errors = err.error.message;
        console.log('Error: ' + this.errors);
      }
    );
  }

  public onFileChanged(event:any) {
    //Select File
    this.selectedFile = event.target.files[0];
  }


  updateArticle(){
    const article = new FormData();
    console.log("selectedProvider:", this.selectedProvider.name);
    article.append('imageFile', this.selectedFile, this.selectedFile.name);
    article.append('label', this.label);
    article.append('price', this.price);
    article.append('providerId',this.selectedProvider.id);
    article.append('imageName',this.selectedFile.name);
    console.log("article", article.get("providerId"));

      this.articleService.updateArticle(this.id,article).subscribe(
      response => {
        this.router.navigate(['listArticle']);
      },
      (err) => {
        this.errors = err.error.message;
        console.log('Error: ' + this.errors);
      }
    );
  }
}

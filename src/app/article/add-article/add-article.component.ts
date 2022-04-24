import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Provider } from 'src/app/models/provider';
import { ProviderService } from 'src/app/provider.service';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  selectedFile!: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  providers:any;
  selectedProvider:any;
  constructor(private articleService: ArticleService,  private providerService: ProviderService, private router: Router) { }

  ngOnInit(): void {
    this.providers = this.providerService.listProviders().subscribe(
      data => {this.providers =data;}
    );
  }

   //Gets called when the user selects an image
   public onFileChanged(event:any) {
    //Select File
    this.selectedFile = event.target.files[0];
    //console.log(this.selectedFile);
  }
  createArticle(myform:any) {
    console.log("ma valeur", this.selectedProvider);
    const article = new FormData();
    article.append('imageFile', this.selectedFile, this.selectedFile.name);
    article.append('label', myform.value.articleLabel);
    article.append('price', myform.value.articlePrice);
    article.append('providerId',this.selectedProvider.id);
    article.append('imageName',this.selectedFile.name);

    this.articleService.createArticle(article).subscribe(
      (response) =>{
        console.log(response);
        this.router.navigate(['listArticle']);
      }
    );

  }
}

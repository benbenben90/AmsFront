import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddProviderComponent } from './provider/add-provider/add-provider.component';
import { ListProviderComponent } from './provider/list-provider/list-provider.component';
import { UpdateProviderComponent } from './provider/update-provider/update-provider.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService } from './services/auth-guard.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BasicAuthHttpInterceptorService } from './basic-auth-http-interceptor.service';
import { AddArticleComponent } from './article/add-article/add-article.component';
import { UpdateArticleComponent } from './article/update-article/update-article.component';
import { ListArticleComponent } from './article/list-article/list-article.component';
import { RegistrationComponent } from './registration/registration.component';
import { ListRoleComponent } from './role/list-role/list-role.component';
import { AddRoleComponent } from './role/add-role/add-role.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'app-navbar' },
  {
    path: 'listProvider',
    component: ListProviderComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'addProvider',
    component: AddProviderComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'updateProvider/:id',
    component: UpdateProviderComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'listArticle',
    canActivate: [AuthGuardService],
    component: ListArticleComponent,
  },
  {
    path: 'addArticle',
    component: AddArticleComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'editArticle/:id',
    component: UpdateArticleComponent,
  },
  {
    path: 'listRole',
    component: ListRoleComponent,
  },
  {
    path: 'addRole',
    component: AddRoleComponent,
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddProviderComponent,
    ListProviderComponent,
    UpdateProviderComponent,
    LoginComponent,
    LogoutComponent,
    AddArticleComponent,
    UpdateArticleComponent,
    ListArticleComponent,
    RegistrationComponent,
    ListRoleComponent,
    AddRoleComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BasicAuthHttpInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

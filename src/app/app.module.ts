import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RecuperarSenhaComponent } from './components/recuperar-senha/recuperar-senha.component';
import { LoginComponent } from './components/login/login.component';
import { CriarContaComponent } from './components/criar-conta/criar-conta.component';

// mapeamento das rotas do projeto

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: LoginComponent},
  { path: 'criar-conta', component: CriarContaComponent},
  { path: 'recuperar-senha', component: RecuperarSenhaComponent},
  
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RecuperarSenhaComponent,
    LoginComponent,
    CriarContaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

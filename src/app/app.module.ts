import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Para que funcione evento keyup en el buscador
import { FormsModule } from "@angular/forms";//evento keyup en el buscador

//Rutas
import {APP_ROUTING} from './app.routes';

//Servicios
import { HeroesService } from "./servicios/heroes.service";

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { compileNgModuleFromRender2 } from '@angular/compiler/src/render3/r3_module_compiler';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearchComponent } from './components/search/search.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    SearchComponent,
    HeroeTarjetaComponent    
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule
  ],
  providers: [//Aqui se colocan los servicios importados arriba
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

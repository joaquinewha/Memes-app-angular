import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import { Meme } from './Modelos/memes';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meme-app';
  memes: Meme [] =  [];
  
  constructor(private http: HttpClient ){

  }

  Generar(): void{
    console.log("Antes de invocar al servicio REST en backent");
    this.http.get<Meme>("https://api.imgflip.com/get_memes").subscribe(data =>{
      this.memes = data.data.memes;
    });
    console.log("Despues de invocar al servicio REST en backent");
  }
}

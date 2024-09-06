import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Respuesta } from '../../Models/Respuesta';
import { TitulosDeTrabajo } from '../../Models/TitulosdeTrabajo';

@Injectable({
  providedIn: 'root'
})
export class TitulosdeTrabajoService {
  http = inject(HttpClient);

    url_listar = 'http://localhost:9003/titulos/listar';
    url_guardar = 'http://localhost:9003/titulos/guardar';
    url_editar = 'http://localhost:9003/titulos/editar';
    url_eliminar = 'http://localhost:9003/titulos/eliminar';
    url_buscar = 'http://localhost:9003/titulos/buscar/1';
  
    listar(){
      return this.http.get<Respuesta>(this.url_listar);
    }

    guardar(t: TitulosDeTrabajo){
      return this.http.post<Respuesta>(this.url_guardar, t);
    }

    editar(t: TitulosDeTrabajo){
      return this.http.post<Respuesta>(this.url_editar, t);
    }

    eliminar(t: TitulosDeTrabajo){
      return this.http.post<Respuesta>(this.url_eliminar, t);
    }
    
    buscar(t: TitulosDeTrabajo){
      return this.http.post<Respuesta>(this.url_buscar, t);
    }
}

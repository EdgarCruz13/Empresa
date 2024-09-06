import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Respuesta } from '../../Models/Respuesta';
import { Departamentos } from '../../Models/Departamentos';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {
    http = inject(HttpClient)

    url_listar = 'http://localhost:9002/departamentos/listar';
    url_guardar = 'http://localhost:9002/departamentos/guardar';
    url_editar = 'http://localhost:9002/departamentos/editar';
    url_eliminar = 'http://localhost:9002/departamentos/eliminar';
    url_buscar = 'http://localhost:9002/departamentos/buscar/1';

    listar(){
      return this.http.get<Respuesta>(this.url_listar);
    }

    guardar(d: Departamentos){
      return this.http.post<Respuesta>(this.url_guardar, d);
    }

    editar(d: Departamentos){
      return this.http.post<Respuesta>(this.url_editar, d);
    }

    eliminar(d: Departamentos){
      return this.http.post<Respuesta>(this.url_eliminar, d);
    }
    
    buscar(d: Departamentos){
      return this.http.post<Respuesta>(this.url_buscar, d);
    }
}

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Respuesta } from '../../Models/Respuesta';
import { Empleados } from '../../Models/Empleados';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  http = inject(HttpClient);

    url_listar = 'http://localhost:9001/empleados/listar';
    url_guardar = 'http://localhost:9001/empleados/guardar';
    url_editar = 'http://localhost:9001/empleados/editar';
    url_eliminar = 'http://localhost:9001/empleados/eliminar';
    url_buscar = 'http://localhost:9001/empleados/mostrarTodo/1';
  
    listar(){
      return this.http.get<Respuesta>(this.url_listar);
    }

    guardar(e: Empleados){
      return this.http.post<Respuesta>(this.url_guardar, e);
    }

    editar(e: Empleados){
      return this.http.post<Respuesta>(this.url_editar, e);
    }

    eliminar(e: Empleados){
      return this.http.post<Respuesta>(this.url_eliminar, e);
    }
    
    buscar(e: Empleados){
      return this.http.post<Respuesta>(this.url_buscar, e);
    }
  

}

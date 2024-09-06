import { Routes } from '@angular/router';

export const routes: Routes = [
    {   



        path: '',
        loadComponent: () => import('./shared/components/layout/layout.component'),
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./business/dashboard/dashboard.component')
            },
            {
                path: 'empleados',
                loadComponent: () => import('./business/empleados/empleados.component')
            },
            {
                path: 'departamento',
                loadComponent: () => import('./business/departamento/departamento.component')
            },
            {
                path: 'titulosTrabajo',
                loadComponent: () => import('./business/titulosTrabajo/titulosTrabajo.component')
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'listarTitulos',
                loadComponent: () => import('./business/titulosTrabajo/Listar/Listar.component')
            },
            {
                path: 'GuardarTitulos',
                loadComponent: () => import('./business/titulosTrabajo/Guardar/Guardar.component')
            },
            {
                path: 'EditarTitulos',
                loadComponent: () => import('./business/titulosTrabajo/Editar/Editar.component')
            },
            {
                path: 'EliminarTitulos',
                loadComponent: () => import('./business/titulosTrabajo/Eliminar/Eliminar.component')  
            },


            {
                path: 'listarEmpleados',
                loadComponent: () => import('./business/empleados/Listar/Listar.component')
            },
            {
                path: 'GuardarEmpleados',
                loadComponent: () => import('./business/empleados/Guardar/Guardar.component')
            },
            {
                path: 'EditarEmpleados',
                loadComponent: () => import('./business/empleados/Editar/Editar.component')
            },
            {
                path: 'EliminarEmpleados',
                loadComponent: () => import('./business/empleados/Eliminar/Eliminar.component')  
            },


            {
                path: 'listarDepartamentos',
                loadComponent: () => import('./business/departamento/Listar/Listar.component')
            },
            {
                path: 'GuardarDepartamentos',
                loadComponent: () => import('./business/departamento/Guardar/Guardar.component')
            },
            {
                path: 'EditarDepartamentos',
                loadComponent: () => import('./business/departamento/Editar/Editar.component')
            },
            {
                path: 'EliminarDepartamentos',
                loadComponent: () => import('./business/departamento/Eliminar/Eliminar.component')  
            },

        ]
        
    },
    {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
    },

    
];
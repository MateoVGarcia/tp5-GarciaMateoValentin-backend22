import { Routes } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { ConvertidorComponent } from './components/convertidor/convertidor.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';

export const routes: Routes = [


 {    path: '',
    component: TicketFormComponent
},
{    path: 'ticket',
    component: TicketComponent
},
{
        path: 'convertidor',
        component: ConvertidorComponent

    },
    {
    path: 'productos',
    component: ProductosComponent
},
];
import { Component } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  tickets!: Array<any>;
  constructor(private ticketService: TicketService) { 

    this.tickets=Array<any>();
    this.obtenerTickets();
  }

  obtenerTickets(){
    this.ticketService.obtenerTickets().subscribe(
      (data) => {
        this.tickets=data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  eliminarTicket(id:string){
    this.ticketService.eliminarTicket(id).subscribe(
      (data) => {
        console.log(data);
        this.obtenerTickets();
      },
      (error) => {
        console.log(error);
      }
    )
  }
}

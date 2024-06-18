import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TicketService } from '../../services/ticket.service';
import { EspectadorService } from '../../services/espectador.service';

@Component({
  selector: 'app-ticket-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ticket-form.component.html',
  styleUrl: './ticket-form.component.css'
})
export class TicketFormComponent {
  ticket!: any;
  espectadores!: Array<any>;
  precioTicket!: number;
  categoriaEspectador!: string;
  fechaCompra!: string;
  espectador!: any;


  constructor(private ticketService: TicketService, private espectadorService: EspectadorService) {
    this.espectadores = new Array<any>();
    this.obtenerEspectadores();
  }

  obtenerEspectadores() {
    this.espectadorService.obtenerEspectadores().subscribe(
      data => {
        this.espectadores = data;
      });
  }

  crearTicket() {
        // Una vez obtenido el espectador, procede a crear el ticket
        this.ticketService.crearTicket(
          this.precioTicket,
          this.categoriaEspectador,
          this.fechaCompra,
          this.espectador // Pasa el espectador obtenido como parámetro
        ).subscribe(
          data => {
            console.log('Ticket creado', data);
            // Aquí puedes manejar la respuesta después de crear el ticket
          },
          error => {
            console.error('Error al crear el ticket', error);
          }
        );
  }
}
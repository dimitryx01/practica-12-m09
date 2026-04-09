import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-hero-card',
  imports: [MatButtonModule],
  templateUrl: './hero-card.html',
  styleUrl: './hero-card.scss',
})
export class HeroCard {
  @Input() title: string = 'Servicio Especial';
  @Input() actionText: string = 'Saber más';
  @Input() description: string = 'Descripción del servicio.';
}

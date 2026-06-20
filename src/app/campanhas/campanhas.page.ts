import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton,
  IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonBadge
} from '@ionic/angular/standalone';
import { Campanha } from '../models/campanha.model';
import { CampanhaService } from '../services/campanha.service';

@Component({
  selector: 'app-campanhas',
  templateUrl: './campanhas.page.html',
  styleUrls: ['./campanhas.page.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonBadge],
})
export class CampanhasPage implements OnInit {
  campanhas: Campanha[] = [];

  constructor(private campanhaService: CampanhaService) {}

  ngOnInit() {
    this.campanhas = this.campanhaService.listarAtivas();
  }
}

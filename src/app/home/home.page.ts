import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonList, IonItem, IonLabel, IonBadge } from '@ionic/angular/standalone';
import { Crianca } from '../models/crianca.model';
import { StatusVacina } from '../models/status-vacina.enum';
import { CriancaService } from '../services/crianca.service';
import { DoseVacinaService } from '../services/dose-vacina.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonList, IonItem, IonLabel, IonBadge],
})
export class HomePage {
  criancas: Crianca[] = [];

  constructor(
    private criancaService: CriancaService,
    private doseVacinaService: DoseVacinaService
  ) {
    this.criancas = this.criancaService.listarTodas();
  }

  temPendencia(criancaId: string): boolean {
    const doses = this.doseVacinaService.listarPorCrianca(criancaId);
    return doses.some(d => d.getStatus() === StatusVacina.ATRASADA);
  }
}
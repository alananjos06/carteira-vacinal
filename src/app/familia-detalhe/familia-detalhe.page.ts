import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonButtons, IonBackButton, IonList, IonItem, IonLabel
} from '@ionic/angular/standalone';
import { Crianca } from '../models/crianca.model';
import { StatusVacina } from '../models/status-vacina.enum';
import { CriancaService } from '../services/crianca.service';
import { DoseVacinaService } from '../services/dose-vacina.service';
import { StatusBadgeComponent } from '../components/status-badge/status-badge.component';

@Component({
  selector: 'app-familia-detalhe',
  templateUrl: './familia-detalhe.page.html',
  styleUrls: ['./familia-detalhe.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonList, IonItem, IonLabel, StatusBadgeComponent],
})
export class FamiliaDetalhePage implements OnInit {
  nomeFamilia = '';
  integrantes: Crianca[] = [];

  constructor(
    private route: ActivatedRoute,
    private criancaService: CriancaService,
    private doseVacinaService: DoseVacinaService
  ) {}

  ngOnInit() {
    this.nomeFamilia = this.route.snapshot.paramMap.get('nome') ?? '';
    this.integrantes = this.criancaService.listarPorFamilia(this.nomeFamilia);
  }

  statusDaCrianca(criancaId: string): StatusVacina {
    return this.doseVacinaService.obterStatusGeral(criancaId);
  }
}
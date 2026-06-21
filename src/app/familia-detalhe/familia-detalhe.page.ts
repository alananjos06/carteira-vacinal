import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonButtons, IonBackButton, IonList, IonItem, IonLabel, IonBadge
} from '@ionic/angular/standalone';
import { Crianca } from '../models/crianca.model';
import { StatusVacina } from '../models/status-vacina.enum';
import { CriancaService } from '../services/crianca.service';
import { DoseVacinaService } from '../services/dose-vacina.service';

@Component({
  selector: 'app-familia-detalhe',
  templateUrl: './familia-detalhe.page.html',
  styleUrls: ['./familia-detalhe.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonList, IonItem, IonLabel, IonBadge],
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

  temPendencia(criancaId: string): boolean {
    const doses = this.doseVacinaService.listarPorCrianca(criancaId);
    return doses.some(d => d.getStatus() === StatusVacina.ATRASADA);
  }
}

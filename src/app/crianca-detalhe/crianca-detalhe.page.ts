import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonButtons, IonBackButton, IonList, IonItem, IonLabel
} from '@ionic/angular/standalone';
import { Crianca } from '../models/crianca.model';
import { DoseVacina } from '../models/dose-vacina.model';
import { Vacina } from '../models/vacina.model';
import { CriancaService } from '../services/crianca.service';
import { DoseVacinaService } from '../services/dose-vacina.service';
import { VacinaService } from '../services/vacina.service';
import { StatusBadgeComponent } from '../components/status-badge/status-badge.component';

interface DoseExibicao {
  dose: DoseVacina;
  vacina: Vacina | undefined;
}

@Component({
  selector: 'app-crianca-detalhe',
  templateUrl: './crianca-detalhe.page.html',
  styleUrls: ['./crianca-detalhe.page.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonList, IonItem, IonLabel, StatusBadgeComponent],
})
export class CriancaDetalhePage implements OnInit {
  crianca: Crianca | undefined;
  dosesExibicao: DoseExibicao[] = [];

  constructor(
    private route: ActivatedRoute,
    private criancaService: CriancaService,
    private doseVacinaService: DoseVacinaService,
    private vacinaService: VacinaService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.crianca = this.criancaService.buscarPorId(id);
      const doses = this.doseVacinaService.listarPorCrianca(id);
      this.dosesExibicao = doses.map(dose => ({
        dose,
        vacina: this.vacinaService.buscarPorId(dose.vacinaId)
      }));
    }
  }
}
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonButtons, IonBackButton, IonList, IonItem, IonLabel, IonBadge
} from '@ionic/angular/standalone';
import { Crianca } from '../models/crianca.model';
import { DoseVacina } from '../models/dose-vacina.model';
import { Vacina } from '../models/vacina.model';
import { StatusVacina } from '../models/status-vacina.enum';
import { CriancaService } from '../services/crianca.service';
import { DoseVacinaService } from '../services/dose-vacina.service';
import { VacinaService } from '../services/vacina.service';

interface DoseExibicao {
  dose: DoseVacina;
  vacina: Vacina | undefined;
}

@Component({
  selector: 'app-crianca-detalhe',
  templateUrl: './crianca-detalhe.page.html',
  styleUrls: ['./crianca-detalhe.page.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonList, IonItem, IonLabel, IonBadge],
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

  corStatus(status: StatusVacina): string {
    switch (status) {
      case StatusVacina.EM_DIA: return 'primary';
      case StatusVacina.PENDENTE: return 'secondary';
      case StatusVacina.ATRASADA: return 'tertiary';
      default: return 'medium';
    }
  }

  textoStatus(status: StatusVacina): string {
    switch (status) {
      case StatusVacina.EM_DIA: return 'Aplicada';
      case StatusVacina.PENDENTE: return 'Pendente';
      case StatusVacina.ATRASADA: return 'Atrasada';
      default: return '';
    }
  }
}

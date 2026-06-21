import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonButtons, IonButton, IonList, IonItem, IonLabel
} from '@ionic/angular/standalone';
import { Crianca } from '../models/crianca.model';
import { StatusVacina } from '../models/status-vacina.enum';
import { CriancaService } from '../services/crianca.service';
import { DoseVacinaService } from '../services/dose-vacina.service';
import { StatusBadgeComponent } from '../components/status-badge/status-badge.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonList, IonItem, IonLabel, StatusBadgeComponent],
})
export class HomePage {
  criancas: Crianca[] = [];

  constructor(
    private criancaService: CriancaService,
    private doseVacinaService: DoseVacinaService,
    private router: Router
  ) {
    this.criancas = this.criancaService.listarTodas();
  }

  criancasSemFamilia(): Crianca[] {
    return this.criancas.filter(c => !c.familia);
  }

  familias(): string[] {
    return this.criancaService.listarFamilias();
  }

  criancasDaFamilia(familia: string): Crianca[] {
    return this.criancaService.listarPorFamilia(familia);
  }

  statusDaCrianca(criancaId: string): StatusVacina {
    return this.doseVacinaService.obterStatusGeral(criancaId);
  }

  statusDaFamilia(familia: string): StatusVacina {
    const statusDeCadaCrianca = this.criancasDaFamilia(familia)
      .map(c => this.statusDaCrianca(c.id));
    if (statusDeCadaCrianca.includes(StatusVacina.ATRASADA)) return StatusVacina.ATRASADA;
    if (statusDeCadaCrianca.includes(StatusVacina.PENDENTE)) return StatusVacina.PENDENTE;
    return StatusVacina.EM_DIA;
  }

  irParaFamilia(familia: string) {
    this.router.navigate(['/familia', familia]);
  }
}
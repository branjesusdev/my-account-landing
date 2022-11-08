import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { take } from 'rxjs/operators';

// RESOURCES

import { SpinnerService } from '@shared/services/code/spinner.service';
import { ToastMessageService } from '@shared/services/code/toast-message.service';
import { StatisticsService } from '@statistics/services/statistics.service';
import { MESSAGES_DEFAULT } from '@shared/config/messages';

@Component({
  selector: 'app-statistics-render',
  templateUrl: './statistics-render.component.html',
  styleUrls: ['./statistics-render.component.scss'],
})
export class StatisticsRenderComponent implements OnInit {
  iframeRender: SafeHtml = ``;

  constructor(
    private readonly _SERVICE: StatisticsService,
    private readonly _TOAST: ToastMessageService,
    public readonly _SPINNER: SpinnerService,
    private sanitizer: DomSanitizer
  ) {
    this.getPowerBI();
  }

  ngOnInit(): void {}

  private getPowerBI(): void {
    this._SPINNER.spinnerStatus = true;
    this._SERVICE
      .getPowerBI()
      .pipe(take(1))
      .subscribe({
        next: (powerBI) => {
          if (powerBI.code == 200) {
            const frame = `<iframe title="MODELO_SOSTENIBILIDAD_TH_ECSISTA_BILEVEL7" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiZGFlMTBhZGYtZjE3NC00ODU0LWJlNWUtZjZiMjdhYTAwNTkxIiwidCI6IjU3ZTM1Nzc2LWMzZDMtNGQxMS1iNGJkLTMzYTZlMzk5MTNlMSJ9&pageName=ReportSection3b053f2c00e09d652eed" frameborder="0" allowFullScreen="true"></iframe>`;
            this.iframeRender = this.sanitizer.bypassSecurityTrustHtml(frame);
          } else this._TOAST.showError(powerBI.message);
          this._SPINNER.spinnerStatus = false;
        },
        error: (_) => {
          this._TOAST.showError(MESSAGES_DEFAULT.ERROR_CONNECT);
          this._SPINNER.spinnerStatus = false;
        },
      });
  }
}

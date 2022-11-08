import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry} from 'rxjs/operators';

// ENTITYS

import { OutResponse } from '@shared/models/out/out-response.interface';
import { PATHS } from '@shared/config/paths';
import { OutPowerBI } from '@statistics/models/out-power-bi.class';

@Injectable()
export class StatisticsService {

  constructor(
    private _HTTP: HttpClient
    ) {}

  getPowerBI() : Observable<OutResponse<OutPowerBI>> {
    const url: string = `${PATHS.GET_POWER_BI}`;
    return this._HTTP.get<OutResponse<OutPowerBI>>(url).pipe(
      retry(2)
    );
  }

}

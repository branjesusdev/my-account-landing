import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry} from 'rxjs/operators';

// ENTITYS

import { OutResponse } from '@shared/models/out/out-response.interface';
import { PATHS } from '@shared/config/paths';
import { OutSequence } from '../models/out/out-sequence.interface';


@Injectable()
export class SequenceService {

  constructor(
    private _HTTP: HttpClient
    ) {}

  getSequenceByEntityId( id : number ) : Observable<OutResponse<OutSequence[]>> {
    const url: string = `${PATHS.GET_SEQUENCE_BY_ENTITY.replace('${idEntity}', String(id))}`;

    return this._HTTP.get<OutResponse<OutSequence[]>>(url).pipe(
      retry(2)
    );
  }


}

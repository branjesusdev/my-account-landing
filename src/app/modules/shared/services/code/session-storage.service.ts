import { Injectable } from '@angular/core';

// ENTITYS

import { OutDataBrowser } from '@shared/models/out/data-browser.interface';

const  objectError = {
  responseCode: 98,
  responseMessage: 'Key no inicializada',
};

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() {}

  fn__sessionStorage = (function () {

    return {
      set: function (key: string, value: any | object | number | string ) {

        if( typeof value === 'object' )
          value = JSON.stringify(value)

        sessionStorage.setItem(key.trim(), value);

      },

      get: function <T>(key: string): OutDataBrowser<T> {

        var data = sessionStorage[key.trim()];
        if (data === undefined) return objectError as OutDataBrowser<T>;

        const ret = {
          responseCode: 200,
          responseMessage: '',
          data: data.includes(['{' && '}' && ':'])
            ? (JSON.parse(data) as T)
            : data,
        };

        return ret as OutDataBrowser<T>;
      },

      getItem: function (nameId: string, key: string): OutDataBrowser<string> {
        var data = sessionStorage[nameId];
        if (data === undefined) throw objectError;

        let store;

        data.includes(['{' && '}' && ':'])
          ? (store = JSON.parse(data))
          : (store = data);

        if (key && store) {
          if (store.hasOwnProperty(key))
            return { responseCode: 200, responseMessage: '', data: store[key] };
        }

        return { responseCode: 200, responseMessage: '', data: '' };
      },

      remove: function (key: string) {
        sessionStorage.removeItem(key);
      },

      removeArray: function (items: Array<string>) {
        items.forEach((x) => {
          sessionStorage.removeItem(x);
        });
      }
    };
  })();


}

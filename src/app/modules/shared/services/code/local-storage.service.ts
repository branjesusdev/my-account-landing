import { Injectable } from '@angular/core';

// ENTITYS

import { OutDataBrowser } from '@shared/models/out/data-browser.interface';

@Injectable()
export class LocalStorageService {

  constructor() { }


  /**
   *
   *
   * Almacenar en Local Store
   */
  fn__localStorage = (function () {

    var objectError = { responseCode: 98, responseMessage: 'Key no inicializada' };

    return {

      set: function (key : string, value : any) {
        localStorage.setItem(key, JSON.stringify(value));
      },

      get: function<T> (key : string ) : OutDataBrowser<T> {

        var data = localStorage[key];
        if (data === undefined) return objectError as OutDataBrowser<T>;

        const ret = {
          responseCode : 200 ,
          responseMessage : '',
          data : (data.includes(['{' && '}' && ':'])) ? JSON.parse(data) as T : data
        }

        return ret as OutDataBrowser<T>;

      },

      getItem: function (nameId : string, key : string ) : OutDataBrowser<string> {

        var data = localStorage[nameId];
        if (data === undefined) throw objectError;

        let store;

        (data.includes(['{' && '}' && ':'])) ? store = JSON.parse(data) : store = data

        if (key && store) {
          if (store.hasOwnProperty(key)) return {responseCode : 200 , responseMessage : '', data : store[key]};
        }

        return {responseCode : 200 , responseMessage : '', data : ''};
      },

      remove: function (key : string) {
        localStorage.removeItem(key);
      },

      removeArray: function (items : Array<string>) {
        // k Array = ['', '', ...]
        items.forEach((x) => {
          localStorage.removeItem(x);
        });
      },
    };
  })();

}

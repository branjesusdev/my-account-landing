import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsUIService {

  constructor() { }

  /**
   *
   * Formatear un número a moneda
   * Ej: 1000 = $1.000
   * @param value
   * @returns
   */
  fn__formatCurrency( value : string | number) : string {

    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(Number(value))

  }

  /**
   *
   * Formatear un número de célular
   * Ej: 3209881333 = $1.000
   * @param str
   * @returns
   */
  fn__formatPhoneNumber(str : string, separator : boolean = false ) : string {

    let cleaned = (str).replace(/\D/g, '');
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

    if (match) {
      if(separator)
        return '(' + match[1] + ') ' + match[2] + '-' + match[3]
      else
        return '' + match[1] + ' ' + match[2] + ' ' + match[3]
    }

    return str

  };

  /**
   * Obtener Fecha y Hora Actual
   */
  fn__getDate = function (separador : string = '-') {

    var date = new Date();
    var dateFormat = date.getFullYear() + separador +
        date.getMonth() + separador +
        date.getDay() + " " +
        date.getHours() + ':' +
        date.getMinutes() + ':' +
        date.getSeconds()

    return dateFormat;

  }

  /**
   * Fecha para service
   * Ej: 20220928214853.871
   * yyyyMMddhhmmss.SSS
   */
  fn__getDateService = function () {

    var date =new Date();

    const year  = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day   = date.getDate().toString().padStart(2, "0");
    const hour   = date.getHours().toString().padStart(2, "0");
    const min   = date.getMinutes().toString().padStart(2, "0");
    const sec   = date.getSeconds().toString().padStart(2, "0");
    const mil   = date.getMilliseconds().toString().padStart(3, "0");
    const formatDate = `${ year + month + day + hour + min + sec + '.' + mil }`

    return formatDate;

  }

  /**
   * Formatear Fecha
   * 2020-04-03 20:30:55
   * @return '03-04-2020 08:30 PM'
   * @param {String} dateIn
   */
  fn__formaterFecha = function (dateIn : string ) {

    var allDate = dateIn.split(' ');
    var thisDate = allDate[0].split('-');

    if (thisDate.length == 1)
        thisDate = allDate[0].split('/');

    var thisTime = allDate[1].split(':');
    var day = thisDate[2];
    var newDate = [(day.length == 1) ? '0' + day : day, thisDate[1], thisDate[0]].join("-");

    var suffix = (Number(thisTime[0]) >= 12) ? " PM" : " AM";
    var hour = (Number(thisTime[0]) > 12) ? Number(thisTime[0]) - 12 : thisTime[0];
    var hour = hour < 10 ? "0" + hour : hour;
    var min = (thisTime[1].length == 1) ? '0' + thisTime[1] : thisTime[1];
    var sec = thisTime[2].split('.');
    var newTime = hour + ':' + min + '.' + sec[0] + suffix;

    return newDate + ' / ' + newTime;

  }


  /**
  * Eliminar espacios en blanco
  * @param {String} texto
  */
  fn__deleteTrim = function (texto = '') {

    let txt = texto.toString();
    txt = txt.replace(/ /g, "");

    return txt;

  }

  /**
  * Retornar solo Numeros de una cadena
  * @param {String} Cadena
  * @returns { Int } Replace
  */
  fn__replaceGetNumbers = function (cadena = '') {

    let num = parseInt(cadena.toString().replace(/[^0-9]/g, ''));
    return num;

  }



}

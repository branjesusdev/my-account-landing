export class OutDataBrowser<T> {

  responseCode:    number;
  responseMessage: string;
  data ?:    T;

  constructor( _response : any ) {
    this.responseCode = _response?.code || '';
    this.responseMessage = _response?.message || '';
    this.data = _response?.data || {};
  }

}

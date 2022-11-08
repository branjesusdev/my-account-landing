export class OutResponse<T> {
  code:    number;
  message: string;
  response:    T;

  constructor( _response : any ) {
    this.code = _response?.code || '';
    this.message = _response?.message || '';
    this.response = _response?.response || {};
  }

}

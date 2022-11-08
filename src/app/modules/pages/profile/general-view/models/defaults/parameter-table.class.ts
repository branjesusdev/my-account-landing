export class ParameterTable {
  idParameter:   number;
  nameParameter: string;
  creationDate:  string;
  subParams:     SubParamTable[];

  constructor(
    idParameter:   number = 0,
    nameParameter: string = '',
    creationDate:  string = '',
    subParams:     SubParamTable[] = [],
  ) {
    this.idParameter = idParameter
    this.nameParameter = nameParameter
    this.creationDate = creationDate
    this.subParams = subParams
  }
}

export class SubParamTable {
  idParameter:   number;
  nameParameter: string;
  idSubparameter:     number;
  nameSubparameter:   string;
  detailSubparameter: string;
  creationDate:       string;
  vigent:             string;
  constructor(
    idParameter:   number,
    nameParameter: string,
    idSubparameter:     number,
    nameSubparameter:   string,
    detailSubparameter: string,
    creationDate:       string,
    vigent:             string,
  ){
    this.idParameter = idParameter;
    this.nameParameter = nameParameter;
    this.idSubparameter = idSubparameter
    this.nameSubparameter = nameSubparameter
    this.detailSubparameter = detailSubparameter
    this.creationDate = creationDate
    this.vigent = vigent

  }
}

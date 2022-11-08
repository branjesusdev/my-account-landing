export interface OutParameterSubparameters {
  idParameter:   number;
  nameParameter: string;
  creationDate:  string;
  subParams:     SubParam[];
}

export interface SubParam {
  idSubparameter:     number;
  nameSubparameter:   string;
  detailSubparameter: string;
  creationDate:       string;
  vigent:             string;
}

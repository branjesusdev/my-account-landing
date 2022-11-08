export class UsersAllTable {
  id: number;
  activate: number;
  tblActivateName: string;
  firstName: string;
  lastName: string;
  tblFirstLastName: string;
  creationDate: string;
  idRol: number;
  tblRolName: string;
  phone: string;
  email: string;
  documentId: number;
  tblDocumentIdName: string;
  document: number;
  entidadFk: number;
  nameEntity: string;
  grade: string;
  unit: string;
  position: string;
  directionGroup: string;
  contactPerson: string;
  responsible: string;
  coResponsible: string;
  vigent: string;

  constructor(
    id: number = 0,
    activate: number = 0,
    tblActivateName: string = '',
    firstName: string = '',
    lastName: string = '',
    tblFirstLastName: string = '',
    creationDate: string = '',
    idRol: number = 0,
    tblRolName: string = '',
    phone: string = '',
    email: string = '',
    documentId: number = 0,
    tblDocumentIdName: string = '',
    document: number = 0,
    entidadFk: number = 0,
    nameEntity: string = '',
    grade: string = '',
    unit: string = '',
    position: string = '',
    directionGroup: string = '',
    contactPerson: string = '',
    responsible: string = '',
    coResponsible: string = '',
    vigent: string = '',
  ) {
    this.id = id
    this.activate = activate
    this.tblActivateName = tblActivateName
    this.firstName = firstName
    this.lastName = lastName
    this.tblFirstLastName = tblFirstLastName
    this.creationDate = creationDate
    this.idRol = idRol
    this.tblRolName = tblRolName
    this.phone = phone
    this.email = email
    this.documentId = documentId
    this.tblDocumentIdName = tblDocumentIdName
    this.document = document
    this.entidadFk = entidadFk
    this.nameEntity = nameEntity
    this.grade = grade
    this.unit = unit
    this.position = position
    this.directionGroup = directionGroup
    this.contactPerson = contactPerson
    this.responsible = responsible
    this.coResponsible = coResponsible
    this.vigent = vigent
  }
}

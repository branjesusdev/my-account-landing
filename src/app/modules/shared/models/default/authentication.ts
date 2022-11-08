export class AuthenticationUser {
  user: User;
  constructor(user: User = new User()) {
    this.user = user;
  }
}

export class User {
  userId: number;
  name: string;
  lastName: string;
  rolName: string;
  rolId: number;
  phone: string;
  mail: string;
  documentId: number;
  nameEntity: string;
  idEntity: number;
  access_token: string;

  constructor(
    userId: number = 0,
    name: string = '',
    lastName: string = '',
    rolName: string = '',
    rolId: number = 0,
    phone: string = '',
    mail: string = '',
    documentId: number = 0,
    nameEntity: string = '',
    idEntity: number = 0,
    access_token: string = ''
  ) {
    this.userId = userId;
    this.name = name;
    this.lastName = lastName;
    this.rolName = rolName;
    this.rolId = rolId;
    this.phone = phone;
    this.mail = mail;
    this.documentId = documentId;
    this.nameEntity = nameEntity
    this.idEntity = idEntity
    this.access_token = access_token
  }
}

// Converts JSON strings to/from your types
export class Convert {
  public static toAuthentication(json: string): AuthenticationUser {
    return JSON.parse(json);
  }

  public static AuthenticationToJson(value: AuthenticationUser): string {
    return JSON.stringify(value);
  }
}

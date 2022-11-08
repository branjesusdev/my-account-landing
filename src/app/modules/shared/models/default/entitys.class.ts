export class OutEntitys {
  idEntity: number;
  nameEntity: string;

  constructor(id: number, name: string) {
    this.idEntity = id;
    this.nameEntity = name;
  }
}

// Converts JSON strings to/from your types
export class Convert {
  public static toOutEntitys(json: string): OutEntitys {
    return JSON.parse(json);
  }

  public static outEntitysToJson(value: OutEntitys): string {
    return JSON.stringify(value);
  }
}

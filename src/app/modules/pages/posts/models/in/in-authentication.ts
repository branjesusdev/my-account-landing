
export interface InAuthentication {
  idEntity: number;
  email:         string;
  password:      string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toInAuthentication(json: string): InAuthentication {
      return JSON.parse(json);
  }

  public static inAuthenticationToJson(value: InAuthentication): string {
      return JSON.stringify(value);
  }
}

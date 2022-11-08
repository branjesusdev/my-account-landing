
export interface InPosts {
  idEntity: number;
  email:         string;
  password:      string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toInPosts(json: string): InPosts {
      return JSON.parse(json);
  }

  public static InPostsToJson(value: InPosts): string {
      return JSON.stringify(value);
  }
}

export class Hexagon {
  docID: string;
  createdAt: Date;
  isArchived: boolean;
  location: number;
  postingUserID: string;
  resource: string;
  text: string;
  thumbResource: string;
  type: string;
  views: number;
  coverText: string;

  toString(): string {
    return this.docID;
  }
}

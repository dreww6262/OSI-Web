import { Injectable } from '@angular/core';
import {Hexagon} from '../_models/hexagon';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class HexagonService {

  constructor(private firestore: AngularFirestore) { }

  async getHexagons(username: string): Promise<Array<Hexagon>>{
    let hexagons: Array<Hexagon> = [];
    const snapshot = this.firestore.collection('Hexagons2', ref => ref.where('postingUserID', '==', username)).get();
    await snapshot.forEach(snap => {
      hexagons = [];
      snap.docs.forEach(doc => {
        const hex = doc.data() as Hexagon;
        if (!hex.isArchived) {
          hex.thumbResource = hex.thumbResource.split('/').join('%2F');
          hexagons.push(hex);
          console.log(hex.docID);
        }
      });
    });
    const reOrderedHexagons = new Array<Hexagon>(hexagons.length);
    const unassigned = [];
    hexagons.forEach(value => {
      if (reOrderedHexagons.length < value.location && reOrderedHexagons[value.location] === null) {
        reOrderedHexagons[value.location] = value;
      }
      else {
        unassigned.push(value);
      }
    });
    unassigned.forEach(value => {
      const loc = reOrderedHexagons.findIndex(this.isNullOrUndefined);
      if (loc === null || loc < 0) {
        return;
      }
      reOrderedHexagons[loc] = value;
    });
    return reOrderedHexagons;
  }

  isNullOrUndefined(hex: Hexagon): boolean {
    return hex === null || hex === undefined;
  }
}

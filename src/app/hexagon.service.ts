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
        hexagons.push(hex);
        console.log(hex.docID);
      });
    });
    return hexagons;
  }
}

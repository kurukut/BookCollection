import { Column } from "typeorm";

export class Name {
 
  // constructor(name) {
  //   this.first = name.first;
  //   this.last = name.last;
  // }
  @Column()
  first: string;

  @Column()
  last: string;
}

import { IS_ALPHA } from "class-validator";
import { Column } from "typeorm";

export class Name {
  @Column()
  first: string;

  @Column()
  last: string;
}

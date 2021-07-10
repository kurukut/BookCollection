
import { Entity, Unique } from "typeorm";

import { PersonInterface } from "../functionalinterfaces/PersonInterface";

@Entity()
export class Author extends PersonInterface {}

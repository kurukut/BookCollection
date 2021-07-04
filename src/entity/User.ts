
import {Entity, Column} from "typeorm";

import { PersonInterface } from "../functionalinterfaces/PersonInterface";
import { accessRole } from "../roles/accessRole";


@Entity()
export class User extends PersonInterface {

    @Column({
        type: "enum",
        enum: accessRole
    }
    )
    role : accessRole;
}

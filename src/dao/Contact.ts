import { PrimaryGeneratedColumn, Column } from "typeorm";

export  class Contact {

    @Column()
    phone: number;

    @Column()
    email: string;

    @Column()
    address: string;

}
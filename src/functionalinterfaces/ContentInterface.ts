import { PrimaryGeneratedColumn, Column } from "typeorm";

export abstract class ContentInterface {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

}
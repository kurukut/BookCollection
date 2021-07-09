import { PrimaryGeneratedColumn, Column, Unique, Index } from "typeorm";

export abstract class ContentInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Index({ unique: true })
  name: string;

  @Column()
  description: string;
}

import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./entities.users";

@Entity('tab_produts')
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;
 
  @ManyToOne(()=>User, users=>users.products)
  @JoinColumn({name:'product_id'})
  users:User
}
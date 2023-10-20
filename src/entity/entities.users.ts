import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./entities.products";

@Entity('tab_users')
export class User {
    @PrimaryGeneratedColumn()
    id: number
    @Column({type: 'text'})
    name: string
    @Column({type: 'text'})
    username: string
    @Column({type: 'text'})
    email: string
    @Column({type: 'text'})
    telefone: string
    @Column({type: 'text'})
    password: string

    @OneToMany(()=> Product, products => products.users)
    products: Product[];

    
}

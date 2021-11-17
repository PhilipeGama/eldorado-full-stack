import {Column, CreateDateColumn, Entity, UpdateDateColumn, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, ManyToOne, JoinColumn} from "typeorm";
import { Category } from './Category';

@Entity()
export default class News {

    @PrimaryGeneratedColumn('increment')
    public id: number;

    @Column()
    public title: string;

    @Column()
    public news_body: string;

    @Column()
    public cover: string;

    @Column()
    public posted_by: string;

    @Column()
    public is_actived: boolean;

    @ManyToOne(() => Category)
    @JoinColumn({
        name: 'category_id',
        referencedColumnName: 'id'
    })
    public category: Category

    @CreateDateColumn()
    public created_at: Date;
    
    @UpdateDateColumn()
    public updated_at: Date;

    @BeforeInsert()
    public createAt() {
        this.created_at = new Date();
    }

    @BeforeUpdate()
    public updatedAt() {
        this.updated_at = new Date();
    }

}
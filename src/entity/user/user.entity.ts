import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    constructor(
        email: string,
        userName: string,
        password: string,
        mobilePhone: string,
        avatar: string,
        createAt: string,
        token: string,
        deadline: string,
        isActive: boolean,
        isDeleted: boolean) {
        this.email = email;
        this.userName = userName;
        this.password = password;
        this.mobilePhone = mobilePhone;
        this.avatar = avatar;
        this.createAt = createAt;
        this.token = token;
        this.deadline = deadline;
        this.isActive = isActive;
        this.isDeleted = isDeleted;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    userName: string;

    @Column()
    password: string;

    @Column()
    mobilePhone: string;

    @Column()
    avatar: string;

    @Column()
    createAt: string;

    @Column()
    token: string;

    @Column()
    deadline: string;

    @Column()
    isActive: boolean;

    @Column()
    isDeleted: boolean;
}
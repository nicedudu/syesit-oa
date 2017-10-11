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
        isActive: boolean,
        isDeleted: boolean) {
        this.email = email;
        this.userName = userName;
        this.password = password;
        this.mobilePhone = mobilePhone;
        this.avatar = avatar;
        this.createAt = createAt;
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
    token?: string | undefined;

    @Column()
    deadline?: string | undefined;

    @Column()
    isActive?: boolean | undefined;

    @Column()
    isDeleted: boolean;
}
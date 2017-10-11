import { Component } from '@nestjs/common';
import { Repository, ObjectType } from 'typeorm';
import { IService } from './interface/service.interface';
import { TypeOrmDatabaseService } from './typeOrm.database.service';
import { Observable } from 'rxjs/Observable';

export abstract class DatabaseService<T> implements IService<T>{
    private databaseService: TypeOrmDatabaseService;
    private entity: { new(...e): T }

    /**
     * Creates an instance of DatabaseService.
     * @param {TypeOrmDatabaseService} databaseService 
     * @param {{ new(...e): T }} entity 
     * @memberof DatabaseService
     */
    constructor(databaseService: TypeOrmDatabaseService, entity: { new(...e): T }) {
        this.databaseService = databaseService;
        this.entity = entity;
    }

    public get repository(): Promise<Repository<T>> {
        return this.databaseService.getRepository<T>(this.entity);
    }

    public async add(entity: T): Promise<T> {
        return (await this.repository).save(entity);

    }

    public async addAll(entitys: T[]): Promise<T[]> {
        return (await this.repository).save(entitys);
    }

    public async getAll(): Promise<T[]> {
        return (await this.repository).find();
    }

    public async get(id: number): Promise<T> {
        return (await this.repository).findOneById(id);
    }

    public async update(entity: T): Promise<T> {
        // return (await this.repository).update(user);
        return await entity;
    }

    public async remove(entity: T): Promise<T> {
        return (await this.repository).remove(entity);
    }
}
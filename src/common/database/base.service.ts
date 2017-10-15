import { Component } from '@nestjs/common';
import { Repository, ObjectType } from 'typeorm';
import { IService } from './interface/service.interface';
import { DatabaseService } from './database.service';
import { Observable } from 'rxjs/Observable';

@Component()
export abstract class BaseService<T> implements IService<T>{
    private databaseService: DatabaseService;
    private entity: { new(...e): T }

    /**
     * Creates an instance of BaseService.
     * @param {{ new(...e): T }} entity 
     * @memberof BaseService
     */
    constructor(entity: { new(...e): T }) {
        this.entity = entity;
    }

    /**
     * 
     * 
     * @readonly
     * @type {Promise<Repository<T>>}
     * @memberof BaseService
     */
    public get repository(): Promise<Repository<T>> {
        if (this.databaseService) { this.databaseService.getRepository<T>(this.entity); }
        else {
            this.databaseService = new DatabaseService()
        }
        return this.databaseService.getRepository<T>(this.entity);
    }

    /**
     * 
     * 
     * @param {T} entity 
     * @returns {Promise<T>} 
     * @memberof BaseService
     */
    public async add(entity: T): Promise<T> {
        return (await this.repository).save(entity);

    }

    /**
     * 
     * 
     * @param {T[]} entitys 
     * @returns {Promise<T[]>} 
     * @memberof BaseService
     */
    public async addAll(entitys: T[]): Promise<T[]> {
        return (await this.repository).save(entitys);
    }

    /**
     * 
     * 
     * @returns {Promise<T[]>} 
     * @memberof BaseService
     */
    public async getAll(): Promise<T[]> {
        return (await this.repository).find();
    }

    /**
     * 
     * 
     * @param {number} id 
     * @returns {Promise<T>} 
     * @memberof BaseService
     */
    public async get(id: number): Promise<T> {
        return (await this.repository).findOneById(id);
    }

    /**
     * 
     * 
     * @param {T} entity 
     * @returns {Promise<T>} 
     * @memberof BaseService
     */
    public async update(entity: T): Promise<T> {
        // return (await this.repository).update(user);
        return await entity;
    }

    /**
     * 
     * 
     * @param {T} entity 
     * @returns {Promise<T>} 
     * @memberof BaseService
     */
    public async remove(entity: T): Promise<T> {
        return (await this.repository).remove(entity);
    }
}
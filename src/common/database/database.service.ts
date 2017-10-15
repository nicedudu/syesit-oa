import { Component } from '@nestjs/common';
import { createConnection, Connection, EntityManager, Repository, ObjectType, getConnection } from 'typeorm';
import { DatabaseConfig } from './database.config';

@Component()
export class DatabaseService {

    /**
     * 
     * 
     * @private
     * @type {Connection}
     * @memberof DatabaseService
     */
    private _connection: Connection;

    /**
     * Creates an instance of DatabaseService.
     * @memberof DatabaseService
     */
    constructor() { }

    /**
     * 
     * 
     * @readonly
     * @private
     * @type {Promise<Connection>}
     * @memberof DatabaseService
     */
    private get connection(): Promise<Connection> {
        if (this._connection) return Promise.resolve(this._connection);
        return createConnection().then(connection => {
            this._connection = connection;
            return connection;
        }).catch(error => {
            console.log(this._connection);
            throw error;
        });
    }

    /**
     * 
     * 
     * @returns {Promise<EntityManager>} 
     * @memberof DatabaseService
     */
    public async getEntityManager(): Promise<EntityManager> {
        return (await this.connection).manager;
    }

    /**
     * 
     * 
     * @template T 
     * @param {(ObjectType<T> | string)} entityClassOrName 
     * @returns {Promise<Repository<T>>} 
     * @memberof DatabaseService
     */
    public async getRepository<T>(entityClassOrName: ObjectType<T> | string): Promise<Repository<T>> {
        return (await this.connection).getRepository<T>(entityClassOrName);
    }
}
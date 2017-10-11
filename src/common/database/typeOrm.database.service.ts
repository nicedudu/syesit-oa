import { Component } from '@nestjs/common';
import { createConnection, Connection, EntityManager, Repository, ObjectType } from 'typeorm';
import { TypeOrmDatabaseConfig } from './typeOrm.database.config';

/**
 * 
 * 
 * @export
 * @class TypeOrmDatabaseService
 */
@Component()
export class TypeOrmDatabaseService {

    /**
     * 
     * 
     * @private
     * @type {Connection}
     * @memberof TypeOrmDatabaseService
     */
    private _connection: Connection;

    /**
     * Creates an instance of TypeOrmDatabaseService.
     * @param {TypeOrmDatabaseConfig} databaseConfig 
     * @memberof TypeOrmDatabaseService
     */
    constructor() { }

    /**
     * 获取数据库连接
     * 
     * @readonly
     * @private
     * @type {Promise<Connection>}
     * @memberof TypeOrmDatabaseService
     */
    private get connection(): Promise<Connection> {
        if (this._connection) return Promise.resolve(this._connection);
        return createConnection().then(connection => {
            this._connection = connection;
            return connection;
        }).catch(error => {
            console.log(error);
            throw error;
        });
    }

    /**
     * 
     * 
     * @returns {Promise<EntityManager>} 
     * @memberof TypeOrmDatabaseService
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
     * @memberof TypeOrmDatabaseService
     */
    public async getRepository<T>(entityClassOrName: ObjectType<T> | string): Promise<Repository<T>> {
        return (await this.connection).getRepository<T>(entityClassOrName);
    }
}
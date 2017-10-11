import { Component } from '@nestjs/common';
import { ConnectionOptions } from 'typeorm';

/**
 * 
 * 
 * @export
 * @abstract
 * @class TypeOrmDatabaseConfig
 */
@Component()
export abstract class TypeOrmDatabaseConfig {

    /**
     * 
     * 
     * @abstract
     * @returns {ConnectionOptions} 
     * @memberof TypeOrmDatabaseConfig
     */
    abstract getConfiguration(): ConnectionOptions;
}
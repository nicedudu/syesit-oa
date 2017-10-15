import { Component } from '@nestjs/common';
import { ConnectionOptions } from 'typeorm';

/**
 * 
 * 
 * @export
 * @abstract
 * @class DatabaseConfig
 */
@Component()
export abstract class DatabaseConfig {

    /**
     * 
     * 
     * @abstract
     * @returns {ConnectionOptions} 
     * @memberof DatabaseConfig
     */
    abstract getConfiguration(): ConnectionOptions;
}
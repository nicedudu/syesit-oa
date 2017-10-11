import { Component } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { IService } from '../../common/database/interface/service.interface';
import { TypeOrmDatabaseService } from '../../common/database/typeOrm.database.service';
import {DatabaseService} from '../../common/database/database.service';

@Component()
export class UserSercvice extends DatabaseService<User>{
    
    /**
     * Creates an instance of UserSercvice.
     * @param {TypeOrmDatabaseService} _databaseService 
     * @memberof UserSercvice
     */
    constructor(private _databaseService: TypeOrmDatabaseService) {
        super(_databaseService,User);
    }
}

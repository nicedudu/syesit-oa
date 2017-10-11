import { Component } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { IService } from '../../common/database/interface/service.interface';
import { TypeOrmDatabaseService } from '../../common/database/typeOrm.database.service';
import { DatabaseService } from '../../common/database/database.service';

@Component()
export class UserSercvice extends DatabaseService<User>{

    /**
     * Creates an instance of UserSercvice.
     * @param {TypeOrmDatabaseService} _databaseService 
     * @memberof UserSercvice
     */
    constructor(private _databaseService: TypeOrmDatabaseService) {
        super(_databaseService, User);
        this.seed();
    }

    private async seed() {
        const user = await this.repository;
        let count = await user.count();
        if (count == 0) {
            const users = await this.addAll([
                new User('kevin@test.com', 'Kevin', '123456', '158xxxxxxxx', 'kevin.png', '2017-10-11', 'token', '2017-10-11', true, false)
            ]);
            console.log('Seeded user.');
            console.log(users);
        }
    }
}

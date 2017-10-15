import { Component } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { IService } from '../../common/database/interface/service.interface';
import { DatabaseService } from '../../common/database/database.service';
import { BaseService } from '../../common/database/base.service';

@Component()
export class UserSercvice extends BaseService<User>{

    /**
     * Creates an instance of UserSercvice.
     * @memberof UserSercvice
     */
    constructor() {
        super(User);
        this.seed();
    }

    /**
     * 
     * 
     * @private
     * @memberof UserSercvice
     */
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

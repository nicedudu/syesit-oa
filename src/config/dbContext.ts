import { getConnection, ConnectionOptions, Connection, createConnection } from 'typeorm';

export class DbContext {
    dbConnection: Connection;
    constructor(object?: ConnectionOptions) {
        if (object) {
            createConnection(object).then(async connection => {
                this.dbConnection = await connection;
            })
        }else{
            createConnection().then(async connection => {
                this.dbConnection = await connection;
            })
        }
    }

    public  get connection() {
        return this.dbConnection;
    }
}

import { getConnection, ConnectionOptions, Connection, createConnection } from 'typeorm';

export class DbContext {
    dbConnection: Connection;
    constructor(object?: ConnectionOptions) {
        if (object) {
            createConnection(object).then(async connection => {
                this.dbConnection = await connection;
                console.log('options ',connection)
            })
        }else{
            createConnection().then(async connection => {
                this.dbConnection = await connection;
                console.log('xxx ',connection)
            })
        }
    }

    public get connection() {
        console.log('aaa ',this.dbConnection)
        return this.dbConnection;
    }
}

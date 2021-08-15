import pgp from "pg-promise";
import DataBase from "../Database";

export default class PgPromiseDatabase implements DataBase {
    pgp: any;

    constructor() {
        this.pgp = pgp()("postgres://postgres:secret@localhost:5432/app");
    }

    many(query: string, parameters: any) {
        return this.pgp.query(query, parameters);
    }
    one(query: string, parameters: any) {
        return this.pgp.oneOrNone(query, parameters);
    }

}
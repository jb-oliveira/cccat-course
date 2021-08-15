export default interface DataBase {
    many(query: string, parameters: any): any;
    one(query: string, parameters: any): any;
}
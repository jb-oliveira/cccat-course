import PgPromiseDatabase from "../../src/infra/database/database/PgPromiseDatabase";

test("Deve conectar ao banco de dados e listar os items", async function(){
    const pgpd = new PgPromiseDatabase();
    const items = await pgpd.many("select * from ccca.item", []);
    expect(items).toHaveLength(3);
});

test("Deve conectar ao banco de dados e listar um item", async function(){
    const pgpd = new PgPromiseDatabase();
    const item = await pgpd.one("select * from ccca.item where id = $1", [ 1 ]);
    expect(item.description).toBe("Guitarra");
});

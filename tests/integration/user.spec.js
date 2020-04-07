const req = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('USER', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    })

    it('should be able to create a new USER', async () => {
        const res = await req(app)
            .post('/users')
            .send({
                name: "José das Neves",
                email: "ze@fuza.com.br",
                age: "44",
                gender: "Male",
                password: "pass123"
            });

        expect(res.body).toHaveProperty('id');
        expect(res.body.id).toHaveLength(8);
    })
})
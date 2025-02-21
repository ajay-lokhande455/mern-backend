const request = require('supertest');
const app = require('../app');

describe('Product API', () => {
    it('should create a new product', async () => {
        const res = await request(app)
            .post('/products')
            .send({ name: 'Test Product', price: 10 });

        expect(res.statusCode).toEqual(201);
        expect(res.body.success).toBe(true);
        expect(res.body.product.name).toBe('Test Product');
    });

    it('should retrieve all products', async () => {
        const res = await request(app).get('/products');
        expect(res.statusCode).toEqual(200);
        expect(res.body.success).toBe(true);
        expect(Array.isArray(res.body.product)).toBe(true);
    });

    it('should return 404 if product not found', async () => {
        const res = await request(app).get('/products/999');
        expect(res.statusCode).toEqual(404);
    });
});

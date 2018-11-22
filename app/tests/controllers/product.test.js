
import * as productController from '../../src/controllers/product';

describe('Product test', () => {
	test('simple test', async () => {

		const send = jest.fn();
		const res = {
			send,
		};
		await productController.test({}, res);
		expect(send.mock.calls).toHaveLength(1);
		expect(send.mock.calls[0][0]).toBe('Hello!');
	});
});
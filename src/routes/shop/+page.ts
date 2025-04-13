import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	try {
		const productRes = await fetch('https://dummyjson.com/products?limit=12');
		const productData = await productRes.json();
		// console.log('productData.products', productData.products);
		return {
			products: productData.products
		};
	} catch (error) {
		console.log('error', error);
		return { message: 'Error!!!' };
	}
};

// ORIGINAL CODE FROM TUTORIAL

// export const load = (async ({ fetch }) => {
// 	const fetchProducts = async () => {
// 		const productRes = await fetch('https://dummyjson.com/products?limit=10');
// 		const productData = await productRes.json();
// 		console.log(productData.products);
// 		return productData.products;
// 	};

// 	return {
// 		products: fetchProducts()
// 	};
// }) satisfies PageLoad;

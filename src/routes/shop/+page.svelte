<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	$inspect(data.products);
	let products = data.products;
	$inspect(products);
</script>

<h1>Products</h1>
{#if products}
	{#each products as product}
		<ul><li>{product.title} (${product.price} - {product.rating} out of 5)</li></ul>
	{/each}
{:else}
	Error: {data.message}
{/if}

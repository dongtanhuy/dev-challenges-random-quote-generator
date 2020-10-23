<script>
	import Quote from './components/Quote/Quote.svelte'
	import Header from './components/Header/Header.svelte'
	import Footer from './components/Footer/Footer.svelte'
	import Author from './components/Author/Author.svelte'
	import { getRandomQuote } from './services/getQuoteService.js';
	import { onMount } from 'svelte';
	import { quotes, author, genre } from './store';


	let quotesValue, authorText, genreText

	onMount(async () => {
		getRandomQuote();
	});

	quotes.subscribe(value => {
		quotesValue = value
    console.log('quotesValue', quotesValue);
	})
	author.subscribe(value => {
		authorText = value
	})
	genre.subscribe(value => {
		genreText = value
	})
</script>

<main>
	<Header />
	<div class="wrapper">
		<div class="quotes-wrapper">
			{#if quotesValue.length > 1}
			<h2 class="author-name">{authorText}</h2>
			{/if}
			{#if quotesValue.length === 0}
			<h2>Loading</h2>
			{:else}
				{#each quotesValue as quote}
					<Quote quote={quote} />
				{/each}
			{/if}
		</div>
	</div>
	{#if quotesValue.length === 1}
		<Author author={authorText} genre={genreText} />
	{/if}
	<Footer />
</main>

<style>
	main {
		margin: 32px 100px;
	}
	.wrapper {
		margin: 0 auto;
		height: 100%;
		width: 100%;
		display: flex;
    align-items: center;
    justify-content: center;
	}
	.author-name, h2{
		font-family: Raleway;
		font-style: normal;
		font-weight: bold;
		font-size: 36px;
		line-height: 120%;
		color: #000000;
		padding-left: 100px;
		margin-bottom: 70px;
	}
	.quotes-wrapper {
		display: flex;
    flex-direction: column;
	}
</style>
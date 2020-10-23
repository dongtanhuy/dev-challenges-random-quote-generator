import { quotes, author, genre } from '../store';
export const getRandomQuote = async () => {
    const res = await fetch('https://quote-garden.herokuapp.com/api/v2/quotes/random');
		const text = await res.json();

		if (res.ok) {
      quotes.set([text.quote]);
      author.set(text.quote.quoteAuthor)
      genre.set(text.quote.quoteGenre)
		} else {
			throw new Error(text);
		}
}

export const getQuoteByAuthorName = async (authorName) => {
  const res = await fetch(`https://quote-garden.herokuapp.com/api/v2/authors/${authorName}?page=1&limit=10`);
		const text = await res.json();

		if (res.ok) {
      quotes.set(text.quotes);
		} else {
			throw new Error(text);
		}
}
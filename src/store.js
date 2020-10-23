import { writable } from 'svelte/store';

export const quotes = writable([]);
export const quote = writable({});
export const author = writable('');
export const genre = writable('');

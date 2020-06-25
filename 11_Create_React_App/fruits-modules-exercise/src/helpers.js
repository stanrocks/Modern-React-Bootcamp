function choice(items) {
	const fruit = items[Math.floor(Math.random() * items.length)];
	return fruit;
}

function remove(items, item) {
	return items.filter((fruit) => fruit !== item);
}

export { choice, remove };

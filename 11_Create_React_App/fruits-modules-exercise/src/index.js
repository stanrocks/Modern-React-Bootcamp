import foods from './foods';
import { choice, remove } from './helpers';

// console.log(foods);
const randomFruit = choice(foods);
console.log(`I'd like one ${randomFruit}, please`);
console.log(`Here you go: ${randomFruit}`);
console.log('Delicious! May I have another?');
// console.log(remove(foods, randomFruit));
const fruitsLeft = remove(foods, randomFruit).length;
console.log(`I'm sorry, we're all out. We have ${fruitsLeft} left`);

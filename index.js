// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
	cats.push(name);
}
function destructivelyPrependCat(name) {
	cats.unshift(name);
}

function destructivelyRemoveLastCat() {
	cats.pop();
}
function destructivelyRemoveFirstCat() {
	cats.shift();
}
function appendCat(name) {
	const cop = [...cats, name];
	return cop;
}
function prependCat(name) {
	const cop = [name, ...cats];
	return cop;
}
function removeLastCat() {
	const tmp = cats.slice(0,-1);
	return tmp;
}
function removeFirstCat() {
	const tmp = cats.slice(1);
	return tmp;
	
}
// cats.push(name);
// cats.unshift(name);
// cats.pop();
// cats;
// cats.shift();
// cats.slice();
// cats.splice();
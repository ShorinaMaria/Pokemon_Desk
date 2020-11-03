// ==================================================================> 1
const concat: (a: string, b: string) => string = (a, b) => {
    return a.concat(b);
};

concat('Hello ', 'World') // -> Hello World;

//===================================================================> 2
interface Hometask {
    howIDoIt: string,
	simeArray: Array<string | number>,
	withData: Array<{[key: string]: string | Array<string | number>}>,
}
const MyHometask: Hometask = {
	howIDoIt: "I Do It Wel",
	simeArray: ["string one", "string two", 42],
	withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

//===================================================================> 3
interface MyArray<T> {
	[N: number]: T;

    reduce<U>(callback: (previousValue: U, currentValue: T, index: number, arr: Array<T>) => T, initialValue?: U): U;
}

export default interface Todo {
	id: number;
	content: string;
	deadline?: Date;
	done: boolean;
}

<template>
	<div class="q-pa-md">
		<q-card>
			<q-card-section>
				<todo-form @input="addItem" />
			</q-card-section>
		</q-card>

		<q-separator vertical inset />

		<div class="row">
			<div class="col">
				<q-card>
					<q-card-section>
						<div class="text-h6">ToDo</div>
					</q-card-section>
					<q-card-section v-if="todoItems.length > 0">
						<todo-list :todos="todoItems" @change="changeState" @delete="deleteItem" />
					</q-card-section>
				</q-card>
			</div>

			<q-separator inset />

			<div class="col">
				<q-card>
					<q-card-section>
						<div class="text-h6">Done</div>
					</q-card-section>
					<q-card-section v-if="doneItems.length > 0">
						<todo-list :todos="doneItems" @change="changeState" @delete="deleteItem" />
					</q-card-section>
				</q-card>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { computed, defineComponent, ref } from "vue";

	import TodoForm from "./Form.vue";
	import TodoList from "./List.vue";
	import Todo from "./models";

	export default defineComponent({
		name: "TodoComponent",
		components: {
			TodoForm,
			TodoList
		},
		setup() {
			const todos = ref([] as Todo[]);
			let index = 0;

			const todoItems = computed((): Todo[] => {
				return todos.value.filter((v) => !v.done);
			});

			const doneItems = computed((): Todo[] => {
				return todos.value.filter((v) => v.done);
			});

			const addItem = (text: string, deadline?: Date): void => {
				const item: Todo = {
					id: index,
					content: text,
					deadline,
					done: false
				};
				todos.value.push(item);
				index++;
			};

			const changeState = (id: number): void => {
				const todo = todos.value.find((v) => {
					return v.id === id;
				});
				if (!todo) {
					return;
				}
				todo.done = !todo.done;
			};

			const deleteItem = (id: number): void => {
				const index = todos.value.findIndex((v) => {
					return v.id === id;
				});
				if (index === -1) {
					return;
				}
				todos.value.splice(index, 1);
			};

			return {
				todoItems,
				doneItems,
				addItem,
				changeState,
				deleteItem
			};
		}
	});
</script>

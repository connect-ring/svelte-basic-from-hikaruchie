<template>
	<q-list bordered separator>
		<q-item v-for="todo in todos" :key="todo.id" @mouseover="hover = todo.id" @mouseleave="hover = null">
			<q-item-section side>
				<q-checkbox dense :model-value="todo.done" @update:model-value="changeState(todo.id)" />
			</q-item-section>
			<q-item-section>{{ todo.content }}</q-item-section>
			<q-item-section v-if="todo.deadline" side>~ {{ formatDate(todo.deadline) }}</q-item-section>
			<q-item-section v-if="hover === todo.id" side>
				<q-btn dense flat round icon="delete" @click="deleteItem(todo.id)" />
			</q-item-section>
		</q-item>
	</q-list>
</template>

<script lang="ts">
	import { format } from "date-fns";
	import { defineComponent, PropType, ref } from "vue";

	import Todo from "./models";

	export default defineComponent({
		name: "TodoList",
		props: {
			todos: {
				type: Array as PropType<Todo[]>,
				required: true
			}
		},
		emits: {
			change: (id: number) => {
				return typeof id === "number" && !Number.isNaN(id);
			},
			delete: (id: number) => {
				return typeof id === "number" && !Number.isNaN(id);
			}
		},
		setup(_props, context) {
			const hover = ref(null as number | null);

			const formatDate = (date: Date): string => {
				return format(date, "yyyy/MM/dd");
			};

			const changeState = (id: number): void => {
				context.emit("change", id);
			};

			const deleteItem = (id: number): void => {
				context.emit("delete", id);
			};

			return {
				hover,
				formatDate,
				changeState,
				deleteItem
			};
		}
	});
</script>

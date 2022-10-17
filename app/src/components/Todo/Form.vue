<template>
	<q-form class="q-gutter-sm" @submit="add" @reset="clear">
		<q-input v-model="text" outlined label="whats needs to be done?" />
		<div class="row q-gutter-sm justify-end">
			<q-btn label="Reset" type="reset" color="primary" flat />
			<q-btn label="Add" type="submit" color="primary" :disable="!valid" />
		</div>
	</q-form>
</template>

<script lang="ts">
	import { computed, defineComponent, ref } from "vue";

	export default defineComponent({
		name: "TodoForm",
		emits: {
			input: (text: string) => {
				if (typeof text !== "string") {
					return false;
				}
				return true;
			}
		},
		setup(_props, context) {
			const text = ref("");

			const valid = computed((): boolean => {
				return text.value !== "";
			});

			const clear = (): void => {
				text.value = "";
			};

			const add = (): void => {
				context.emit("input", text.value);
				clear();
			};

			return {
				text,
				valid,
				clear,
				add
			};
		}
	});
</script>

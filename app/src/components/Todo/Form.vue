<template>
	<q-form class="q-gutter-sm" @submit="add" @reset="clear">
		<q-input v-model="text" outlined label="ToDo" />
		<q-input v-model="deadline" class="date-input" label="期限" mask="date">
			<template #append>
				<q-icon name="event" class="cursor-pointer">
					<q-popup-proxy ref="qDateProxy" cover transition-show="scale" transition-hide="scale">
						<q-date v-model="deadline">
							<div class="row items-center justify-end">
								<q-btn v-close-popup label="Close" color="primary" flat />
							</div>
						</q-date>
					</q-popup-proxy>
				</q-icon>
			</template>
		</q-input>
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
			input: (text: string, deadline?: Date) => {
				if (typeof text !== "string") {
					return false;
				}
				if (deadline) {
					return deadline instanceof Date;
				}
				return true;
			}
		},
		setup(_props, context) {
			const text = ref("");
			const deadline = ref("");

			const valid = computed((): boolean => {
				return text.value !== "";
			});

			const clear = (): void => {
				text.value = "";
				deadline.value = "";
			};

			const hasDeadline = computed((): boolean => {
				return deadline.value != null && deadline.value !== "";
			});

			const add = (): void => {
				const deadlineDate = hasDeadline.value ? new Date(deadline.value) : undefined;
				context.emit("input", text.value, deadlineDate);
				clear();
			};

			return {
				text,
				deadline,
				valid,
				clear,
				add
			};
		}
	});
</script>

<style scoped>
	.date-input {
		max-width: 200px;
	}
</style>

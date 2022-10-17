<template>
	<q-page class="row justify-center" padding>
		<div class="contents">
			<todo-component />
		</div>
	</q-page>
</template>

<script lang="ts">
	import { defineComponent } from "vue";

	import TodoComponent from "../components/Todo/Index.vue";

	export default defineComponent({
		name: "PageIndex",
		components: {
			TodoComponent
		}
	});
</script>

<style scoped>
	.contents {
		width: 800px;
	}
</style>

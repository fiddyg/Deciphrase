<script lang="ts">
	import Choose from "./Choose.svelte";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Deciphrase" />
</svelte:head>

<section>
	<Choose />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>

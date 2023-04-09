<script>
    import {applyAction, enhance} from '$app/forms'
    import {pb} from '$lib/pocketbase'
</script>

<h2>Log In</h2>

<form method="POST" use:enhance={() => {
    return async ({result}) => {
        pb.authStore.loadFromCookie(document.cookie)
        await applyAction(result)
    }
}}>

    <input type="email" placeholder="Email" name="email">

    <input type="password" placeholder="Password" name="password">

    <button>Log In</button>
</form>



<style>
    h2 {
		font-size: 5rem;
		color: white;
        text-align: center;
	}

	input {
		width: 50rem;
		height: 5rem;
		font-size: 2rem;
		background-color: transparent;
		color: white;
		border: 5px solid white;
		padding: 1rem;
        margin: 1rem;
        display: block;
	}

	input::placeholder {
		color: white;
		text-align: center;
	}

	button {
		background-color: white;
		color: black;
		border-radius: 0%;
		margin: 1rem;
		height: 5rem;
		width: 10rem;
		font-size: 2rem;
		border: 5px solid white;
	}

	button {
		opacity: .8;
	}
</style>
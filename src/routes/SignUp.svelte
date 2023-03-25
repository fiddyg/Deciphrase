<script lang="ts">
    import { currentUser, pb } from './pocketbase';
    let username: string;
    let password: string;
    async function login() {
      await pb.collection('users').authWithPassword(username, password);
    }
    async function signUp() {
      try {
        const data = {
          username,
          password,
          passwordConfirm: password,
          name: 'hi mom!',
        };
        const createdUser = await pb.collection('users').create(data);
        await login();
      } catch (err) {
        console.error(err)
      }
    }
    function signOut() {
      pb.authStore.clear();
    }
</script>
  
{#if $currentUser}
    <p>
        Signed in as {$currentUser.username} 
        <button on:click={signOut}>Sign Out</button>
    </p>
{:else}
    <form on:submit|preventDefault>
        <input
        placeholder="Username"
        type="text"
        bind:value={username}
        />

        <input 
        placeholder="Password" 
        type="password" 
        bind:value={password} 
        />
        <button on:click={signUp}>Sign Up</button>
        <button on:click={login}>Login</button>
    </form>
{/if}

<style>
    form {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 2rem;
	}

	input {
		width: 20rem;
		height: 5rem;
		font-size: 2rem;
		background-color: transparent;
		color: white;
		border: 5px solid white;
		padding: .5rem;
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

    button:hover {
        opacity: .8;
    }
</style>
<script lang="ts">
    let username
    let password

    let user:any[] = []
    
    let users = { user }
    
    const click = () => {
        user.push(username.value)
        user.push(password.value)

        
        console.log(user)
    }


</script>

<form on:submit|preventDefault>
    <input type="text" bind:this={username}>

    <input type="password" bind:this={password}>

    <button on:click={click}>Sign Up</button>
</form>

<h3>{username}</h3>


<style>
    input {
        width: 20rem;
        height: 3rem;
        color: black;
        font-size: 2.5rem;
    }

    button {
        width: 10rem;
        height: 3rem;
        font-size: 2rem;
        color: black;
        background-color: transparent;
        border: .3rem solid black;
    }

    button:hover {
        border: solid white;
        color: white;
    }
</style>
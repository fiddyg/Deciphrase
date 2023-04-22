<script>
    import { page } from "$app/stores";
</script>

<div>
    <span aria-current={$page.url.pathname === '/1' ? 'page' : undefined}>
        <a href="/1">Easy</a>
    </span>
</div>

<div>
    <span aria-current={$page.url.pathname === '/2' ? 'page' : undefined}>
        <a href="/2">Medium</a>
    </span>
</div>

<div>
    <span aria-current={$page.url.pathname === '/3' ? 'page' : undefined}>
        <a href="/3">Hard</a>
    </span>
</div>


<style>
    a {
        text-decoration: none;
        font-size: 3rem;
    }

    div {
        width: 15rem;
        height: 5rem;
        background-color: transparent;
        text-align: center;
        margin: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 1rem;
    }

    div:hover {
        background-color: white;
    }

    div:hover a {
        color: black;
    }
</style>
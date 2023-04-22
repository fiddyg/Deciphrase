<script>
    let randomName = ['Guest']

    let randomNumber = Math.floor(Math.random() * 1000)

    let name = [randomName, randomNumber].join('_')

    let userScore = [name]

    let numbers = [4, 5, 2, 3, 1, 8]

</script>

<h2>Playing as: {name}</h2>

<style>
    h2 {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
<script>
    let mobile = false;
</script>
<nav>
    <a href="about">Om Helvetesplattformen</a>
    <a href="about">Send inn tips</a>
</nav>

<style lang="scss">
nav {
    * {
        padding-left: 1rem;
        display: none;
    }
    @media(max-width: 720px){
        // display: none;
        display: flex;
        background: red;
    }
}
.hidden {
    display: none;
}
.visible {
    display: block;
}
</style>
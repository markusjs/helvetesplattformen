<script>
    let textColor = '#003B49';
    import Hamburger from '$lib/Hamburger.svelte';
    import Menu from '$lib/Menu.svelte';
</script>
<header>
    <div class="title">
        <h1>Helvetesplattformen</h1>
        <p>En oversikt over skriverier om Helseplattformen.</p>
    </div>
    <!-- <Menu/>
    <Hamburger>
        <Menu/>
    </Hamburger> -->
    <a class="link" href="https://forms.gle/DKZ5oPBJYyieRxHk9">Send inn tips!</a>
</header>

<style lang="scss">
    header {
        z-index: 100;
        top: 0;
        left: 0;
        display: flex;
        position: sticky;
        // width: inherit;
        max-width: 100wv;
        justify-content: space-between;
        align-items: center;
        padding: 24px;
        background: white;
        // background: red;
        .title {
            display: inline-block;
        }
        @media(max-width:720px){
            display: grid;
            padding-top: 0;
        }
    }
    h1 {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 0;
        margin-top: 0;
    }
    p {
        margin: 8px 0;
    }
    a {
        text-decoration: none;
        color: var(--text-color);
        .link {
            text-decoration: underline;
        }
        &:hover, &:focus {
            text-decoration: underline;
        }
    }
    @media(max-width:720px){
        h1 {
            font-size: 2rem;
            margin-top: 16px;
        }
    }
    .link {
        text-decoration: underline;
        font-size: 1rem;
    }
</style>
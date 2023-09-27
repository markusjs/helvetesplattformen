<script>
    let textColor = '#003B49';
    import Hamburger from '$lib/Hamburger.svelte';
    import Menu from '$lib/Menu.svelte';
    import Modal from '$lib/Modal.svelte';
    let showModal = false;
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
    <!-- <a class="link" href="https://forms.gle/DKZ5oPBJYyieRxHk9">Send inn tips!</a> -->
    <!-- <button on:click={() => (showModal = true)}> show modal </button> -->
            
    <Modal bind:showModal>
        <h2 slot="header">
            modal
            <small><em>adjective</em> mod·al \ˈmō-dəl\</small>
        </h2>
    
        <ol class="definition-list">
            <li>of or relating to modality in logic</li>
            <li>
                containing provisions as to the mode of procedure or the manner of taking effect —used of a
                contract or legacy
            </li>
            <li>of or relating to a musical mode</li>
            <li>of or relating to structure as opposed to substance</li>
            <li>
                of, relating to, or constituting a grammatical form or category characteristically indicating
                predication
            </li>
            <li>of or relating to a statistical mode</li>
        </ol>
        <label for="">Tittel</label>
        <input type="text" id="title">
        <button type="submit"></button>
    </Modal>
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
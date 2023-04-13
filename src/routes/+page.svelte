<script>
// @ts-nocheck

    let backgroundColor = '#ECEFF7';
    let textColor = '#003B49';
    import TitleAndQuote from '$lib/TitleAndQuote.svelte'
    import Header from '$lib/Header.svelte'
	import PostList from '$lib/PostList.svelte'
    // export let author;
    export let data;
</script>
<svelte:head>
    <title>Helvetesplattformen</title>
</svelte:head>
<main style="--background-color: {backgroundColor}; --text-color: {textColor}">
    <div class="content">
        <PostList posts={data.posts}></PostList>
        <div class="tips">
            <a class="link" href="https://forms.gle/DKZ5oPBJYyieRxHk9">Send inn tips om nyhetssak!</a>
        </div>
    </div>
</main>
<style>
    * {
        color: var(--text-color);
    }
    .content {
        max-width: 1281px;
        margin: auto;
        /* padding: 0; */
        /* background: red; */
    }

    .tips {
        margin: 24px 0;
    }
    .tips a {
        text-decoration: underline;
        font-size: 1.5rem;
        color: #003B49;
    }
</style>

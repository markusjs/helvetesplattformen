<script>
// @ts-nocheck

    let backgroundColor = '#ECEFF7';
    let textColor = '#003B49';
    import TitleAndQuote from '$lib/TitleAndQuote.svelte'
	import PostList from '$lib/PostList.svelte'
    // export let author;
    export let data;
</script>

<main style="--background-color: {backgroundColor}; --text-color: {textColor}">
    <TitleAndQuote/>
    <PostList posts={data.posts} authors={data.authors}></PostList>
    <div class="tips">
        <a class="link" href="https://forms.gle/DKZ5oPBJYyieRxHk9">Send inn tips om nyhetssak!</a>
    </div>
</main>
<style>
    * {
        color: var(--text-color);
    }
    main {
        max-width: 1200px;
        margin: auto;
        padding: 16px 16px;
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

<script>
// @ts-nocheck
    let backgroundColor = '#ECEFF7';
    let textColor = '#003B49';
    import PostDate from '$lib/PostDate.svelte';
    export let posts
    // let sortedArray = posts.sort((a, b) => a.publishedAt - b.publishedAt);
    let array = [];
    posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    console.log(array)
</script>
<h2>Alle nyheter</h2>
<div class="wrapper" style="--background-color: {backgroundColor}; --text-color: {textColor}">
    {#each posts as post}
        <a href={post.url} class="card">
            <PostDate {post}></PostDate>
            <h3>{post.title}</h3>
        </a>
    {/each}
</div>

<style lang="scss">
    h2 {
        margin-top: 0;
    }
    a {
      text-decoration: none;
    }
    .wrapper {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
        background: var(--background-color);
        .card {
            color: var(--text-color);
            background: white;
            flex: 400px;
            padding: 24px;
            border-radius: 7px;

            &:focus h3, &:hover h3 {
                text-decoration: underline;
                font-style: italic;
            }
            h3 {
                font-size: 1.5rem;
                font-weight: 100;
            }
        }
        }
  </style>
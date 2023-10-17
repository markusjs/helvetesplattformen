<script>
// @ts-nocheck
    let backgroundColor = '#ECEFF7';
    let textColor = '#003B49';
    import PostDate from '$lib/PostDate.svelte';
	import { each } from 'svelte/internal';
    export let posts
    // JSON.stringify({ posts: "sample", bar: "sample" }, null, 4)

</script>
<!-- <h2>2023</h2> -->
<h2>Alle nyheter</h2>
<div class="wrapper" style="--background-color: {backgroundColor}; --text-color: {textColor}">
    {#each posts as post, i}
        <a href={post.url} class="card">
            <!-- {post.categories} -->
            <PostDate {post}></PostDate>
                {#if post.mainImage}
                    <div class="img-wrap">
                        <img src={post.mainImage.asset.url} alt="hovedbilde">
                    </div>
                {/if}
        
        <h3>{post.title}
        
        </h3>
        {#if post.categories != null}
                {#if post.categories[0].title == "Pluss-sak"}
                <h4 class="plus">Krever abonnement</h4>
                {/if}
            {/if}
        {#if post.author.name && post.author.name.lenght}
            <p>{post.author.name}</p>
        {/if}
</a>

{/each}
</div>


<style lang="scss">
    .plus {
        margin-bottom: 0;
    }
    h2 {
        margin-top: 0;
    }
    h3 {
        flex: 1;
    }
    a {
      text-decoration: none;
      display: flex;
      flex-direction: column;
    }
    .wrapper {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
        background: var(--background-color);
        // background: red;
        .card {
            color: var(--text-color);
            background: white;
            flex: 400px;
            padding: 24px;
            border-radius: 7px;
            width: 100%;
            box-sizing: border-box;
            &:focus h3, &:hover h3 {
                text-decoration: underline;
                font-style: italic;
            }
            h3 {
                font-size: 1.5rem;
                font-weight: 300;
                margin-bottom: 0;
                margin-top: 16px;
            }
        }
        position: relative; 
        .img-wrap {
            padding-top: 32px;
            display: flex;
            justify-content: center;
            flex-direction: column;
            padding-bottom: 32px;
            height: 250px;
            align-items: center;

        }
        img {
            height: auto;
            border-radius: 7.5px 7.5px 0px 0px;           
        }
        }
  </style>
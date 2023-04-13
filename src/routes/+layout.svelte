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
        <Header/>
        <div class="content">
            <slot/>
        </div>
    </main>
    <style>
        * {
            color: var(--text-color);
        }
        .content {
            max-width: 1281px;
            margin: auto;
            padding: 32px 24px;
        }
    </style>
    
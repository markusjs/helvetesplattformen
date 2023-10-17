<script>
// @ts-nocheck

    import { format, isToday, isYesterday } from 'date-fns'
    export let post
    // export let author
    export let date = new Date(post.publishedAt)
    let formattedDate = date.toLocaleDateString('nb', {
            year: "numeric",
            month: "long",
            day: "2-digit",
    })
</script>
<div>
    <div class="meta-info">
        {#if isToday(date)}
            I dag, {formattedDate}
        {:else if isYesterday(date)}
            I går, {formattedDate}
        {:else}
            {formattedDate}
        {/if}
        {#if post.categories}
                <div>
                    {post.source}
                </div>
            {:else}
                <div>
                    {post.source}
                </div>
        {/if}
    </div>
  </div>
  <style>
    .meta-info {
      display: flex;
      justify-content: space-between;
    }
  </style>
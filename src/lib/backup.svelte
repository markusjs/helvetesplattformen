


{#if post.publishedAt.startsWith('2023')}
            <a href={post.url} class="card">
                <PostDate {post}></PostDate>
                {#if post.mainImage}
                    <div class="img-wrap">
                        <img src={post.mainImage.asset.url} alt="hovedbilde">
                    </div>
                {/if}
                    <h3>{post.title}</h3>
                    {#if post.author.name && post.author.name.lenght}
                        <p>{post.author.name}</p>
                    {/if}
                <!-- </div> -->
                <!-- <img src={post.mainImage} alt="hovedbilde"> -->
                <!-- {post.mainImage} -->
            </a>
        {:else if post.publishedAt.startsWith('2022')}
            <a href={post.url} class="card">
                <PostDate {post}></PostDate>
                {#if post.mainImage}
                <div class="img-wrap">
                    <img src={post.mainImage.asset.url} alt="hovedbilde">
                </div>
            {/if}
                <h3>{post.title}</h3>
            </a>
        {/if}





        <div class="wrapper" style="--background-color: {backgroundColor}; --text-color: {textColor}">
            {#each posts as post}
                {#if post.publishedAt.startsWith('2023')}
                <h1>2023</h1>
                <a href={post.url} class="card">
                    <PostDate {post}></PostDate>
                    {#if post.mainImage}
                        <div class="img-wrap">
                            <img src={post.mainImage.asset.url} alt="hovedbilde">
                        </div>
                    {/if}
                        <h3>{post.title}</h3>
                        {#if post.author.name && post.author.name.lenght}
                            <p>{post.author.name}</p>
                        {/if}
                    <!-- </div> -->
                    <!-- <img src={post.mainImage} alt="hovedbilde"> -->
                    <!-- {post.mainImage} -->
                </a>
                {:else if post.publishedAt.startsWith('2022')}
                <h1>2022</h1>
                    <a href={post.url} class="card">
                        <PostDate {post}></PostDate>
                        {#if post.mainImage}
                        <div class="img-wrap">
                            <img src={post.mainImage.asset.url} alt="hovedbilde">
                        </div>
                    {/if}
                        <h3>{post.title}</h3>
                    </a>
                {/if}
            {/each}
        </div>
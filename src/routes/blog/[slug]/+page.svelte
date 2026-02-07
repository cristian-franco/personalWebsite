<script>
    export let data;
    import "../../main.css";
</script>

<svelte:head>
    <title>{data.metadata.title}</title>
</svelte:head>

<div class="navigation-bar">
    <div class="home-button">
        <p>
            <a href="/">Cristian Franco</a>
        </p>
    </div>
    <div class="section-links grid-container">
        <div class="grid-item"><p><a href="/blog">Blog</a></p></div>
        <!-- <div class="grid-item"><p>Resume</p></div>
    <div class="grid-item"><p>Projects</p></div> -->
        <div class="grid-item">
            <p>
                <a href="https://github.com/cristian-franco"> GitHub </a>
            </p>
        </div>
    </div>
</div>

<div class="container">
    <article>
        <header>
            <h1>{data.metadata.title}</h1>
            <time>{data.metadata.date}</time>
            {#if data.metadata.tags}
                <div class="tags">
                    {#each data.metadata.tags as tag}
                        <span class="tag">{tag}</span>
                    {/each}
                </div>
            {/if}
        </header>

        <div class="content">
            <svelte:component this={data.content} />
        </div>
    </article>

    <footer>
        <a href="/blog">← Back to all posts</a>
    </footer>
</div>

<style>
    .container {
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem 1rem;
        font-family:
            -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    }

    header {
        margin-bottom: 2rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid #e0e0e0;
    }

    h1 {
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
        /*color: #1a1a1a;*/
    }

    time {
        color: #666;
        font-size: 0.9rem;
    }

    .tags {
        display: flex;
        gap: 0.5rem;
        margin-top: 1rem;
        flex-wrap: wrap;
    }

    .tag {
        background: #f0f0f0;
        padding: 0.25rem 0.75rem;
        border-radius: 4px;
        font-size: 0.85rem;
        color: #555;
    }

    .content {
        line-height: 1.8;
        color: white;
    }

    footer {
        margin-top: 3rem;
        padding-top: 2rem;
        border-top: 1px solid #e0e0e0;
    }

    footer a {
        /*color: #2563eb;*/
        text-decoration: none;
    }

    footer a:hover {
        text-decoration: underline;
    }
</style>

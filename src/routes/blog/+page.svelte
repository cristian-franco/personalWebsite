<script>
    export let data;
</script>

<svelte:head>
    <title>My Blog</title>
</svelte:head>

<div class="container">
    <header>
        <h1>My Blog</h1>
        <p class="subtitle">
            Thoughts on software engineering and web development
        </p>
    </header>

    <main>
        <section class="posts">
            {#each data.posts as post}
                <article class="post-card">
                    <a href="/blog/{post.slug}">
                        <h2>{post.title}</h2>
                        <time>{post.date}</time>
                        <p class="description">{post.description}</p>
                        {#if post.tags}
                            <div class="tags">
                                {#each post.tags as tag}
                                    <span class="tag">{tag}</span>
                                {/each}
                            </div>
                        {/if}
                    </a>
                </article>
            {/each}
        </section>
    </main>

    <footer>
        <p>© 2024 Cristian Franco</p>
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
        margin-bottom: 3rem;
        text-align: center;
    }

    h1 {
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
        color: #1a1a1a;
    }

    .subtitle {
        color: #666;
        font-size: 1.1rem;
    }

    .posts {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .post-card {
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        padding: 1.5rem;
        transition: box-shadow 0.2s ease;
    }

    .post-card:hover {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .post-card a {
        text-decoration: none;
        color: inherit;
    }

    .post-card h2 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
        color: #2563eb;
    }

    .post-card h2:hover {
        text-decoration: underline;
    }

    time {
        color: #666;
        font-size: 0.9rem;
    }

    .description {
        margin-top: 0.75rem;
        color: #333;
        line-height: 1.6;
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

    footer {
        margin-top: 4rem;
        text-align: center;
        color: #888;
        font-size: 0.9rem;
    }

    @media (max-width: 640px) {
        h1 {
            font-size: 2rem;
        }

        .post-card {
            padding: 1rem;
        }
    }
</style>

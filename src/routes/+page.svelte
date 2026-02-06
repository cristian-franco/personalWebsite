<script>
    import "./main.css";
</script>

<svelte:head>
    <title>Cristian Franco - Software Engineer</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
    />
</svelte:head>

<div class="navigation-bar">
    <div class="home-button">
        <p>
            <a href="https://cfranco.dev/">Cristian Franco</a>
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

<div class="front-page-subtext grid-container">
    <div class="grid-item">
        <div class="front-page-picture">
            <img src="/Headshot.png" alt="Picture of Cristian Franco" />
        </div>
    </div>
    <div class="grid-item">
        <div class="front-page-name">
            <h1>Cristian Franco</h1>
        </div>
    </div>
    <div class="grid-item">
        <p>
            I am a Software Engineer currently working at CloudKitchens in the
            food tech space.<br />
            Open to Data Engineer and Software Engineer opportunities!
        </p>
    </div>
    <div class="grid-item">
        <p>I have a strong interest in open source and community!</p>
    </div>
    <div class="grid-item">
        <p>
            In my free time, I love to read, workout, and try new foods!<br />
            Feel free to drop any recommendations<br />
            for Los Angeles in my inbox!
        </p>
    </div>
    <div class="grid-item">
        <p></p>
    </div>
</div>

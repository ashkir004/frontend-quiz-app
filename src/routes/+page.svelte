
<script>
</script>

<article>

    <div class="intro-text">
        <h1 class="text-2-mb">Welcome to the <strong>Frontend Quiz!</strong></h1>
        <small>Pick a subject to get started.</small>
    </div>
    
    <ul class="subjects">
        <li><a href="/html" class="subject html"><span></span>HTML</a></li>
        <li><a href="/css" class="subject css"><span></span>CSS</a></li>
        <li><a href="/javascript" class="subject javascript"><span></span>JavaScript</a></li>
        <li><a href="/accessibility" class="subject accessibility"><span></span>Accessibility</a></li>
    </ul>

</article>


<style>

    li {
        list-style: none;
    }

    article {
        display: flex;
        flex-direction: column;
        gap: var(--s-500);
        padding: var(--s-400) 0 0;
    }

    .intro-text {
        display: flex;
        flex-direction: column;
        gap: var(--s-200);
    }

    h1 {
        font-size: var(--text-7);
        font-weight: 100;
    }

    h1 strong {
        font-weight: 600;
        display: block;
    }

    @media (min-width: 48rem) {

        article {
            gap: var(--s-800);
            /* padding: var(--s-400) var(--s-800) 0; */
        }

        h1 {
            font-size: var(--s-800);
        }
    }
    
    @media (min-width: 64rem) {

        article {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: var(--s-1600);
            padding: 0;
        }

        .intro-text {
            gap: var(--s-600);
        }

    }

</style>
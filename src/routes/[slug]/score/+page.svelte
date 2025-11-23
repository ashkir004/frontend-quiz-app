
<script>
    import { fade } from "svelte/transition";
	import { goto } from '$app/navigation';
    import confetti from 'canvas-confetti';

    let { data } = $props();
    let score = $state(data.score * 1);

    function celebrate() {
        let duration = 15 * 1000;
        let animationEnd = Date.now() + duration;
        let defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1};

        let interval = setInterval(() => {
            let timeLeft = animationEnd - Date.now();
            if (timeLeft <= 0) return clearInterval(interval);

            let particleCount = 50 * (timeLeft / duration);

            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2}
            });
    
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2}
            });

        }, 250);


    }

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    $effect(() => {
        if (score === 10) {
            return celebrate();
        }
    });




</script>

<article in:fade>
    <p class="lead-text">Quiz completed<br><strong>You scored...</strong></p>
    <div>
        <div class="score-board">
            <div class="topic {data.subject ? data.subject.title.toLowerCase() : ''}"><span></span>{data.subject ? data.subject.title : ''}</div>
            <p class="score">{data.score}</p>
            <small>out of 10</small>
        </div>

        <a class="play-again outline outline-offset" href="/">Play Again</a>
    </div>
</article>


<style>

    .play-again {
        display: block;
        text-align: center;
        text-decoration: none;
        width: 100%;
        background-color: var(--colors-purple-600);
        color: var(--colors-white);
        padding: var(--s-200);
        border: none;
        border-radius: var(--radii-12);
        font-size: var(--text-2);
        box-shadow: 0 0.3rem 0.3rem 0.3rem var(--color-shadow);
        cursor: pointer;
        margin-block-start: var(--s-200);
    }

    .lead-text {
        font-size: var(--text-7);
        font-weight: 300;
        margin-block-start: var(--s-400);
        margin-block-end: var(--s-500);
    }

    .lead-text strong {
        font-weight: 500;
    }

    .score-board {
        display: flex;
        flex-direction: column;
        gap: var(--s-100);
        align-items: center;
        background-color: var(--secondary-bg-color);
        padding: var(--s-400);
        border-radius: var(--radii-12);
    }

    .score {
        font-weight: 500;
        font-size: var(--text-9);
        color: var(--text-color);
    }

    small {
        font-style: normal;
        font-size: var(--text-2);
    }

    @media (min-width: 48rem) {

        .score-board {
            border-radius: var(--radii-24);
        }
        
        .lead-text {
            font-size: var(--text-8);
        }

        .score {
            font-size: var(--text-10);
        }

        small {
            font-size: var(--text-4);
        }

        .play-again {
            padding: var(--s-400);
            font-size: var(--text-5);
            border-radius: var(--radii-24);
        }
    }

    @media (min-width: 64rem) {

        .lead-text {
            margin: 0;
        }

        article {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: var(--s-1600);
            width: 100%;
            padding: 0;
        }
    }
</style>
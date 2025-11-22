<script>
	import { goto } from "$app/navigation";
	import { fade } from "svelte/transition";
    import Options from "$lib/components/Options.svelte";
	import ProgressBar from "$lib/components/ProgressBar.svelte";

    let { data } = $props();

    
    let i = $state(0);
    let current = $derived({...data.subject.questions[i]});
    
    let score = $state(0);    

    function next(choice) {
        score = choice ? score + 1 : score;

        if (i < 9) {
            return i = i + 1;
        } else {   
            const query = new URLSearchParams({ score });    
            goto(`/${data.subject.title.toLowerCase()}/score?${query.toString()}`);
        }
    }

    
</script>
{#key i}
<article in:fade|global={{delay: 100, duration : 500 }}>
    <div class="question">
        <div class="question-wrapper">
            <small>Question {i + 1} of 10</small>
            <p>{current.question}</p>
        </div>
        <ProgressBar index={i}/>
    </div>
    
    <Options subject={data.subject} 
        options = { current.options } 
        answer = { current.answer } 
        next={next}
        index={i} 
        score={score} />

        
</article>
{/key}

<style>

    article {
        display: flex;
        flex-direction: column;
        gap: var(--s-500);
        padding: var(--s-400) 0 0;
    }

    .question {
        display: flex;
        flex-direction: column;
        gap: var(--s-300);
    }

    .question-wrapper {
        display: flex;
        flex-direction: column;
        gap: var(--s-200);
    }

    p {
        font-size: var(--text-3);
        line-height: var(--line-height-2);
        font-weight: 400;
    }

    @media (min-width: 48rem) {

        .question {
            gap: var(--s-500);
        }

        .question-wrapper {
            gap: var(--s-300);
        }

        p {
            font-size: var(--text-6);
            line-height: var(--line-height-2);
        }
    }

    @media (min-width: 64rem) {

        .question {
            gap: var(--s-1800);
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
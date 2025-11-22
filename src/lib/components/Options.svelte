
<script>
	import { showPage } from '$lib/shared';
    import { fade } from 'svelte/transition';
    import { goto } from '$app/navigation';

    const OPTION_LETTERS = ['A', 'B', 'C', 'D'];
    let {subject, answer, next, score, index, options} = $props();
    
    let choice = $state('');
    let submitDisabled = $state(false);
    let optionsDisabled = $state(false);
    let noSelectionErrorHidden = $state(true);

    let choiceRefs = $state([]);

    let currentOptions = $derived([...options]);


    function handleSelected(i) {
        console.log(choiceRefs);
        choice = currentOptions[i];
        noSelectionErrorHidden = true;
        submitDisabled = false;

        choiceRefs.forEach((el) => el?.classList.remove('selected'));

        choiceRefs[i]?.classList.add('selected');
    }


    function handleSubmit(e) {
        if (choice === '') return noSelectionErrorHidden = false;

        submitDisabled = true;
        optionsDisabled = true;

        choiceRefs.forEach((el, i) => {
            let opt = currentOptions[i];

            if (opt === answer) {
                el.classList.add('correct');
            } else if (opt === choice) {
                el.classList.add('incorrect');
            }
        });

        const correct = choice === answer;

        if (index < 9) {
            setTimeout(() => {
                next(correct);
                reset();
            }, 1500);
        } else {
            setTimeout(() => {
                next(correct);    
            }, 2000);
        }

    }

    function reset() {
        choiceRefs.forEach((el) => {
            el?.classList.remove('selected', 'correct', 'incorrect');
        });

        choice = '';

        optionsDisabled = false;
        submitDisabled = true;
    }


</script>

{#key index}
<div class="answer">
    <ul class="choices">
        {#each currentOptions as option, i (i)} 
        <button 
                bind:this={choiceRefs[i]} 
                class="choice" 
                data-option={option} 
                disabled={optionsDisabled}
                onclick={() => handleSelected(i)}>
                
                <span>{OPTION_LETTERS[i]}</span>{option}
                <div class="icon"></div>
            </button>
        {/each}
    </ul>
    
    <button class="submit"
        aria-disabled={submitDisabled} 
        disabled={submitDisabled} 
        onclick={(e) => handleSubmit(e)}>
    Submit Answer
    </button>

    <div class="error {noSelectionErrorHidden ? 'hidden' : null}">
        <div class="icon"></div><p>Please Select an answer</p>
    </div> 
</div>
{/key}


<style>
    
.choice {
    text-align: start;
}

.icon {
    min-width: var(--s-500);
    min-height: var(--s-500);
    background-repeat: no-repeat;
    background-position: center;
    margin-left: auto;
}

:global(.correct .icon) {
    background-image: var(--icon-correct);
}

:global(.incorrect .icon) {
    background-image: var(--icon-incorrect);
}

.error {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: var(--s-100);
    font-size: var(--text-2);
    color: var(--text-color-error);
}

.error .icon {
    background-image: var(--icon-incorrect);
    margin: 0;
}

.error.hidden {
    visibility: hidden;
    display: none;
}

span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--colors-grey-500);
    background-color: var(--colors-grey-50);
}

.submit {
    background-color: var(--colors-purple-600);
    color: var(--colors-white);
    padding: var(--s-200);
    border: none;
    border-radius: var(--radii-12);
    font-size: var(--text-2);
    box-shadow: 0 0.3rem 0.3rem 0.3rem var(--color-shadow);
    cursor: pointer;
}

.choice:disabled {
    cursor: not-allowed;
}

:global(.submit[aria-disabled=true]) {
    cursor: not-allowed;
    background-color: color-mix(in oklab, var(--colors-white) 50%, var(--colors-purple-600) 50%)
}


@media (min-width: 48em) {

    .submit {
        padding: var(--s-400);
        font-size: var(--text-5);
        border-radius: var(--radii-24);
        margin-block: var(--s-250);
    }
}

</style>
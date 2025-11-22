<script>
	import favicon from "$lib/assets/favicon-32x32.png";
	import '../app.css';

	import ToggleTheme from "$lib/components/ToggleTheme.svelte";
	let { children, data } = $props();
    // $inspect(data);

</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="container">
    <main>
        <header>
            <div class="topic {data.subject ? data.subject.title.toLowerCase() : ''}"><span></span>{data.subject ? data.subject.title : ''}</div>
            <ToggleTheme />
        </header>

        {@render children()}

    </main>
</div>

<style>
    
:global {

    body {
        height: 100%;
        margin: 0;
        background-color: var(--background-color);
        color: var(--text-color);
        background-image: var(--bg-mobile);  
        background-repeat: no-repeat;
        background-position: contain;
        font-family: "Rubik";
    }

	main {
        padding: 0 var(--s-300) 0;
	}

    header {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        /* background-color: yellowgreen; */
    }

    .topic {
        display: flex;
        flex-direction: row;
        gap: var(--s-200);
        align-items: center;
        padding: var(--s-200) 0;
    }

    small {
        color: var(--text-color-small);
        font-size: var(--text-1);
        line-height: var(--line-height-3);
        font-style: oblique;
    }

    .answer, .subjects, .choices {
        display: flex;
        flex-direction: column;
        gap: var(--s-200);
    }

    .subject, .choice {
        border: none;
        border-radius: var(--radii-12);
        background-color: var(--bg-btn-primary);
        color: var(--text-color);
        padding: var(--s-200);
        box-shadow: 0 0.3rem 0.3rem 0.3rem var(--color-shadow);
        cursor: pointer;
        font-family: "Rubik";
        font-size: var(--text-2);
        font-weight: 500;
        line-height: var(--line-height-2); /* 1 */
        color: var(--text-btn-primary);
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: var(--s-200);
        text-decoration: none;
    }

    .choice:focus,
    .choice:hover, 
    .choice.selected {
        outline: .15rem solid var(--colors-purple-600);
    }

    .choice:hover span, 
    .choice.selected span {
        background-color: var(--colors-purple-600);
        color: var(--colors-white);
    }

    .choice.correct {
        outline: .15rem solid var(--colors-green-500);
    }
    
    .choice.correct span {
        background-color: var(--colors-green-500);
        color: var(--colors-white);
    }

    .choice.incorrect {
        outline: .15rem solid var(--colors-red-500);
    }

    .choice.incorrect span {
        background-color: var(--colors-red-500);
        color: var(--colors-white);
    }

    .subject span, .choice span, .topic span {  
        min-width: var(--s-500);
        min-height: var(--s-500);
        border-radius: .5rem;
    }

    .topic {
        font-family: "Rubik";
        font-size: var(--text-2);
        font-weight: 500;
        line-height: var(--line-height-1);
        color: var(--text-btn-primary);
    }

    
    .html span, .css span, .javascript span, .accessibility span, .choice span {
        background-size: var(--s-350);
        background-repeat: no-repeat;
        background-position: center;
    }

    .html span { 
        background-image: var(--icon-html);
        background-color: var(--colors-orange-50);
    }
    .css span { 
        background-image: var(--icon-css);
        background-color: var(--colors-green-100);
    }
    .javascript span { 
        background-image: var(--icon-js);
        background-color: var(--colors-blue-50);
    }
    .accessibility span { 
        background-image: var(--icon-accessibility);
        background-color: var(--colors-purple-100);
    }
    
    @media (min-width: 48rem) {
        .subjects, .choices {
            gap: var(--s-300);
        }
        
        .subject, .choice, .topic {
            font-size: var(--text-5);
        }
        
        .html span, .css span, .javascript span, .accessibility span, .choice span {
            min-width: var(--s-700);
            min-height: var(--s-700);
            background-size: var(--s-500);    
        }

        body {
            background-image: var(--bg-tablet);
        }
    
        main {
            padding: var(--s-400) var(--s-800) 0;
        }
    
        header {
            padding-inline: 0;
        }
    
        .topic {
            gap: var(--s-300);
        }
        
    }

    @media (min-width: 64rem) {
        .subjects, .choices {
            gap: var(--s-200);
        }

        .subject, .choice {
            padding: var(--s-300);
            font-size: var(--text-4);
        }
    
        body {
            background-image: var(--bg-desktop);
            background-size: cover;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
        }

        main {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            gap: var(--s-800);
            padding: 0;
            min-width: 65.55rem;
            max-width: 65.55rem;
            padding-block-end: var(--s-800);
        }


        header {
            margin-block-start: var(--s-800);
        }
    }
}


    

</style>
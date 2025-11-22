<script>
    let { index } = $props();
    let progress = $derived((index + 1) * 10);

</script>

{#key index}
<div class="container">
    <div class="progress-bar">
        <div class="progress" style:--progress="{progress}%"></div>
    </div>
</div>
{/key}

<style>

.progress-bar {
    height: var(--s-200);
    background-color: var(--bg-btn-primary);
    border-radius: var(--radii-24);
    padding: 4px;
}

.progress {
    width: var(--progress); 
    height: var(--s-100);
    background-color: var(--colors-purple-600);
    border-radius: var(--radii-24);
}



</style>

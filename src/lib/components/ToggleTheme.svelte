<script>

    let theme = $state('');

    function getSystemOrStoredTheme() {
        return window.localStorage.getItem('theme') === 'dark' || window.matchMedia("(prefers-color-scheme: dark)").matches
                ? 'dark' : 'light';
    }

    function toggleTheme() {
        theme = theme === 'light' ? 'dark' : 'light';
    }

    function setTheme(mode) {
        theme = mode;
    }
    
    $effect(() => {

        if (theme === '') theme = getSystemOrStoredTheme();

        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    });
</script>


<div class="toggle-theme">

    <button class="icon sun outline outline-offset" onclick={() => setTheme('light')} aria-label="light mode"></button>
    
    <label class="switch">
        <input type="checkbox" role="switch" id="theme-switch" aria-checked='{theme === 'dark'}' onclick={toggleTheme} 
            checked={theme === 'dark'}>
        <span class="slider"></span>
    </label>
    
    <button class="icon moon outline" onclick={() => setTheme('dark')} aria-label="dark mode"></button>
</div>


<style>

.toggle-theme {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: var(--s-200);
    padding: var(--s-250) 0;
}

.icon {
    width: 2rem;
    height: 2rem;
    background-repeat: no-repeat;
    background-position: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
}

.sun {
    background-image: var(--icon-sun);
}

.moon {
    background-image: var(--icon-moon);
}

.switch {
  --switch-width: var(--s-600);
  --switch-height: var(--s-200);
  --switch-bg: var(--colors-purple-600);
  --switch-thumb-size: var(--s-250);

    position: relative;
    display: inline-block;
    width: var(--switch-width);
    height: var(--switch-height);
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

span.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--switch-bg);
  border-radius: var(--switch-height);
  transition: background-color 0.3s;
  padding-block: 0.9rem;
  padding-inline: .3rem;
}

.switch .slider::before {
  content: "";
  position: absolute;
  height: var(--switch-thumb-size);
  width: var(--switch-thumb-size);
  bottom: .27rem;
  background-color: white;
  border-radius: 50%;
  transition: transform 0.3s;
}

.switch input:checked + .slider::before {
  transform: translateX(calc(var(--switch-width) - var(--switch-thumb-size) - .6rem));
}

/* @media (min-width: 48rem) {
    .toggle-theme {
        padding: 0;
    }
} */


</style>
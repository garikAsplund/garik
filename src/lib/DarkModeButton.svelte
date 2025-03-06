<script lang="ts">
    import { Moon, Sun } from 'lucide-svelte';
    import { onMount } from 'svelte';
    
    let dark: boolean | null = $state(null);
    let hidden = $state(true);

    onMount(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            dark = true;
        } else if (savedTheme === 'light') {
            dark = false;
        } else {
            dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        }

        setMode(dark);

        hidden = false;

        const matcher = window.matchMedia('(prefers-color-scheme: dark)');
        matcher.addEventListener('change', handleChange);
        return () => matcher.removeEventListener('change', handleChange);
    });

    function handleChange(event: MediaQueryListEvent) {
        if (localStorage.theme === undefined) {
            setMode(event.matches);
        }
    }

    function toggleDarkMode() {
        setMode(!dark);
    }

    function setMode(value: boolean) {
        dark = value;
        
        if (dark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
        
        const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (
            (value && systemPreference) ||
            (!value && !systemPreference)
        ) {
            localStorage.removeItem('theme');
        }
    }
</script>

<button 
    onclick={toggleDarkMode} 
    class="hover:opacity-75"
    aria-label="Toggle theme"
>
    {#if dark}
        <Sun size={20} />
    {:else}
        <Moon size={20} />
    {/if}
</button>

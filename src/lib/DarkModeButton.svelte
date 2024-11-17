<script lang="ts">
    import { Moon, Sun } from 'lucide-svelte';
    import { onMount } from 'svelte';
    
    let dark: boolean | null = $state(null);
    let hidden = $state(true);
    
    onMount(() => {
        dark = document.documentElement.classList.contains('dark');
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
        } else {
            document.documentElement.classList.remove('dark');
        }
        
        localStorage.theme = dark ? 'dark' : 'light';

        if (window.matchMedia(`(prefers-color-scheme: ${localStorage.theme})`).matches) {
            localStorage.removeItem('theme');
            console.log('Removed localStorage theme - matching system');
        }
    }
</script>

<button 
    onclick={toggleDarkMode} 
    class="ml-4 p-2 pb-1 hover:opacity-75"
    aria-label="Toggle theme"
>
    {#if dark}
        <Sun size={20} />
    {:else}
        <Moon size={20} />
    {/if}
</button>
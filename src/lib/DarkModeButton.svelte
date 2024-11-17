<script lang="ts">
    import { Moon, Sun } from 'lucide-svelte';
    import { onMount } from 'svelte';
    
    let dark: boolean | null = $state(null);
    let hidden = $state(true);
    
    onMount(() => {
        dark = (
            localStorage.theme === 'dark' || 
            (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
        );
        hidden = false;
        
        const matcher = window.matchMedia('(prefers-color-scheme: dark)');
        matcher.addEventListener('change', handleChange);
        return () => matcher.removeEventListener('change', handleChange);
    });

    function handleChange({ matches: dark }: MediaQueryListEvent) {
        if (!localStorage.theme) {
            setMode(dark);
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
        }
    }
</script>

<button 
    onclick={toggleDarkMode} 
    class="ml-4 p-2 hover:opacity-75"
    aria-label="Toggle theme"
>
    {#if dark}
        <Sun size={20} />
    {:else}
        <Moon size={20} />
    {/if}
</button>
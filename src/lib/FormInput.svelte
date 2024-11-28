<script lang="ts">
	let { label, id, error, type, value = $bindable(), constraints = {} } = $props();
</script>

<div class="field">
    <label for={id} class="block">
      
      <span class="text-sm font-medium text-gray-700">{label}</span>
      {#if error}
        <span class="field-error flex items-center gap-1 text-red-600 dark:invert text-sm my-1">
          <svg 
            class="w-4 h-4" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          {error}
        </span>
      {/if}
    </label>
    
    <input
      {id}
      {type}
      bind:value
      {...constraints}
      class="mt-1 w-full rounded-md border p-2 
        {error ? 'border-red-500' : 'border-gray-300'}
        focus:border-[#8864c8]/90
        focus:outline-none
        focus:ring-1
        focus:ring-[#8864c8]/90"
      aria-invalid={!!error}
      aria-describedby={error ? `${id}-error` : undefined}
    />
  </div>

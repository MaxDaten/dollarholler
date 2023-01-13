<script lang="ts">
  import Trash from '$lib/components/Icon/Trash.svelte';
  export let lineItem: LineItem;
</script>

<div class="invoice-line-item border-b-2 border-fog py-2">
  <div>
    <input class="line-item" type="text" name="description" id="description" />
  </div>

  <div>
    <input
      class="line-item text-right"
      type="number"
      name="unitPrice"
      id="unitPrice"
      step="0.01"
      min="0"
    />
  </div>

  <div>
    <input
      class="line-item text-center"
      type="number"
      name="quantity"
      id="quantity"
      step="1"
      min="0"
    />
  </div>

  <div>
    <input
      class="line-item text-right"
      type="number"
      name="amount"
      id="amount"
      step="0.01"
      min="0"
    />
  </div>

  <div>
    <button class="center h-10 w-10 text-pastelPurple hover:text-lavenderIndigo"><Trash /></button>
  </div>
</div>

<style lang="postcss">
  input[type='text'],
  input[type='number'] {
    @apply h-10 w-full border-b-2 border-dashed border-stone-300;
  }
  input[type='text'] {
    @apply font-sans text-xl font-bold;
  }
  input[type='number'] {
    @apply font-mono text-base;
  }

  input[type='text']:focus,
  input[type='number']:focus {
    @apply border-solid border-lavenderIndigo outline-none;
  }
</style>

<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  import Trash from '$lib/components/Icon/Trash.svelte';
  import { centsToDollars, dollarsToCents, twoDecimals } from '$lib/components/utils/moneyHelpers';

  export let lineItem: LineItem;
  export let canDelete = false;
  export let isRequired = false;

  let dispatch = createEventDispatcher();

  let unitPrice: string = centsToDollars(lineItem.amount / lineItem.quantity);
  let amount: string = centsToDollars(lineItem.amount);

  $: {
    amount = twoDecimals(lineItem.quantity * Number(unitPrice));
    lineItem.amount = dollarsToCents(Number(amount));
  }
</script>

<div class="invoice-line-item border-b-2 border-fog py-2">
  <div>
    <input
      class="line-item"
      type="text"
      name="description"
      id="description"
      bind:value={lineItem.description}
      required={isRequired}
    />
  </div>

  <div>
    <input
      class="line-item text-right"
      type="number"
      name="unitPrice"
      id="unitPrice"
      step="0.01"
      min="0"
      bind:value={unitPrice}
      on:blur={() => {
        unitPrice = twoDecimals(Number(unitPrice));
        dispatch('updateLineItem');
      }}
      required={isRequired}
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
      bind:value={lineItem.quantity}
      on:blur={() => {
        dispatch('updateLineItem');
      }}
      required={isRequired}
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
      bind:value={amount}
      disabled
    />
  </div>

  <div>
    {#if canDelete}
      <button
        class="center h-10 w-10 text-pastelPurple hover:text-lavenderIndigo"
        on:click|preventDefault={() => {
          dispatch('removeLineItem', lineItem.id);
        }}
      >
        <Trash />
      </button>
    {/if}
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
  input[type='number']:disabled,
  input[type='text']:disabled {
    @apply border-b-0 bg-transparent px-0;
  }
</style>

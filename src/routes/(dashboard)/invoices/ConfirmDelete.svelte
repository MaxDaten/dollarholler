<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Button from '$lib/components/Button.svelte';
  import Modal from '$lib/components/Modal.svelte';
  import { centsToDollars, sumLineItems } from '$lib/components/utils/moneyHelpers';
  import { deleteInvoice } from '$lib/stores/InvoiceStore';
  import { snackbar } from '$lib/stores/SnackbarStore';

  export let invoice: Invoice;
  export let isModalShowing = false;

  const dispatch = createEventDispatcher();
</script>

<Modal isVisible={isModalShowing} on:close>
  <!-- min-h-[175px] is the modal min-h-[250px] - (2 x 28px padding) -->
  <div class="flex h-full min-h-[175px] flex-col items-center justify-between gap-6">
    <div class="text-center text-xl font-bold text-daisyBush">
      Are you sure you want to delete the invoice?
      <span class="text-scarlet">{invoice.client.name}</span> for
      <span class="text-scarlet">${centsToDollars(sumLineItems(invoice.lineItems))}</span>
    </div>
    <div class="flex gap-4">
      <Button
        label="Cancel"
        onClick={() => {
          dispatch('close');
        }}
        style="secondary"
        isAnimated={false}
      />
      <Button
        label="Yes, Delete It"
        onClick={() => {
          deleteInvoice(invoice);
          dispatch('close');
          snackbar.send({
            message: 'Your invoice was successfully deleted.',
            type: 'success'
          });
        }}
        style="destructive"
        isAnimated={false}
      />
    </div>
  </div>
</Modal>

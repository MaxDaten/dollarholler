<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import Trash from '$lib/components/Icon/Trash.svelte';
  import LineItemRows from './LineItemRows.svelte';

  const blankLineItem: LineItem[] = [
    {
      amount: 12.99,
      description: 'Item 1',
      id: '1',
      quantity: 2
    },
    {
      amount: 9.99,
      description: 'Item 2',
      id: '2',
      quantity: 1
    },
    {
      amount: 5.99,
      description: 'Item 3',
      id: '3',
      quantity: 3
    }
  ];
</script>

<h2 class="mb-7 font-sans text-3xl font-bold text-daisyBush">Add an Invoice</h2>

<form action="" class="grid grid-cols-6 gap-x-5">
  <!-- Client -->
  <div class="field col-span-2">
    <label for="client">Client</label>
    <select name="client" id="client">
      <option value="Briends">Briends GmbH</option>
    </select>
  </div>
  <div class="field col-span-2 flex items-end gap-x-4">
    <div class="text-base font-bold leading-[3.5rem] text-monsoon">or</div>
    <Button label="+ Client" onClick={() => {}} style="outline" isAnimated={false} />
  </div>

  <!-- Invoice Id -->
  <div class="field col-span-2">
    <label for="id">Invoice Id</label>
    <input type="number" name="id" />
  </div>

  <!-- Due Date -->
  <div class="field col-span-2">
    <label for="dueDate">Due Date</label>
    <input type="date" name="dueDate" />
  </div>

  <!-- Issue Date -->
  <div class="field col-span-2 col-start-5">
    <label for="issueDate">Issue Date</label>
    <input type="date" name="issueDate" />
  </div>

  <!-- Subject -->
  <div class="field col-span-6">
    <label for="subject">Subject</label>
    <input type="text" name="subject" />
  </div>

  <!-- Line Items -->
  <div class="field col-span-6">
    <LineItemRows lineItems={blankLineItem} />
  </div>

  <!-- Notes -->
  <div class="field col-span-6">
    <label for="notes"
      >Notes <span class="font-normal">(optional, displayed on invoice)</span></label
    >
    <textarea name="notes" id="notes" />
  </div>

  <!-- Terms -->
  <div class="field col-span-6">
    <div>
      <label for="terms"
        >Notes <span class="font-normal">(optional, enter your terms and conditions)</span></label
      >
      <textarea name="terms" id="terms" />
      <div class="text-xs text-gray-400">
        Formatting tips: <strong>*bold*</strong>, <em>_italics_</em>
      </div>
    </div>
  </div>

  <!-- Buttons -->
  <div class="field col-span-2">
    <!-- only visible if editing -->
    <Button
      label="Delete"
      onClick={() => {}}
      style="textOnlyDestructive"
      isAnimated={false}
      iconLeft={Trash}
    />
  </div>
  <div class="field col-span-4 flex justify-end gap-x-5">
    <Button label="Cancel" onClick={() => {}} style="secondary" isAnimated={false} />
    <Button label="Save" onClick={() => {}} style="primary" isAnimated={false} />
  </div>
</form>

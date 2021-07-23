<script>
  import Message from "./Message.svelte";
  export let MessagesArray = [];
  export let put;
  export let del;
</script>

<div class="messages">
  {#each MessagesArray as { msg, id, date }}
    <Message {msg} {id} {date} {put} {del} />
  {/each}
</div>

<style>
  .messages {
    background: none;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
</style>

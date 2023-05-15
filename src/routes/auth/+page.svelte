<script>
  import { signIn, signOut } from "@auth/sveltekit/client";
  import { page } from "$app/stores";
</script>

<h2>Auth</h2>
<p>
  {#if Object.keys($page.data.session || {}).length}
    {#if $page.data.session.user.image}
      <span
        style="background-image: url('{$page.data.session.user.image}')"
        class="avatar"
      />
    {/if}
    <span class="signedInText">
      <small>Signed in as</small><br />
      <strong
        >{$page.data.session.user.email || $page.data.session.user.name}</strong
      >
    </span>
    <button on:click={() => signOut()} class="button">Sign out</button>
  {:else}
    <span class="notSignedInText">You are not signed in</span>
    <a
      href="/auth/signin"
      class="buttonPrimary"
      data-sveltekit-preload-data="off">Sign in</a
    >
  {/if}
</p>

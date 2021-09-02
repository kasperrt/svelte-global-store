<script lang="ts">
  import { writable } from "svelte/store";
  import { external } from "./store/external";

  const internal = writable<string>(null);

  export let initial: string;
  export function getExternal() {
    return $external;
  }
  export function getInternal() {
    return $internal;
  }

  $external = initial;
  $internal = initial;

  setTimeout(() => {
    console.log("initial-data here is", initial);
    console.log("internal-store here is", $internal);
    console.log("external-store here is", $external);
  }, 3000);
</script>

<pre>
     Initial here is
     <code>
          {initial}
     </code>
      External here is
      <code>
          {$external}
      </code>
      Internal here is
      <code>
          {$internal}
      </code>
  </pre>

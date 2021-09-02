<script lang="ts">
  import { writable } from "svelte/store";

  import { data } from "./store/data";
  const internal = writable<string>(null);
  export let initial: string;
  export function getExternal() {
    return $data;
  }
  export function getInternal() {
    return $internal;
  }

  $data = initial;
  $internal = initial;
  setTimeout(() => {
    console.log("initial-data here is", initial);
    console.log("internal-store here is", $internal);
    console.log("data-store here is", $data);
  }, 3000);
</script>

<pre>
    {initial}
    Data here is
    <code>
        {$data}
    </code>
    Internal here is
    <code>
        {$internal}
    </code>
</pre>

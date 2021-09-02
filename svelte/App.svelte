<script lang="ts">
  import { data } from "./store/data";

  export let initial: string;
  export function getData() {
    return $data;
  }

  $data = initial;
  setTimeout(() => {
    console.log("initial-data here is", initial);
    console.log("data-store here is", $data);
  }, 3000);
</script>

<pre>
    {initial}
    Data here is
    <code>
        {$data}
    </code>
</pre>

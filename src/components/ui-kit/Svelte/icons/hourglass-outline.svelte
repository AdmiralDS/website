<script lang="ts">
  export let width: string = '22';
  export let height: string = '22';
  export let viewBox: string = `0 0 ${width} ${height}`;
  export let fill: string = 'none';
  export let stroke: string = 'none';
</script>

<svg xmlns="http://www.w3.org/2000/svg" {width} {height} {viewBox} {fill}>
  <path
    d="M11.5859 2C12.4766 2 12.9229 3.07715 12.293 3.70715L3.70703 12.2928C3.07715 12.9229 3.52344 14 4.41406 14L11.5859 14C12.4766 14 12.9229 12.9229 12.293 12.2928L3.70703 3.70715C3.07715 3.07715 3.52344 2 4.41406 2L11.5859 2Z"
    {stroke}
    stroke-opacity="1.0"
    stroke-width="1.5"
    stroke-linejoin="round"
  />
</svg>

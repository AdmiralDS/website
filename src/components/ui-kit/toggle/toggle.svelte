<script lang="ts">
	// import { get_current_component } from "svelte/internal";
	// import { createEventForwarder } from "$lib/internal";

	/** Controls whether the switch is toggled or not. */
	export let checked = false;

	/** Sets the input element's native `value` attribute for usage in forms. */
	export let value: any = undefined;

	/** Controls whether the switch is intended for user interaction, and styles it accordingly. */
	export let disabled = false;

	/** Specifies a custom class name for the switch. */
	let className = "";
	export { className as class };

	/** Obtains a bound DOM reference to the switch's <input /> element. */
	export let inputElement: HTMLInputElement = null;

	/** Obtains a bound DOM reference to the switch's outer container element. */
	export let containerElement: HTMLLabelElement = null;

	// const forwardEvents = createEventForwarder(get_current_component());
</script>

<!--
@component
The toggle switch represents a physical switch that allows users to turn things on or off, like a light switch. Use toggle switch controls to present users with two mutually exclusive options (such as on/off), where choosing an option provides immediate results. [Docs](https://fluent-svelte.vercel.app/docs/components/radiobutton)
- Usage:
    ```tsx
    <ToggleSwitch bind:checked />
    ```
-->
<label class="toggle-switch-container" bind:this={containerElement}>
	<input
		class="toggle-switch {className}"
		type="checkbox"
		bind:checked
		bind:this={inputElement}
		{value}
		{disabled}
		{...$$restProps}
	/>
	{#if $$slots.default}
		<span>
			<slot />
		</span>
	{/if}
</label>

<style lang="css">
	.toggle-switch {
		border: none;
		cursor: pointer;

		align-items: center;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		block-size: 20px;
		border-radius: 20px;
		display: inline-flex;
		font-family: var(--fds-font-family-text);
		font-size: var(--fds-body-font-size);
		font-weight: 400;
		inline-size: 35px;
		line-height: 20px;
		margin: 0;
		outline: none;
		position: relative;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}
	.toggle-switch::before {
		background-color: white;
		block-size: 12px;
		border-radius: 7px;
		content: "";
		inline-size: 12px;
		inset-inline-start: 3px;
		position: absolute;
		transition: 200ms ease-in-out transform;
	}
	.toggle-switch:checked {
		background-color: #0D42FF;
	}
	.toggle-switch:not(:checked) {
		background-color: #35383A;
	}
	.toggle-switch:checked:before {
		transform: translate(17px);
	}
</style>

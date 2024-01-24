<script lang="ts">
	// import { get_current_component } from "svelte/internal";
	// import { createEventForwarder } from "$lib/internal";

	/** @restProps {button | a} */
	/** Specifies the visual styling of the button. */
	export let variant: "primary" | "secondary";

	/** Controls whether the button is intended for user interaction, and styles it accordingly. */
	export let disabled = false;

	/** Specifies a custom class name for the button. */
	let className = "";
	export { className as class };

	/** Obtains a bound DOM reference to the button. */
	export let element: HTMLElement = null;

	// const forwardEvents = createEventForwarder(get_current_component());
</script>

<!--
@component
A button gives the user a way to trigger an immediate action. Some buttons are specialized for particular tasks, such as navigation, repeated actions, or presenting menus. [Docs](https://fluent-svelte.vercel.app/docs/components/button)
- Usage:
    ```tsx
    <Button>Click me!</Button>
    ```
-->
<button
	bind:this={element}
	role="button"
	class="button style-{variant} {className}"
	class:disabled
	{...$$restProps}
>
	<slot />
</button>

<style lang="css">
	.button{
		border-radius: 64px;
		text-align: center;

		/* 16/medium */
		font-family: Inter;
		font-size: 16px;
		font-style: normal;
		font-weight: 500;
		line-height: 20px; /* 125% */

		display: flex;
		height: 30px;
		padding: 4px 12px;
		justify-content: center;
		align-items: center;
		gap: 10px;

		cursor: pointer;
		border: none;
		outline: none;
	}
	.button.style-primary {
		background: var(--Blue, #0D42FF);
		color: var(--White, #FFF);
	}
	.button.style-secondary {
		background: var(--Light_grey, #E6EAF0);
		color: var(--Dark_grey, #35383A);
	}
</style	>

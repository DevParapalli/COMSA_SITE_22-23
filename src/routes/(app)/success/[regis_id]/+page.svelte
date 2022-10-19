<script>
	import 'iconify-icon';

    
</script>

<div class="pg-container">
	<h5>Registration Successful!</h5>
	<div class="svg">
		<!-- <img src="./confirm-icon.svg" class="check-mark"> -->
		<!-- <iconify-icon class="check-mark bg-green-600 rounded-full" width="200px" height="200px" icon="carbon:checkmark-outline"></iconify-icon> -->
		<div class="success-icon">
			<div class="success-icon__tip" />
			<div class="success-icon__long" />
		</div>
	</div>
	<div class="info w-full">
		<div class="info1 w-1/2">
			<p>Amount</p>
			<p>Name</p>
			<p>Event:</p>
			<p>Trans. ID:</p>
			<p>Contact:</p>
		</div>
		<div class="info2 w-1/2">
			<p>300</p>
			<p>John Doe</p>
			<p>CodeClash v6.9</p>
			<p>ASDFGH6343</p>
			<p>+918793150182</p>
		</div>
	</div>
</div>

<style lang="postcss">
	.pg-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		/* height: 100vh; */
		/* width: 100vw; */
		/* background-color: ; */
		@apply container;
	}
	.pg-container h5 {
		margin-top: 5rem;
		margin-bottom: 3rem;
		font-family: monospace;
        @apply lg:text-4xl md:text-2xl text-xl;
	}
	.svg {
		/* width: 7.4166rem; */
		/* margin: auto; */
	}
	.info {
		/* width: 90%; */
		/* margin-top: 3.5rem; */
		/* margin-left: auto; */
		/* margin-right: auto;; */
		/* font-size: 2rem; */
		font-family: monospace;
		text-align: center;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		@apply lg:text-3xl md:text-xl text-lg;
	}

	.info1 {
		text-align: right;
		font-weight: bold;
	}
	.info2 {
		text-align: left;
		margin-left: 2rem;
	}
	.info1 p,
	.info2 p {
		padding-top: 1rem;
	}

	.success-icon {
		display: inline-block;
		width: 8em;
		height: 8em;
		font-size: 20px;
		border-radius: 50%;
		border: 4px solid theme('colors.green.600');
		background-color: inherit;
		position: relative;
		overflow: hidden;
		transform-origin: center;
		-webkit-animation: showSuccess 180ms ease-in-out;
		animation: showSuccess 180ms ease-in-out;
		transform: scale(1);
	}

	.success-icon__tip,
	.success-icon__long {
		display: block;
		position: absolute;
		height: 4px;
		background-color: theme('colors.green.600');
		border-radius: 10px;
	}
	.success-icon__tip {
		width: 2.4em;
		top: 4.3em;
		left: 1.4em;
		transform: rotate(45deg);
		-webkit-animation: tipInPlace 300ms ease-in-out;
		animation: tipInPlace 300ms ease-in-out;
		-webkit-animation-fill-mode: forwards;
		animation-fill-mode: forwards;
		-webkit-animation-delay: 180ms;
		animation-delay: 180ms;
		visibility: hidden;
	}
	.success-icon__long {
		width: 4em;
		transform: rotate(-45deg);
		top: 3.7em;
		left: 2.75em;
		-webkit-animation: longInPlace 140ms ease-in-out;
		animation: longInPlace 140ms ease-in-out;
		-webkit-animation-fill-mode: forwards;
		animation-fill-mode: forwards;
		visibility: hidden;
		-webkit-animation-delay: 440ms;
		animation-delay: 440ms;
	}

	@-webkit-keyframes showSuccess {
		from {
			transform: scale(0);
		}
		to {
			transform: scale(1);
		}
	}

	@keyframes showSuccess {
		from {
			transform: scale(0);
		}
		to {
			transform: scale(1);
		}
	}
	@-webkit-keyframes tipInPlace {
		from {
			width: 0em;
			top: 0em;
			left: -1.6em;
		}
		to {
			width: 2.4em;
			top: 4.3em;
			left: 1.4em;
			visibility: visible;
		}
	}
	@keyframes tipInPlace {
		from {
			width: 0em;
			top: 0em;
			left: -1.6em;
		}
		to {
			width: 2.4em;
			top: 4.3em;
			left: 1.4em;
			visibility: visible;
		}
	}
	@-webkit-keyframes longInPlace {
		from {
			width: 0em;
			top: 5.1em;
			left: 3.2em;
		}
		to {
			width: 4em;
			top: 3.7em;
			left: 2.75em;
			visibility: visible;
		}
	}
	@keyframes longInPlace {
		from {
			width: 0em;
			top: 5.1em;
			left: 3.2em;
		}
		to {
			width: 4em;
			top: 3.7em;
			left: 2.75em;
			visibility: visible;
		}
	}
</style>

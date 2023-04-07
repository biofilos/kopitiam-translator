<script>
	import '../app.css';
</script>

<div class="container mx-auto flex flex-col justify-between h-screen">
	<div>
		<slot />
	</div>
	<footer
		class="h-10 p-6 rounded-lg bg-slate-200 shadow m-4 flex flex-col md:flex-row justify-center items-center md:justify-between"
	>
		<span class="text-sm text-gray-800">© 2023 Juan Felipe Ortiz</span>
		<ul class="text-sm text-gray-800">
			<li><a href="/">Home</a></li>
		</ul>
	</footer>
</div>

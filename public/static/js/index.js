seajs.config({
	alias : {
		main : 'main.js',
		loading : 'loading.js',
		modernizr : 'modernizr.js',
		moment : 'moment.js',
		jq :'jquery-1.11.0.min.js'
	},
	preload : ['moment']
});
seajs.use('./static/js/modules/loading', function(loading){
	loading.loadingWeb()
});
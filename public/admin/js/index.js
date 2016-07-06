seajs.config({
	alias : {
		moment : 'moment.js',
		jq :'jquery-1.11.0.min.js'
	},
	preload : ['jq','moment']
});
seajs.use('/admin/js/modules/main');
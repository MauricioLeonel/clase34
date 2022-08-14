const configLog = {
	appenders:{
		consola:{type:'console'},
		warnRout:{type:'file',filename:'./logs/warn.log'},
		errorRouter:{type:'file',filename:'./logs/error.log'},
		warnFilter:{
			type:'logLevelFilter',
			level:'warn',
			appender:'warnRout'
		},
		errorFilter:{
			type:'logLevelFilter',
			level:'error',
			appender:'errorRouter'
		}	
	},
	categories:{
		PROD:{
			appenders:['consola','warnFilter','errorFilter'],
			level:'all'
		},
		default:{
			appenders:['consola'],
			level:'all'
		}
	}
}

module.exports = configLog






// warnRouter:{type:'file',filename:'./logs/warn.log'},
// 		warnError:{
// 			type:'logLevelFilter',
// 			level:'warning',
// 			appender:'warnRouter'
// 		}
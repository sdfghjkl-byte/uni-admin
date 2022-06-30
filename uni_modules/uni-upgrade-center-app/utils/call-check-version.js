const {
	checkVersion
} = uniCloud.importObject('checkVersion')

export default function() {
	// #ifdef APP-PLUS
	return new Promise((resolve, reject) => {
		plus.runtime.getProperty(plus.runtime.appid, function(widgetInfo) {
			uniCloud.callFunction({
				name: 'uni-app-manager',
				data: {
					action: 'checkVersion',
					appid: plus.runtime.appid,
					appVersion: plus.runtime.version,
					wgtVersion: widgetInfo.version
				},
				success: (e) => {
					resolve(e)
				},
				fail: (error) => {
					reject(error)
				}
			})
		})
	})
	// #endif
	// #ifndef APP-PLUS
	return new Promise((resolve, reject) => {
		reject({
			message: '请在App中使用'
		})
	})
	// #endif
}

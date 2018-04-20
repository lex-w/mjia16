import * as util from '../common/js/util'
const cli = window.navigator.userAgent;
export default {
	/*用户信息*/
	userInfo: {
		userId: util.getSessionSt("userId"),
		umsUserId: util.getSessionSt("umsUserId"),
		userName: util.getSessionSt("userName"),
		userInvestId: util.getSessionSt("userInvestId"),
		investBankCard: util.getSessionSt("investBankCard"),
		loanBankCard: util.getSessionSt("loanBankCard"),
		riskCapacity: util.getSessionSt("riskCapacity"),
		certification: util.getSessionSt("certification")		
	},
	/*客户端信息*/
	clientType: {
		isApp: cli.indexOf("ios/1.0") >= 0 || cli.indexOf("android/1.0") >= 0, 
		isAndroid: cli.indexOf("android/1.0") >= 0,
		isIos: cli.indexOf("ios/1.0") >= 0,
		isZalljfApp: false,
	},
	/*用户微信信息*/
	wechatInfo: {
		openId: util.getCookie('openId'),
		accessToken: util.getCookie('accessToken'),
		refreshToken: util.getCookie('refreshToken')
	},
  	isLoading: false,
  	direction: 'forward',
  	count: 0
} 
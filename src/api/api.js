import fetch from './promise.js'

export const login = (pp, userId) => fetch(`api/user/${userId}`, {
	ppp: pp
}, 'get')

export const getFinanceList = (params) => fetch('/api/subjects/app-channel-revision', {
	origin: params.origin ||'app',
	type: params.type,
	full: params.full,
	sort: params.sort,
	sortType: params.sortType,
	page: params.page,
	pageLimit: params.pageLimit || 10,
	graceDaysLimit: params.graceDaysLimit,
	AnnualRateLimit: params.annualRateLimit,
	transferSubjectStatus: params.transferSubjectStatus,
	instal_type: params.instal_type,
	subjectType: params.subjectType,
	transferMoneyLimit: params.transferMoneyLimit,
	userId: params.userId || ''
}, 'get')

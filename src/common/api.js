import service from './http'

export function getLoveSay () {
	return service.get('/bot/loveSay')
}

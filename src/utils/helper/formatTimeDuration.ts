export function format(seconds: number) {
	const date = new Date(seconds * 1000);
	const hh = date.getUTCHours();
	const mm = date.getUTCMinutes();
	const ss = pad(date.getUTCSeconds());
	if (hh) {
		return `${hh}:${pad(mm)}:${ss}`;
	}
	return `${mm}:${ss}`;
}

export function pad(numberDate: number) {
	return ('0' + numberDate).slice(-2);
}

export function formatarTempo(segundos: number) {
	const h = Math.floor(segundos / 3600);
	const m = Math.floor((segundos % 3600) / 60);
	const s = segundos % 60;
	return `${h}h ${m}m ${s}s`;
}

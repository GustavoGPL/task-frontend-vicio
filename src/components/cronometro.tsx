'use client';
import { useCronometroStore } from '@/hooks/useCronometro';
import { formatarTempo } from '@/utils/functions';

const Cronometro = () => {
	const { segundos } = useCronometroStore();

	return (
		<div className="text-center mt-10">
			<h1 className="text-4xl text-slate-700 font-bold mb-4">
				{formatarTempo(segundos)}
			</h1>
		</div>
	);
};

export default Cronometro;

'use client';
import { EstatisticasLista } from '@/components/estatisticas';
import { useCronometroStore } from '@/hooks/useCronometro';

export default function Estatisticas() {
	return (
		<div className="flex w-full items-center flex-col p-4 sm:p-10 h-screen">
			<h1 className="w-full text-2xl font-bold mb-8">Estatísticas</h1>
			<section className="w-full border-[1px] border-slate-300 rounded-lg">
				<div className="p-4">
					<EstatisticasLista />
				</div>
			</section>
		</div>
	);
}

import { useMemo } from 'react';
import { useCronometroStore } from '@/hooks/useCronometro';
import { formatarTempo } from '@/utils/functions';

export function EstatisticasLista() {
	const { estudos } = useCronometroStore();

	const estatisticas = useMemo(() => {
		const porDisciplina: Record<
			string,
			{ total: number; temas: Record<string, number> }
		> = {};

		for (const estudo of estudos) {
			if (!porDisciplina[estudo.disciplina]) {
				porDisciplina[estudo.disciplina] = { total: 0, temas: {} };
			}

			porDisciplina[estudo.disciplina].total += estudo.tempoEstudado;
			porDisciplina[estudo.disciplina].temas[estudo.tema] =
				(porDisciplina[estudo.disciplina].temas[estudo.tema] || 0) +
				estudo.tempoEstudado;
		}

		return Object.entries(porDisciplina)
			.map(([disciplina, dados]) => {
				const temasOrdenados = Object.entries(dados.temas).sort(
					(a, b) => b[1] - a[1]
				);
				const temaMaisEstudado = temasOrdenados[0][0];

				return {
					disciplina,
					total: dados.total,
					temas: temasOrdenados.map(([tema, tempo]) => ({
						nome: tema,
						tempo,
						maisEstudado: tema === temaMaisEstudado,
					})),
				};
			})
			.sort((a, b) => b.total - a.total);
	}, [estudos]);

	return (
		<div className="space-y-6">
			{estatisticas.length > 0 ? (
				<div>
					{estatisticas.map(({ disciplina, total, temas }) => (
						<div
							key={disciplina}
							className="border p-4 rounded-xl shadow-sm bg-white"
						>
							<h2 className="text-xl font-bold mb-2">
								{disciplina} — Total: {formatarTempo(total)}
							</h2>
							<ul className="ml-4 list-disc space-y-1">
								{temas.map(({ nome, tempo, maisEstudado }) => (
									<li
										key={nome}
										className={`${
											maisEstudado
												? 'font-semibold text-blue-700'
												: 'text-gray-700'
										}`}
									>
										{nome} – {formatarTempo(tempo)}{' '}
										{maisEstudado && (
											<span className="text-yellow-500">🌟</span>
										)}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			) : (
				<div className="flex items-center justify-center p-6 bg-gray-100 rounded-xl shadow-md text-center">
					<div className="flex flex-col items-center text-gray-600">
						<p className="text-lg font-medium">
							Não há dados disponíveis para estatísticas. Armazene algum dado
							primeiro!
						</p>
					</div>
				</div>
			)}
		</div>
	);
}

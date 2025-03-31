'use client';

import { useCronometroStore } from '@/hooks/useCronometro';
import { formatarTempo } from '@/utils/functions';
import { motion } from 'framer-motion';

export default function SubjectCard() {
	const { estudos } = useCronometroStore();

	return (
		<div className="py-6 px-4 sm:px-12">
			<h2 className="text-center text-2xl text-slate-700 font-bold mb-10 border-t-2 py-6">
				Estudos
			</h2>
			<div
				className={`${
					estudos.length <= 0
						? 'text-center'
						: 'grid grid-cols-1 sm:grid-cols-2'
				} gap-4 p-4`}
			>
				{estudos && estudos.length > 0 ? (
					estudos.map((estudo, index) => (
						<motion.div
							className="bg-white shadow-md rounded-lg p-4 border"
							key={`${estudo.disciplina}-${estudo.tema}-${index}`}
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 20 }}
							transition={{
								type: 'spring',
								stiffness: 100,
								damping: 25,
								duration: 0.5,
							}}
						>
							<p className="font-semibold">
								📘 Disciplina: {estudo.disciplina}
							</p>
							<p className="text-sm text-gray-700">🧠 Tema: {estudo.tema}</p>
							<p className="text-sm text-gray-600">
								⏱️ Tempo estudado: {formatarTempo(estudo.tempoEstudado)}
							</p>
						</motion.div>
					))
				) : (
					<div className="text-center">Não há dados registrados</div>
				)}
			</div>
		</div>
	);
}

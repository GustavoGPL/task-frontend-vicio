import { TCronometroState } from '@/types/cronometro';
import { TEstudo } from '@/types/estudo';
import { create } from 'zustand';

export const useCronometroStore = create<TCronometroState>((set, get) => ({
	disciplina: '',
	tema: '',
	estudos: [],
	segundos: 0,
	ativo: false,
	intervaloId: null,

	iniciar: () => {
		const { intervaloId, ativo } = get();
		if (ativo || intervaloId) return;

		const id = setInterval(() => {
			set(state => ({ segundos: state.segundos + 1 }));
		}, 1000);

		set({ ativo: true, intervaloId: id });
	},

	pausar: () => {
		const { intervaloId } = get();
		if (intervaloId) {
			clearInterval(intervaloId);
			set({ intervaloId: null });
		}
		set({ ativo: false });
	},

	resetar: () => {
		const { intervaloId } = get();
		if (intervaloId) {
			clearInterval(intervaloId);
			set({ intervaloId: null });
		}
		set({ ativo: false, segundos: 0 });
	},

	salvarTempo: () => {
		const { intervaloId } = get();
		if (intervaloId) {
			clearInterval(intervaloId);
			set({ intervaloId: null });
		}
		set({ ativo: false, segundos: 0 });
		console.log('Tempo salvo');
	},

	setDisciplina: (disciplina: string) => set({ disciplina }),
	setTema: (tema: string) => set({ tema }),

	registrarEstudo: () => {
		const { disciplina, tema, segundos, estudos, intervaloId } = get();

		if (!disciplina || !tema || segundos <= 0) return;

		const novoRegistro: TEstudo = {
			disciplina,
			tema,
			tempoEstudado: segundos,
		};

		const estudoExistente = estudos.find(estudo => estudo.tema === tema);

		set({
			estudos: estudoExistente
				? estudos.map(estudo =>
						estudo.tema === tema
							? {
									...estudo,
									tempoEstudado: estudo.tempoEstudado + segundos,
							  }
							: estudo
				  )
				: [...estudos, novoRegistro],
			segundos: 0,
			ativo: false,
			intervaloId: intervaloId ? (clearInterval(intervaloId), null) : null,
		});

		console.log('Estudo registrado:', novoRegistro);
	},
}));

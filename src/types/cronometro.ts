import { TEstudo } from './estudo';

export type TCronometroState = {
	disciplina: string;
	tema: string;
	estudos: TEstudo[];
	segundos: number;
	ativo: boolean;
	intervaloId: NodeJS.Timeout | null;
	iniciar: () => void;
	pausar: () => void;
	resetar: () => void;
	salvarTempo: () => void;
	setDisciplina: (disciplina: string) => void;
	setTema: (tema: string) => void;
	registrarEstudo: () => void;
};

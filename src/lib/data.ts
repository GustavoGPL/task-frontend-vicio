export const subjects = [
	{
		id: 1,
		nome: 'Matemática',
		descricao:
			'Estudo das operações numéricas, álgebra, geometria, trigonometria, entre outros.',
	},
	{
		id: 2,
		nome: 'Português',
		descricao:
			'Estudo da língua portuguesa, incluindo gramática, literatura, interpretação de textos e redação.',
	},
	{
		id: 3,
		nome: 'História',
		descricao:
			'Estudo dos eventos passados, análise de contextos históricos e compreensão das mudanças sociais, políticas e culturais.',
	},
	{
		id: 4,
		nome: 'Física',
		descricao:
			'Estudo das leis naturais que governam a matéria e a energia, incluindo mecânica, termodinâmica, eletricidade, etc.',
	},
];

export const themesPerSubject = [
	{
		subject: 'Matemática', // Matemática
		themes: [
			{ id: 1, name: 'Álgebra' },
			{ id: 2, name: 'Geometria' },
			{ id: 3, name: 'Trigonometria' },
			{ id: 4, name: 'Cálculo' },
		],
	},
	{
		subject: 'Português', // Português
		themes: [
			{ id: 1, name: 'Gramática' },
			{ id: 2, name: 'Literatura Brasileira' },
			{ id: 3, name: 'Interpretação Textual' },
			{ id: 4, name: 'Redação' },
		],
	},
	{
		subject: 'História', // História
		themes: [
			{ id: 1, name: 'História do Brasil' },
			{ id: 2, name: 'História Mundial' },
			{ id: 3, name: 'Era Contemporânea' },
			{ id: 4, name: 'Revoluções' },
		],
	},
	{
		subject: 'Física', // Física
		themes: [
			{ id: 1, name: 'Mecânica' },
			{ id: 2, name: 'Eletricidade' },
			{ id: 3, name: 'Óptica' },
			{ id: 4, name: 'Termodinâmica' },
		],
	},
];

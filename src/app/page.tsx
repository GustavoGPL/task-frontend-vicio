import DisciplinaForm from '@/components/formulario-disciplina';
import SubjectCard from '@/components/disciplina-card';

export default function Home() {
	return (
		<div className="flex w-full items-center flex-col p-4 sm:px-10 sm:py-5 min-h-screen">
			<h1 className="w-full text-2xl text-slate-700 font-bold mb-5">
				Cronômetro de Estudos
			</h1>
			<section className="w-full border-[1px] border-slate-300 rounded-lg shadow-md">
				<div>
					<DisciplinaForm />
					<SubjectCard />
				</div>
			</section>
		</div>
	);
}

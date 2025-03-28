import DisciplinaForm from '@/components/formularioDisciplina';
import SubjectCard from '@/components/subjectCard';

export default function Home() {
	return (
		<div className="flex w-full items-center flex-col p-4 sm:p-10 h-screen overflow-auto">
			<h1 className="w-full text-2xl font-bold mb-8">Cronômetro de Estudos</h1>
			<section className="w-full border-[1px] border-slate-300 rounded-lg">
				<div>
					<DisciplinaForm />
					<SubjectCard />
				</div>
			</section>
		</div>
	);
}

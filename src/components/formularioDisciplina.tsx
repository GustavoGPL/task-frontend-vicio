'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { subjects, themesPerSubject } from '@/lib/data';
import Cronometro from './cronometro';
import { useCronometroStore } from '@/hooks/useCronometro';
import ModalTemplate from './template-modal';
import { useState } from 'react';
import { formatarTempo } from '@/utils/functions';
import { motion } from 'framer-motion';

const FormSchema = z.object({
	subject: z.string().min(2, {
		message: 'Campo obrigatório',
	}),
	theme: z.string().min(2, {
		message: 'Campo obrigatório',
	}),
});

export default function DisciplinaForm() {
	const {
		ativo,
		iniciar,
		pausar,
		resetar,
		disciplina,
		tema,
		segundos,
		setDisciplina,
		setTema,
		registrarEstudo,
	} = useCronometroStore();

	const [open, setOpen] = useState(false);

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			subject: disciplina || '',
			theme: tema || '',
		},
	});

	const selectedSubject = form.watch('subject');

	function onSubmit(data: z.infer<typeof FormSchema>) {
		registrarEstudo();
		setDisciplina('');
		setTema('');
		form.reset({ subject: '', theme: '' });
		setOpen(false);
	}

	return (
		<div className="flex flex-col justify-center items-center gap-5 p-3 sm:p-10">
			<motion.div
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
				className="w-full sm:w-3/4 md:w-1/2"
			>
				<Form {...form}>
					<form
						id="estudo-form"
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-6 p-4"
					>
						<FormField
							control={form.control}
							name="subject"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Matéria</FormLabel>
									<Select
										onValueChange={value => {
											field.onChange(value);
											setDisciplina(value);
											form.setValue('theme', '');
											setTema('');
										}}
										value={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Selecione a Disciplina" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{subjects.map(subject => (
												<SelectItem value={subject.nome} key={subject.id}>
													{subject.nome}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="theme"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Tema</FormLabel>
									<Select
										onValueChange={value => {
											field.onChange(value);
											setTema(value);
										}}
										value={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Selecione o tema" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{selectedSubject
												? themesPerSubject
														.filter(theme => theme.subject === selectedSubject)
														.flatMap(theme =>
															theme.themes.map(t => (
																<SelectItem value={t.name} key={t.id}>
																	{t.name}
																</SelectItem>
															))
														)
												: []}
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>

						<Cronometro />

						<div className="flex flex-col sm:flex-row gap-2 justify-center">
							<motion.div
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<Button
									type="button"
									className="bg-green-500 hover:bg-green-600 text-white w-full"
									onClick={ativo ? pausar : iniciar}
									disabled={!disciplina || !tema}
								>
									{ativo ? 'Pausar' : 'Iniciar'}
								</Button>
							</motion.div>
							<motion.div
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<Button
									type="button"
									className="bg-red-500 hover:bg-red-600 text-white w-full"
									onClick={resetar}
								>
									Resetar
								</Button>
							</motion.div>
							<motion.div
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<Button
									type="button"
									onClick={() => {
										pausar();
										setOpen(true);
									}}
									className="bg-blue-500 hover:bg-blue-600 text-white w-full"
									disabled={!disciplina || !tema}
								>
									Salvar Tempo
								</Button>
							</motion.div>
						</div>
					</form>
				</Form>
			</motion.div>

			<ModalTemplate
				title={'Confirme o registro do seus estudos'}
				open={open}
				onClose={() => setOpen(false)}
				body={
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.8 }}
						transition={{ duration: 0.5 }}
					>
						<div>
							<p>
								<b>Matéria:</b> {disciplina}
							</p>
							<p>
								<b>Tema:</b> {tema}
							</p>
							<p>
								<b>Tempo de estudo:</b> {formatarTempo(segundos)}
							</p>
						</div>
					</motion.div>
				}
				footer={
					<div className="flex w-full justify-center items-center">
						<Button
							form="estudo-form"
							type="submit"
							className="flex max-w-[300px] gap-2 min-w-6 w-auto md:w-auto bg-blue-500 hover:bg-blue-600 text-white"
						>
							Registrar estudo
						</Button>
					</div>
				}
			/>
		</div>
	);
}

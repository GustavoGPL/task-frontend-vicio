import { useCronometroStore } from '@/hooks/useCronometro';
import { formatarTempo } from '@/utils/functions';
import Link from 'next/link';
import { CgSandClock } from 'react-icons/cg';

export default function CronometroCard() {
	const { segundos } = useCronometroStore();

	return (
		<Link href={'/'}>
			<div
				className={`${
					segundos > 0 ? 'fixed' : 'hidden'
				} top-12 right-4 sm:right-8 md:right-12 bg-white text-gray-900 
			rounded-lg border border-gray-300 shadow-lg py-1 text-lg font-semibold 
			flex items-center justify-center w-[100px] sm:w-[140px] md:w-[160px]`}
			>
				{formatarTempo(segundos)}
			</div>
		</Link>
	);
}

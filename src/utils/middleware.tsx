'use client';
import CronometroCard from '@/components/cronometro-card';
import Sidebar from '@/components/sidebar';
import { usePathname } from 'next/navigation';
export default function Middleware({
	children,
}: {
	children: React.ReactNode;
}) {
	const path = usePathname();
	console.log('path', path);

	return (
		<div className="flex flex-row !min-w-screen">
			<Sidebar />
			{children}
			{path !== '/' && <CronometroCard />}
		</div>
	);
}

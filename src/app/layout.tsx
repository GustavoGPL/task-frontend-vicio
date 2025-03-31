import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/sidebar';
import Middleware from '@/utils/middleware';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Cronometro e Estatísticas',
	description:
		'cronômetro que registra o tempo dedicado pelos usuários ao estudo de diferentes disciplinas e temas.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${inter.className}, bg-white`}>
				<Middleware>{children}</Middleware>
			</body>
		</html>
	);
}

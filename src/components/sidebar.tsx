'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaChartBar } from 'react-icons/fa';
import { FiHome, FiMenu, FiX } from 'react-icons/fi';

export default function Sidebar() {
	const [isOpen, setIsOpen] = useState(true);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 640) {
				setIsOpen(false);
			} else {
				setIsOpen(true);
			}
		};

		window.addEventListener('resize', handleResize);
		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<div className="flex">
			<div
				className={`bg-gray-900 text-white flex flex-col p-3 shadow-lg transition-all duration-300 ${
					isOpen ? 'w-48' : 'w-16'
				} sm:w-48`}
			>
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="text-white mb-4 p-2 rounded hover:bg-gray-700 sm:hidden"
				>
					{isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
				</button>
				<nav className="flex flex-col space-y-4">
					<Link
						href="/"
						className="flex items-center p-2 rounded hover:bg-gray-700"
					>
						<FiHome size={24} />
						<span className={`ml-2 ${isOpen ? 'block' : 'hidden'}`}>
							Cronômetro
						</span>
					</Link>
					<Link
						href="/estatisticas"
						className="flex items-center p-2 rounded hover:bg-gray-700"
					>
						<FaChartBar size={24} />
						<span className={`ml-2 ${isOpen ? 'block' : 'hidden'}`}>
							Estatísticas
						</span>
					</Link>
				</nav>
			</div>
		</div>
	);
}

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ReactNode, useEffect, useState } from 'react';
import { SkeletonForm } from './skeleton-form';

export type TmodalTemplate = {
	icon?: {
		url: string;
		width: number;
		height: number;
	};
	title?: string | ReactNode;
	body?: ReactNode;
	footer: ReactNode;
	open: boolean;
	onClose?: () => void;
	loading?: boolean;
};

export default function ModalTemplate(props: TmodalTemplate) {
	const [modalKey, setModalKey] = useState(0);

	useEffect(() => {
		if (props.open) {
			setModalKey(prevKey => prevKey + 1);
		}
	}, [props.open]);

	return (
		<div
			className={`${
				props.open ? '' : 'hidden'
			} fixed inset-0 h-screen bg-black bg-opacity-30 flex justify-center items-center z-50`}
		>
			<motion.div
				key={modalKey}
				className="relative bg-white w-full lg:w-2/3 max-w-modal min-w-modal min-h-[40vh] rounded-md m-4"
				initial={{ opacity: 0, y: -100 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: 100 }}
				transition={{
					type: 'spring',
					stiffness: 200,
					damping: 25,
					duration: 0.5,
				}}
			>
				<div>
					{props.onClose && (
						<div className="absolute top-2 right-4 flex justify-end text-2xl">
							<p
								onClick={props.onClose}
								className="flex justify-end mr-4 text-2xl text-gray-500 hover:text-red-500 hover:cursor-pointer mt-2"
							>
								X
							</p>
						</div>
					)}
					<div className="flex flex-col mt-2 min-h-[35vh] items-center">
						<div className="flex flex-col flex-1 justify-end items-center">
							{props.icon && (
								<Image
									alt=""
									width={props.icon?.width || 50}
									height={props.icon?.height || 50}
									src={`${props.icon?.url || '/images/brasao_ceara.svg'}`}
									priority={true}
									style={{
										width: props.icon?.width || '50px',
										height: props.icon?.height || '50px',
									}}
								/>
							)}
							{props.title && (
								<div className="text-center px-4 text-xl">{props.title}</div>
							)}
						</div>

						{props.loading ? (
							<SkeletonForm />
						) : (
							<>
								<div className="flex flex-1 justify-center text-justify items-center w-full my-5 px-4">
									{props.body || ''}
								</div>
								<div className="w-3/4 h-fit mb-5 flex flex-1 flex-col justify-center">
									{props.footer}
								</div>
							</>
						)}
					</div>
				</div>
			</motion.div>
		</div>
	);
}

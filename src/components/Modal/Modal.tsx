'use client'
import { Dispatch, ReactNode, SetStateAction, useCallback, useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

interface ModalProps {
	title: string
	children: ReactNode
	showModal: boolean
	setShowModal: Dispatch<SetStateAction<boolean>>
}

export function Modal({ title, children, showModal, setShowModal }: ModalProps) {
	const closeModal = useCallback(() => setShowModal(false), [setShowModal])

	useEffect(() => {
		if (showModal)
			window.addEventListener('keydown', (e: KeyboardEvent) => {
				if (e.key === 'Escape') {
					closeModal()
				}
			})
	}, [showModal, closeModal])

	return (
		<div
			onClick={closeModal}
			className={`${showModal ? '' : 'opacity-0 pointer-events-none'} 
			fixed z-50 bg-gray-800/50 inset-0 flex items-center justify-center transition-all`}
		>
			<div
				onClick={e => e.stopPropagation()}
				className='bg-white w-full h-full md:max-h-[90%] max-w-screen-sm overflow-auto md:rounded-default'
			>
				<h2 className='border-b mb-2 p-4 flex justify-between font-medium text-xl'>
					{title}
					<button className='transition hover:text-primary' onClick={closeModal} title='Fechar'>
						<AiOutlineClose size={24} />
					</button>
				</h2>
				<div className='p-4'>{children}</div>
			</div>
		</div>
	)
}

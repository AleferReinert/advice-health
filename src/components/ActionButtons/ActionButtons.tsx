import { AiOutlineClose, AiOutlineEdit } from 'react-icons/ai'

interface ActionButtonsProps {}

export function ActionButtons({}: ActionButtonsProps) {
	return (
		<div className='flex gap-4'>
			{/* <input
				type='checkbox'
				checked={checkbox.checked}
				className='h-5 w-5 text-teal-500 mr-2 lg:mr-4'
				onChange={() => toggleIsCompleted(index)}
			/> */}
			<button title='Editar'>
				<AiOutlineEdit size={20} className='transition hover:text-primary' />
			</button>
			<button title='Excluir'>
				<AiOutlineClose size={20} className='transition hover:text-red-600' />
			</button>
		</div>
	)
}

import { AiOutlineClose, AiOutlineEdit } from 'react-icons/ai'

export function ActionButtons() {
	return (
		<div className='flex gap-4'>
			<button title='Editar'>
				<AiOutlineEdit size={20} className='transition hover:text-primary' />
			</button>
			<button title='Excluir'>
				<AiOutlineClose size={20} className='transition hover:text-red-600' />
			</button>
		</div>
	)
}

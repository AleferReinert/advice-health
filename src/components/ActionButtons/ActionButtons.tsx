import { AiOutlineClose, AiOutlineEdit } from 'react-icons/ai'

export interface ActionButtonsProps {
	onEdit: () => void
	onDelete: () => void
}

export function ActionButtons({ onEdit, onDelete }: ActionButtonsProps) {
	return (
		<div className='flex gap-4'>
			<button title='Editar' onClick={onEdit}>
				<AiOutlineEdit role='img' aria-hidden size={20} className='transition hover:text-yellow-600' />
			</button>
			<button title='Excluir' onClick={onDelete}>
				<AiOutlineClose role='img' aria-hidden size={20} className='transition hover:text-red-600' />
			</button>
		</div>
	)
}

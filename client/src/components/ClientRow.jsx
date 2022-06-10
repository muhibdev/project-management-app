import { useMutation } from '@apollo/client';
import { FaTrash } from 'react-icons/fa';
import { GET_CLIENTS } from '../queries/clientQuery';
import { GET_PROJECTS } from '../queries/projectQuery';
import { DELETE_CLIENT } from '../mutations/clientMutation';

const ClientRow = ({ client }) => {
	const [deleteClient] = useMutation(DELETE_CLIENT, {
		variables: { id: client.id },
		refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }],
	});
	// });
	return (
		<tr key={client.id}>
			<td>{client.name}</td>
			<td>{client.email}</td>
			<td>{client.phone}</td>
			<td>
				<button className='btn btn-sm btn-danger' onClick={deleteClient}>
					<FaTrash />
				</button>
			</td>
		</tr>
	);
};

export default ClientRow;

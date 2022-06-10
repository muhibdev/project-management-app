import { useQuery } from '@apollo/client';
// import ClientRow from './ClientRow';
import { GET_PROJECTS } from '../queries/projectQuery';
import ProjectCard from './ProjectCard';
import Spinner from './Spinner';

const Projects = () => {
	const { loading, data, error } = useQuery(GET_PROJECTS);

	if (loading) return <Spinner />;
	if (error) return <p>Somthing Went Wrong :(</p>;

	return data.projects.length > 0 ? (
		<div className='row mt-4'>
			{data.projects.map((project) => (
				<ProjectCard key={project.id} project={project} />
			))}
		</div>
	) : (
		<p>No Projects</p>
	);
};

export default Projects;

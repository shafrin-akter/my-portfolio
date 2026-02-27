import ProjectCard from './ProjectCard';

export default function ProjectGrid({ projects }) {
  if (!projects?.length) {
    return (
      <p className="py-12 text-center text-gray-500">No projects found.</p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  );
}

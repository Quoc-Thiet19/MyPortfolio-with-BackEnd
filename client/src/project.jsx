import ResourceManager from '../components/ResourceManager'

export default function Project() {
  return <ResourceManager title="Featured Projects" endpoint="/api/projects" fields={[
    { name: 'title', label: 'Title' }, { name: 'completion', label: 'Completion date', type: 'date' },
    { name: 'tech', label: 'Technologies' }, { name: 'description', label: 'Description', type: 'textarea' },
  ]} />
}

import ResourceManager from '../components/ResourceManager'

export default function Education() {
  return <ResourceManager title="Education & Qualifications" endpoint="/api/qualifications" fields={[
    { name: 'title', label: 'Qualification' }, { name: 'school', label: 'School' },
    { name: 'completion', label: 'Completion date', type: 'date' }, { name: 'description', label: 'Description', type: 'textarea' },
  ]} />
}

import './style.css';
import {BpmnVisualization, FitType} from 'bpmn-visualization';
// This is simple example of the BPMN diagram, loaded as string. The '?.raw' extension support is provided by Vite.
// for other load methods, see https://github.com/process-analytics/bpmn-visualization-examples
import diagram from './diagram.bpmn?raw';

// Instantiate BpmnVisualization, pass the container HTMLElement - present in index.html
const bpmnVisualization = new BpmnVisualization({
  container: 'bpmn-container',
  navigation: {
    enabled: true,
  },
});
// Load the BPMN diagram defined above
bpmnVisualization.load(diagram, {fit: {type: FitType.Center, margin: 20}});

// Highlight task
bpmnVisualization.bpmnElementsRegistry.addCssClasses(
  [
    'Activity_00vbm9s', // Record Goods Receipts
    'Activity_1t65hvk', // Create Purchase Order Item
  ],
  'bpmn-highlight',
);

// Display the bpmn-visualization version in the footer
const footer = document.querySelector<HTMLElement>('footer')!;
const version = bpmnVisualization.getVersion();
const versionAsString = `bpmn-visualization@${version.lib}`;
const dependenciesAsString = [...version.dependencies].map(([name, version]) => `${name}@${version}`).join('/');
footer.textContent = `${versionAsString} with ${dependenciesAsString}`;

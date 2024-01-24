import Card from '../components/Card';
import CardStack from '../components/CardStack';
import Container from 'react-bootstrap/Container';

const Experience = () => {
  return (<Container>
    <h1>Experience</h1>
    <CardStack>
      <Card title={<span><b>Ordergroove</b> Senior Software Engineer on Merchant Growth team</span>}>
        <ul>
          <li>Subject matter expert on Shopify Integration</li>
          <ul>
            <li>Designed and presented technical architecture training for Shopify and cart offers</li>
            <li>Led inter-team coordination to upgrade to Shopify App Embeds and trained team members</li>
          </ul>
          <li>Proposed, prototyped, and evaluated improvements to dashboards that are fully code-customizable by merchants and serve millions of subscribers</li>
          <ul>
            <li>Led technical refinement and prototyping of plugin-based option to update merchant-edited code</li>
            <li>Created flow in merchant portal for merchants to upgrade to code editor from legacy template</li>
          </ul>
          <li>Made tech and product suggestions for team projects, such as new design system and multi-currency support</li>
          <li>Advocated for accessibility improvements, including scoping and resolving compliance with WCAG Level AA</li>
          <li>Resolved or routed urgent merchant and internal tickets requiring engineer input</li>
          <li>Created components and company development standard for new design system with Bootstrap</li>
          <li>Independently learned Go and release processes to push time-critical tickets to production</li>
          <li>Created new test suite in Cypress for testing file import using Jenkins, Celery, and Docker</li>
        </ul>
      </Card>
      <Card title={<span><b>Ordergroove</b> Software Engineer on Merchant Growth team</span>}>
        <ul>
          <li>Implemented re-branding of merchant portal serving DTC merchants ranging from SMB to Enterprise</li>
          <li>Created productized cart offers for Shopify based on learnings from Partnerships Team proof of concept</li>
        </ul>
      </Card>
      <Card title={<span><b>Ordergroove</b> Software Engineer on Partnerships team</span>}>
        <ul>
          <li>Adopted Shopify’s latest webhooks and APIs to improve Ordergroove’s webhook integration</li>
          <li>Created proof of concept for cart offers on Shopify</li>
          <li>Updated Ordergroove Shopify app integration to integrate with Shopify Online Store 2.0</li>
        </ul>
      </Card>
      <Card title={<span><b>ARUP</b> Full Stack Developer</span>}>
        <ul>
          <li>Developed endpoints in Python for API using AWS Lambda and API Gateway </li>
          <li>Independently maintained and added features to Python automation handling time-sensitive documents</li>
          <li>Scoped, estimated, and completed new Python automation projects for internal clients</li>
        </ul>
      </Card>
      <Card title={<span><b>ARUP</b> Advanced Technology and Research Graduate Analyst</span>}>
        <ul>
          <li>Ensured the correctness of a weather program while improving performance by 5000x </li>
          <li>Analyzed weather data with Pandas in Python to determine design parameters and analyze building behavior</li>
          <li>Performed and automated signal analysis on vibration measurements to determine frequency content</li>
          <li>Taught engineers basic Python and programming skills as Python Club TA</li>
          <li>Model buildings and analyze seismic beahvior using LS-DYNA finite element analysis engine</li>
          <li>Perform vibration testing and analyze results to benchmark performance</li>
        </ul>
      </Card>
      <Card title={<span><b>Carnegie Mellon Civil Engineering Department</b> CEE Graduate Research Assistant</span>}>
        <ul>
          <li>Measured floor structural vibrations and performed signal analysis using MATLAB</li>
          <li>Researched and designed 20x7ft wooden floor system for footstep vibration testing</li>
        </ul>
      </Card>
      <Card title={<span><b>TranSystems</b> Summer Intern</span>}>
        <ul>
          <li>Pitched new Microsoft Access database to manager to replace old system of Excel spreadsheets</li>
          <li>Assessed internal and external user needs and customized UI for key use cases</li>
          <li>Documented structure of database code and instructions for use</li>
          <li>Trained another engineer for ongoing support of database after end of internship</li>
        </ul>
      </Card>
      <Card title={<span><b>Crown Castle Inc</b> Construction Engineering Intern/Co-op</span>}>
        <ul>
          <li>Developed new Microsoft Access database and streamlined existing databases using self-taught VBA</li>
          <li>Proofread documentation and standards</li>
          <li>Reviewed constractor reports for compliance with company standards</li>
        </ul>
      </Card>
    </CardStack>

  </Container>);
}


export default Experience
import Card from '../components/Card';
import CardStack from '../components/CardStack';
import Container from 'react-bootstrap/Container';

const Education = () => {
  return (<Container>
    <h1>Education</h1>
    <CardStack>
      <Card title={<span><b>Carnegie Mellon University</b> Masters in Civil Engineering</span>}>
        <ul>
          <li>Focus Area: Advanced Infrastructure Systems (focus on intelligent buildings, including coursework on control systems, sensors, programming, and databases)</li>
          <li>GPA: 4.0</li>
          <li>Relevant Coursework:
            <ul>
              <li><b>Data Structures and Algorithms:</b> course 15-122 from the computer science school at CMU. This course focused on coding in C and writing provably correct code, as well as on learning data structures and algorithms such as linked lists and quicksort.</li>
              <li><b>Data Mining and Machine Learning for Smart Structures:</b> This course focused on how to apply machine learning to sensor data to answer research questions. My team's final project was creating a system that could detect bad posture based on pressure readings from a keyboard wrist rest.</li>
              <li><b>Data Analytics:</b> An introduction to data analytics using R, Tableau, and Excel.</li>
            </ul>
          </li>
        </ul>
      </Card>
      <Card title={<span><b>Carnegie Mellon University</b> Bachelors of Science in Civil Engineering</span>}>
        <ul>
          <li>Minor in Philosophy</li>
          <li>GPA: 3.92</li>
          <li>Relevant Coursework:
            <ul>
              <li>Python prototyping and web development for infrastructure</li>
              <li>Data Acquisition</li>
              <li>Data Management</li>
              <li>Building Controls and Diagnostics</li>
              <li>Principles of Computing</li>
            </ul>
          </li>
        </ul>
      </Card>
    </CardStack>

  </Container>);
}

export default Education;
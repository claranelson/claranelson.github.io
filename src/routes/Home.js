import Card from '../components/Card';
import CardStack from '../components/CardStack';
import Container from 'react-bootstrap/Container';

const Home = () => {
    return (<Container>
        <h1 className="text-center">Clara Nelson — Senior Software Engineer</h1>
        <CardStack className="col-lg-8">
            <Card title="Background">
                <p>I'm a Senior Software Engineer at Ordergroove, where I work on the Merchant Growth team on tools to help  merchants manage their programs and customers manage their subscriptions. This work includes the merchant portal, the subscription offer widgets that appear on product pages for customers to subscribe, and the customer interface for managing their subscriptions. My work on these tools primarily involves React, Redux, Less, Python, and Go. Previously at Ordergroove, I also worked on the Shopify integration in Node.js.</p>
            </Card>
            <Card title="Experience Summary">
                <p>A full description of my experience can be found <a href="/experience">here</a>.</p>
                <p>Some areas I have experience in:</p>
                <ul>
                    <li>Building websites in React</li>
                    <li>Using Redux for state management</li>
                    <li>Building and debugging templates in Liquid</li>
                    <li>Backend development in Go and Django</li>
                    <li>Support for internal and external clients</li>
                    <li>Managing conflicting product considerations and working with PM to refine product needs versus engineering complexity</li>
                </ul>
            </Card>
            <Card title="About Me">
                <p>I also have quite a few hobbies. I enjoy philosophical discussions and debate, and at Carnegie Mellon I was the president of the Humanist League, an organization that facilitates discussions on a wide array of topics and brings in speakers. I also enjoy writing novels, and have participated 5 times in National Novel Writing Month (NaNoWriMo), a competition where you write a 50,000 word novel in the month of November. I also enjoy playing video games such as Outer Wilds, Fable, and The Forgotten City.</p>
            </Card>
        </CardStack>
        <div className="col-lg-4">
            <img src="./profilepic.jpg" alt="Profile Picture" className="img-fluid rounded-lg" />
        </div>
    </Container>);
}

export default Home;
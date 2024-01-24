import Card from 'react-bootstrap/Card';

export const TitleBodyCard = ({ title, children, ...props }) => {
  return (
    <Card {...props} body={true}>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{children}</Card.Text>
    </Card>
  )
}

export default TitleBodyCard
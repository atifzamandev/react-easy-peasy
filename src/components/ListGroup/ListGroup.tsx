import styled from 'styled-components'
import { FaHandPointRight } from 'react-icons/fa'

const List = styled.ul`
  list-style: none;
  padding: 0;
`
const ListItem = styled.li`
  padding: 5px 0;
`
const style = {
  marginRight: '12px',
}

const ListGroup = () => {
  const items = ['New Yark', 'Washington', 'London', 'Paris', 'Tokyo', 'Berlin', 'Moscow']

  const handleClick = (event: React.MouseEvent<HTMLLIElement>) => console.log(event)

  return (
    <>
      <h1>Cities List</h1>
      <List>
        {items.map((item) => (
          <ListItem key={item} onClick={handleClick}>
            <FaHandPointRight style={style} />
            {item}
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default ListGroup

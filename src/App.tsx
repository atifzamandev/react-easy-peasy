import { useState } from 'react'
import Button from './components/Button'
import ExpendableText from './components/ExpandableText'

function App() {
  const [drink, setDrink] = useState({
    title: 'Koffe',
    price: 10,
  })

  const [customer, setCustomer] = useState({
    name: 'Atif',
    address: {
      city: 'New York',
      zipCode: '10001',
    },
  })

  const [bugs, setBugs] = useState([
    { id: 1, title: 'bug 1', fixed: false },
    { id: 2, title: 'bug 2', fixed: false },
  ])

  const [tags, setTags] = useState(['happy', 'sad', 'excited'])

  const handleClick = () => {
    setDrink({ ...drink, price: 20 })
  }

  const handleCustomer = () => {
    setCustomer({ ...customer, address: { ...customer.address, zipCode: '10002' } })
  }

  const handleTags = () => {
    //setTags([...tags, 'aswesome']) // Add item to array
    //setTags(tags.filter(tag => tag != 'sad')) //Remove Item
    setTags(tags.map((tag) => (tag === 'sad' ? 'super' : tag)))
  }

  const handleButFix = (bugId:number) => {
    setBugs(bugs.map((bug) => (bug.id === bugId ? { ...bug, fixed: !bug.fixed } : bug)))
  }

  return (
    <>
      <Button children={`${drink.title} : ${drink.price}`} color='Primary' onClick={handleClick} />

      <Button
        children={`${customer.address.city} : ${customer.address.zipCode}`}
        color='Primary'
        onClick={handleCustomer}
      />

      {tags.join(', ')}

      <Button children='Add tag' onClick={handleTags} />

      <ul>
        {bugs.map((bug) => (
          <li key={bug.id}>
            {bug.id} : {bug.title} : {bug.fixed ? 'Fixed' : 'New'}
            <Button children='Click' onClick={()=>handleButFix(bug.id)} />

          </li>
        ))}
      </ul>
      {/* <ListGroup />
    <Button children="Click me" color="Error" />
    <Like onClick={()=>console.log('clicked')}/> */}
    <ExpendableText maxChars={70}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nihil aliquam voluptatum facilis repellat sit qui id, magni recusandae eveniet officiis natus, assumenda suscipit at vitae vero velit. Eos nihil ad dignissimos quod incidunt, reprehenderit alias vel, asperiores in porro nam quisquam odio eligendi maxime necessitatibus architecto libero? Neque dolores quas quam. Voluptates optio quo doloremque? Aperiam quaerat maiores mollitia accusantium minus omnis qui. Architecto, quas commodi. Perferendis, in. Quo pariatur unde veritatis exercitationem sunt dolor voluptas amet id, ratione eveniet eaque rem laboriosam veniam nulla a aspernatur suscipit? Corrupti quibusdam ad quisquam. Suscipit aperiam neque rerum esse error unde.
    </ExpendableText>
    </>
  )
}

export default App

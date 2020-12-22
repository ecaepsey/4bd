import React from 'react'
import Comment from '../components/Comment'
import {InputGroup, FormControl} from 'react-bootstrap'

const comments = Array.from([1,2,3,4])

const HistoryScreen = () => {
    return (
        <div>
            <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium expedita doloremque dolorem architecto culpa quibusdam voluptatibus, numquam nobis nesciunt libero temporibus fugit natus pariatur aut deleniti, perspiciatis illo? Iusto.
            Voluptate vitae excepturi quae explicabo! Enim ducimus, totam facilis excepturi et quisquam assumenda labore temporibus voluptas quibusdam cum dolore asperiores suscipit itaque tempora deserunt doloremque fuga eveniet veniam deleniti ipsum.
            Quas, atque quia obcaecati ab cum exercitationem, qui ullam dolorum aperiam similique deserunt animi vero. Sapiente suscipit obcaecati ratione, porro culpa ut veritatis quibusdam aspernatur, magni hic, rem iure alias?
        </div>
        {comments.map((item) =>  <Comment/>)}
        <InputGroup className="mb-3">
   
    <FormControl
      placeholder="Что было дальше"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </InputGroup>

        
        </div>
        
    )
}

export default HistoryScreen

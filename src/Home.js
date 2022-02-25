import React from 'react'

const Home = (props) => {
    const {obj} = props;
    console.log(props);
  return (
    <div>{obj.name}{obj.age}</div>
  )
}

export default Home
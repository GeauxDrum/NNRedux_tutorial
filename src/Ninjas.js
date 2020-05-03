import React from 'react';

const Ninjas = ({mikes, deleteNinja}) => {
  const ninjaList = mikes.map(hello => {
    if(hello.age > 20) {
      return (
        <div className="ninja" key={hello.id}>
          <div>Name: {hello.name}</div>
          <div>Age: {hello.age}</div>
          <div>Belt: {hello.belt}</div>
          <button onClick={() => {deleteNinja(hello.id)}}>Delete</button>
      </div>
      )
    } else {
      return null
    }
  });
  return(
    <div className="ninja-list">
      {ninjaList}
    </div>
  )
}

export default Ninjas
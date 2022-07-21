const ListLostItems = (props) => {

  return (
    <div className="card">
      <div className="info-wrapper flex-col">
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <p>{props.date}</p>
        
      </div>
    </div>
   
  )
}

export default ListLostItems
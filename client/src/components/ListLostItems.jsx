const ListLostItems = (props) => {

  return (
    <div className="card">
      <div className="info-wrapper flex-col">
        <p>{props.name}</p>
        <p>{props.description}</p>
        <p>{props.date}</p>
        
      </div>
    </div>
   
  )
}

export default ListLostItems
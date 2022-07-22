import { useState } from 'react'
import axios from 'axios'
const InputLostItems = (props) => {
  const [lostItem, setUserEntry1] = useState("")
  const [description, setUserEntry2] = useState("")
  const [date, setUserEntry3] = useState("")


  const handleLostItem = (e, num) => {
    console.log(num)
    console.log(e.target.value)
    setUserEntry1(e.target.value)
  }

  const handleDescription = (e, num) => {
    console.log(num)
    console.log(e.target.value)
    setUserEntry2(e.target.value)

  }
  const handleDate = (e, num) => {
    console.log(num)
    console.log(e.target.value)
    setUserEntry3(e.target.value)

  }

  const handleSubmit = async(e)=>{
    let formData = {
      name: lostItem,
      description: description,
      dateLost: date
    }
    let res = await axios.post('http://localhost:3001/items', formData)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log(res)
    
  }




  return(
<div className="container">
  <div className="add">
    <input   type="String"
  name="num1"
  placeholder="Tell us what you lost"
  value={lostItem}
  onChange={(e) => handleLostItem(e, 'num1')} />
    <span>             </span>
    <input   type="String"
  name="num2"
  placeholder="Give us a description please"
  value={description}
  onChange={(e) => handleDescription(e, 'num2')} />
  <input   type="String"
  name="num3"
  placeholder="MM-DD-YYYY"
  value={date}
  onChange={(e) => handleDate(e, 'num3')} />
    <button onClick={handleSubmit} >Submit Lost Item</button>
  </div>
</div>
)
}


export default InputLostItems
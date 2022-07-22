import { useState } from 'react'

const InputLostItems = (props) => {
  const [userEntry1, setUserEntry1] = useState("")
  const [userEntry2, setUserEntry2] = useState("")
  const [userEntry3, setUserEntry3] = useState("")


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




  return(
<div className="container">
  <div className="add">
    <input   type="String"
  name="num1"
  placeholder="Tell us what you lost"
  value={userEntry1}
  onChange={(e) => handleLostItem(e, 'num1')} />
    <span>             </span>
    <input   type="String"
  name="num2"
  placeholder="Give us a description please"
  value={userEntry2}
  onChange={(e) => handleDescription(e, 'num2')} />
  <input   type="String"
  name="num3"
  placeholder="MM-DD-YYYY"
  value={userEntry3}
  onChange={(e) => handleDate(e, 'num3')} />
    <button >Submit Lost Item</button>
  </div>
</div>
)
}


export default InputLostItems
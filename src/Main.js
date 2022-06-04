function ItemMarks  (mark)  {
  return (
    <li>
      <div class="choice">
        <input type="radio" className="scales" name="scales" />
        <label for="scales" className="label">{mark.index}</label>
      </div>
    </li>
  )
}

function Main () {
  const createArray = (size) => [...new Array (size)]
  return (
    <div className="main">
      <h2>How would you rate our course?</h2>
      <ul>
        {
          createArray(10).map((el, index) => <ItemMarks index={index +1} />)
        }
      </ul>
    </div> 
  );
}
export default Main;
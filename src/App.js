import React, {useState, useRef} from 'react'
import PriceCalculator from "./PriceCalculator";
function App() {
  const [prices, setPrices] = useState([])
  var [lowestPrice, setLowestPrice] = useState(0)
  var [recommendedPrice, setRecommendedPrice] = useState(0)
  //[{id:1, price: 599, qty: 1}, {id:2, price: 399, qty: 2}]
  const priceCostRef = useRef()
  const priceWeightRef = useRef()
  const priceSoldRef = useRef()
  const qtySoldRef = useRef()/**/
  const exchangeRate = 31
  const weightCost = 4.5
  const nycSalesTax = 0.08875
  const shopeeFee = 0.15
  const defaultProfit = 12
  const lowestProfit = 6.5
  
  /*var lowestPrice = 10;
  var recommendedPrice = 0;*/
  function handleAddPrice(e) {
    const priceSold = priceSoldRef.current.value
    const qtySold = qtySoldRef.current.value
    if (priceSold === 0) return
    console.log(priceSold)/**/
  }
  function handleCostChange(e) {
    console.log("change!")
    var cost = parseFloat((priceCostRef.current.value)*(1+nycSalesTax) + weightCost * parseFloat(priceWeightRef.current.value)*(1+shopeeFee))
    var newRecommendedPrice = Math.ceil((cost + defaultProfit)*exchangeRate/100)*100 -1
    var newLowestPrice = Math.ceil((cost + lowestProfit)*exchangeRate/100)*100 - 1 
    setRecommendedPrice(newRecommendedPrice)
    setLowestPrice(newLowestPrice)

  }
  function handleWeightChange(e) {
    console.log("change!")
    var cost = parseFloat((priceCostRef.current.value)*(1+nycSalesTax) + weightCost * parseFloat(priceWeightRef.current.value)*(1+shopeeFee))
    var newRecommendedPrice = Math.ceil((cost + defaultProfit)*exchangeRate/100)*100 - 1
    var newLowestPrice = Math.ceil((cost + lowestProfit)*exchangeRate/100)*100 - 1
    setRecommendedPrice(newRecommendedPrice)
    setLowestPrice(newLowestPrice)

  }
  return (
    <>
        <h1>Diamond Dreams NY</h1>
        <h2>直播报价计算器</h2>

        <span>税前价格（USD）</span>
        <input ref={priceCostRef} defaultValue="0" type="number" onChange={handleCostChange} />
        <br></br>
        <span>重量（LBS）</span>
        <input ref={priceWeightRef} defaultValue="0" type="number"onChange={handleWeightChange} />
        <br></br>
        <span>建议价（NT$）： {recommendedPrice} </span> <span id="recommendedPrice"></span>
        <br></br>
        <span>最低价（NT$）： {lowestPrice} </span>
        <br></br>
        <span>成交价格（NT$）</span><input ref={priceSoldRef} type="number"/>
        <br></br>
        <span>成交件数（CT）</span><input ref={qtySoldRef} type="number"/>
        <br></br>
        <button onClick={handleAddPrice}>记录成交</button>
        <br></br>
        <h2>成交记录</h2>
        今日成交数 {prices.length}
        <PriceCalculator prices={prices} />
    </>
  );
}

export default App;

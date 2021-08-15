function calc()
{
  var n = document.getElementById('num').value
  if (n%3==0 && n%5==0)
    document.getElementById('result').innerText="FIZZ-BUZZ"
  
  else if(n%3==0)
    document.getElementById('result').innerText = "Fizz"
  
  else if(n%5==0)
    document.getElementById('result').innerText = "BUZZ"
  
  else
    document.getElementById('result').innerText = n
}
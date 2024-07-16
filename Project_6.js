function Sum() 
 {
    const x = parseFloat(document.getElementById('x').value);
    const y = parseFloat(document.getElementById('y').value);
    const sum = x+y;
    document.getElementById('result').textContent = `The sum is: ${sum}`;
  }
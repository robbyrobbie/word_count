userCount = document.getElementById('count1');
userCheck = document.getElementById('check1');
userRslt = document.getElementById('result1');

userCheck.addEventListener('click', () => {
  
  const countValue = userCount.value;
  const letter = countValue.split("");
  userRslt.textContent = letter.length;
});
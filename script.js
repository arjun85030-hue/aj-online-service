const statusButton = document.getElementByById('checkStatus');
const statusInput = document.getElementById('applicationNumber');
const statusResult = document.getElementById('statusResult');

statusButton.addEventListener('click', () => {
  const number = statusInput.value.trim();
  if (!number) {
    statusResult.textContent = 'कृपया आवेदन नंबर दर्ज करें।';
    statusResult.style.color = '#c24141';
    return;
  }
  statusResult.style.color = '#1e73be';
  statusResult.textContent = `नंबर ${number} के लिए डेमो स्थिति: आवेदन प्राप्त हुआ।`;
});

statusInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') statusButton.click();
});


(function() {
  const chatButton = document.createElement('button');
  chatButton.innerText = '💬 Chat with IslandWave Assistant';
  chatButton.style.position = 'fixed';
  chatButton.style.bottom = '20px';
  chatButton.style.right = '20px';
  chatButton.style.background = '#003366';
  chatButton.style.color = '#fff';
  chatButton.style.padding = '10px 15px';
  chatButton.style.borderRadius = '50px';
  chatButton.style.cursor = 'pointer';
  document.body.appendChild(chatButton);

  chatButton.addEventListener('click', () => {
    alert('IslandWave AI Assistant coming soon! This will answer questions about plans, billing, and more.');
  });
})();

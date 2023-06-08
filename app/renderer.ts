const setButton = document.getElementById('btn')
const titleInput = document.getElementById('title')

setButton?.addEventListener('click', () => {
  console.log('button clicked')
  window?.electronAPI.openFile()
})
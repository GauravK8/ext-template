console.log('ext-template:: background page')

chrome.runtime.onMessage.addListener((request) => {
  console.log('ext-template:: background onMessage listener ', request?.type)
})

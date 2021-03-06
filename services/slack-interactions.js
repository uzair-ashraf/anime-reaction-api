const fetch = require('node-fetch')

const cancelMessage = async responseUrl => {
  try {
    const response = await fetch(responseUrl, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        "delete_original": "true"
      })
    })
    return response.status === 200
  } catch(err) {
    console.error(err)
    return false
  }
}

const shuffleMessage = async (responseUrl, nextImage) => {
  try {
    const response = await fetch(responseUrl, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        "replace_original": "true",
        "blocks": nextImage.blocks
      })
    })
    return response.status === 200
  } catch(err) {
    console.error(err)
    return false
  }
}

const sendMessage = async(responseUrl, image) => {
  try {
    const response = await fetch(responseUrl, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        "delete_original": "true",
        "response_type": "in_channel",
        "blocks": image.blocks
      })
    })
    return response.status === 200
  } catch (err) {
    console.error(err)
    return false
  }
}

module.exports = {
  cancelMessage,
  shuffleMessage,
  sendMessage
}

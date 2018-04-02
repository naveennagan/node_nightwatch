module.exports = {
  'Demo test Google': function (client) {
    client
      .url('https://oneview.caratlane.com/')
      .waitForElementVisible('body', 1000)
      .assert.title('CARATLANE')
      .end()
  }
}

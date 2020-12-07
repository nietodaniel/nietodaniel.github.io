import React, { Component } from "react"

const ScreenContext = React.createContext({'screensize':'unset','orientation':'unset'})

const ScreenProvider = ScreenContext.Provider
// const ScreenConsumer = ScrennContext.Consumer

class MyContext extends Component {
  render() {
    return (
      <ScreenProvider value={this.props.value}>{this.props.children}</ScreenProvider>
    )
  }
}

export { ScreenContext, MyContext }
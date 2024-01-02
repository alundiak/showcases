// ChatGPT:
//
// Let's consider a hypothetical example where a third-party library defines a component that expects certain methods to be implemented by its parent components. 
// This could be seen as a potential violation of ISP if a parent component is forced to implement methods that it does not need.
//

// Hypothetical third-party library component
class ThirdPartyComponent extends React.Component {
  // Hypothetical method that must be implemented by parent components
  onCustomEvent() {
    throw new Error('onCustomEvent must be implemented by the parent component');
  }

  render() {
    // Render logic here
  }
}

// Parent component implementing ThirdPartyComponent
class ParentComponent extends React.Component {
  // Parent component is forced to implement onCustomEvent
  onCustomEvent() {
    // Custom event handling logic
  }

  render() {
    return <ThirdPartyComponent onCustomEvent={this.onCustomEvent} />;
  }
}

// This can be seen as a violation of ISP because the interface 
// (in this case, the methods expected by ThirdPartyComponent) forces the parent component to implement methods it might not need.

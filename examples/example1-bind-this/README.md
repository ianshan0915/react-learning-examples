# How binding functions work in React
## shorthand 
### spreed attributes-example 1
```
render() {
  const {
    hidePriceFulfillmentDisplay,
    primaryOffer,
    productType,
    productPageUrl,
    inventory,
    submapType,
    ppu,
    isLoggedIn,
    gridView
  } = this.props;
  return (
    <ProductPrice
      hidePriceFulfillmentDisplay={hidePriceFulfillmentDisplay}
      primaryOffer={primaryOffer}
      productType={productType}
      productPageUrl={productPageUrl}
      inventory={inventory}
      submapType={submapType}
      ppu={ppu}
      isLoggedIn={isLoggedIn}
      gridView={isGridView}
    />
  );
}
```
### example2
~~~~
this.props = {
  x: 'foo', 
  y: 'bar',
  z: 'baz',
}

const {
  x,
  ...allOtherProps
} = this.props
~~~~

## Binding with functions
### the contructor way
```
constructor(props) {
    super(props);
    // set state
    this.handleClick = this.handleClick.bind(this);
}

<button onClick={this.handleClick}>Click Me!</button>
```
### the arrow function way (ES6 arrow function)
~~~~
constructor(props) {
    super(props);
    // set state
}

<button onClick={this.handleClick.bind(this)}>Click Me!</button>
//<button onClick={() => this.handleClick()}>Click Me!</button>
~~~~
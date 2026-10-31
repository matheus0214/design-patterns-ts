// Nunca vi sendo usado
// https://refactoring.guru/design-patterns/builder/typescript/example
// TODO: https://refactoring.guru/design-patterns/builder

interface Builder {
  producePartA(): void;
  producePartB(): void;
  producePartC(): void;
}

class Product1 {
  parts: string[]

  constructor() {
    this.parts = []
  }

  listParts() {
    console.log(`Product parts: ${this.parts.join((', '))}`)
  }
}

class ConcreteBuilder1 implements Builder {
  private product: Product1;

  constructor() {
    this.reset()
  }

  reset(): void {
    this.product = new Product1()
  }

  producePartA(): void {
    this.product.parts.push('PartA1')
  }

  producePartB(): void {
    this.product.parts.push('PartB1')
  }

  producePartC(): void {
    this.product.parts.push('PartC1')
  }

  getProduct(): Product1 {
    const result = this.product

    this.reset()

    return result
  }
}

class Director {
  private builder: Builder

  setBuilder(builder: Builder) {
    this.builder = builder
  }

  buildMinimalViableProduct() {
    this.builder.producePartA()
  }

  buildFullFeaturedProduct() {
    this.builder.producePartA()
    this.builder.producePartB()
    this.builder.producePartC()
  }
}

function clientCode(director: Director) {
  const builder = new ConcreteBuilder1()
  director.setBuilder(builder)

  console.log('Standard basic product:')
  director.buildMinimalViableProduct()
  builder.getProduct().listParts()

  console.log('\nStandard full featured product:')
  director.buildFullFeaturedProduct()
  builder.getProduct().listParts()

  console.log('\nCustom product:')
  builder.producePartA()
  builder.producePartC()
  builder.getProduct().listParts()
}

const director = new Director()
clientCode(director)

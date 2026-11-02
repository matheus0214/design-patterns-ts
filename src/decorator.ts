// Maioria dos projeto que já trabalhei usavam
// TODO: https://refactoring.guru/design-patterns/decorator

interface Component {
  operation(): string;
}

class ConcreteComponent implements Component {
  operation(): string {
    return 'ConcreteComponent'
  }
}

class Decorator implements Component {
  protected component: Component;

  constructor(component: Component) {
    this.component = component;
  }

  operation(): string {
    return this.component.operation()
  }
}

class ConcreteDecoratorA extends Decorator {
  operation(): string {
    return `ConcreateDecoratorA(${super.operation()})`
  }
}

class ConcreteDecoratorB extends Decorator {
  operation(): string {
    return `ConcreateDecoratorB(${super.operation()})`
  }
}

function clientCode(component: Component) {
  console.log(`RESULT: ${component.operation()}`);
}

const simple = new ConcreteComponent();
console.log('Client: I\'ve got a simple component:');
clientCode(simple);
console.log('');

const decorator1 = new ConcreteDecoratorA(simple);
const decorator2 = new ConcreteDecoratorB(decorator1);
console.log('Client: Now I\'ve got a decorated component:');
clientCode(decorator2);

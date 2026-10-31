// Já vi sendo usado em projeto porém não diretamente na classe como ensinado
class Manager {
  private static _instance: Manager;

  private _name: string

  constructor(name: string) {
    this._name = name
  }

  static getInstance(ceoName: string): Manager {
    if (Manager._instance === null || Manager._instance === undefined) {
      Manager._instance = new Manager(ceoName)
    }

    return Manager._instance
  }

  get name() {
    return this._name;
  }
}

class Developer {
  private _reportTo: Manager

  private _name: string

  constructor(reportTo: Manager, name: string) {
    this._reportTo = reportTo

    this._name = name
  }

  get reportTo(): Manager {
    return this._reportTo;
  }

  get name() {
    return this._name
  }
}

const manager = Manager.getInstance('John Doe')

const dev = new Developer(manager, 'Matheus')

console.log(`Manager ${manager.name}`)
console.log(`Developer ${dev.name} reports to ${dev.reportTo.name}\n`)

const manager2 = Manager.getInstance('Another') // tentativa de ter outra instancia

const dev2 = new Developer(manager, 'Lisa')

console.log(`Manager ${manager2.name}`)
console.log(`Developer ${dev2.name} reports to ${dev2.reportTo.name}`)

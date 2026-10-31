// Nunca vi sendo usado

class NumberList {
  private _values: number[] = []

  constructor(values?: number[]) {
    if (values?.length) {
     this._values = values
    } else {
      for (let i = 0; i < 200; i++) {
        this._values.push(Math.random())
      }
   }
  }

  clone() {
    return new NumberList(structuredClone(this._values))
  }

  addValue(v: number) {
    this._values.push(v)
  }

  get values() {
    return this._values
  }

  get summary() {
    // TODO: colocar para pegar os últimos 5 elementos
    return `Tamanho: ${this._values.length}`
  }
}

const base = new NumberList()

const clone1 = base.clone()
const clone2 = base.clone()

console.log('Lista clonada original')
console.table([['Base', base.summary], ['Clone 1', clone1.summary], ['Clone 2', clone2.summary]])

clone1.addValue(89)
clone2.addValue(91)
clone2.addValue(92)

console.log('Lista clonada após adicionar valores nos clones')
console.table([['Base', base.summary], ['Clone 1', clone1.summary], ['Clone 2', clone2.summary]])

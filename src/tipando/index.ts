import { frota } from "./frota"
import { Carro } from '../types/types'

// ? Significa que é opcional passar a marca
function buscarCarrosPorMarca(frota:Carro[], marca?:string) : Array<Carro>{
  if (marca === undefined) {
    return frota
  }

  return frota.filter(
    (carro) => {
      return carro.marca === marca
    }
  )
}

console.log(buscarCarrosPorMarca(frota,"Ford"));
console.table(buscarCarrosPorMarca(frota,"Ford"));

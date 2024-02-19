export enum Colors {
  WHITE = '#fff',
  GRAY = '#babac3',
}

export enum Centers {
  HEAD = 'head',
  AJNA = 'ajna',
  THROAT = 'throat',
  G = 'g',
  SACRAL = 'sacral',
  ROOT = 'root',
  HEART = 'heart',
  SPLEEN = 'spleen',
  SOLAR = 'solar',
}

export interface IGate {
  readonly left: number
  readonly top: number
  readonly value: number
  readonly pairGate: number | null
  x: number
  y: number
  readonly center: Centers
  isOpen: boolean
  color: Colors.WHITE | Colors.GRAY
}

export interface GateState {
  list: IGate[]
}

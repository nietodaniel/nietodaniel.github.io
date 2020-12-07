import PRM from '../textProcessor/PRM'

export const CelSolid = () => {

  const cellphone = "573232350963"

  return (
    cellphone
  )
}

export const CelVisual = () => {

  const cellphone = "+57 323 2350963"

  return (
    cellphone
  )
}

export const CelSolidPlus = () => {

  const cellphone = "+573232350963"

  return (
    cellphone
  )
}

export const Email = () => {

  const email = "nieto.daniel221@gmail.com"

  return (
    email
  )
}

export const EmailLink = () => {

  const emailText = "✉ [" + Email() + "](mailto:"+Email()+")"
  return (
    PRM("",emailText)
  )
}

export const TelLink = () => {

  const celText = "✆ ["+ CelVisual() + "](tel:" + CelSolidPlus() + ")"
  return (
    PRM("",celText)
  )
}
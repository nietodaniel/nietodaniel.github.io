import PRM from '../textProcessor/PRM'

export const CelSolid = () => {

  const cellphone = "573219752073"

  return (
    cellphone
  )
}

export const CelVisual = () => {

  const cellphone = "+57 321 9752073"

  return (
    cellphone
  )
}

export const CelSolidPlus = () => {

  const cellphone = "+573219752073"

  return (
    cellphone
  )
}

export const Email = () => {

  const email = "d-nieto@javeriana.edu.co"

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
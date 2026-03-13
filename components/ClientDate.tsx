'use client'

import { useState, useEffect } from 'react'

/**
 * Renderiza a data atual no fuso horário LOCAL do usuário.
 * Usar no lugar de new Date().toLocaleDateString() em Server Components,
 * pois o servidor pode estar em UTC e mostrar data errada.
 */
export default function ClientDate() {
  const [date, setDate] = useState('')

  useEffect(() => {
    setDate(new Date().toLocaleDateString('pt-BR'))
  }, [])

  return <>{date}</>
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

/** fluxo de Renderização
 * 1. Criar uma nova versão do componente
 * 2. comparar com a versão anterior
 * 3. se houverem alterações, vai atualizar o que alterou
 */


/** Quando usar
 * 1. Pure functional components
 * 2. Renderiza muitas vezes
 * 3. Re-renderiza com as mesmas props
 * 4. componente de tamanho medio pra grande
 */

/**
 * -  useMemo
 * 
 * 1. Cálculos pesados
 * 2. Igualdade Referencial (quando a gente repassa aquela informação a um componente filho)
 * 
 * - useCallback
 * 
 * 1. serve pra memorizar uma função e não um valor
 * 2. quando uma função for repassada pra elementos filhos
 * 
 */

/**
 * Virtualização ( mostrar o do html apenas do que está visivel ao navegador)
 * 
 * react-virtualized
 */

/**
 * Next bundle analizer
 * 
 *  -- ler a documentação no github
 * 
 * criar arquivo next.config.js
 * 
 * 
 */
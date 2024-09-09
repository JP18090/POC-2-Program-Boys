# POC-2-Program-Boys
O .sort() serve para ordenar os elementos de Arrays. O correto é passar uma função que compare dois elementos. Assim, podemos ordenar um Array com qualquer tipo de objeto, ordenando por qualquer propriedade. A função de ordenação sempre recebe dois elementos. Se o primeiro for menor, devemos retornar um número menor que 0. Se o primeiro for maior, devemos retornar um número maior do que 0. Se forem iguais, retornamos 0.
Podemos utilizar em elementos mais complexos:
(foto)

O .filter() como o próprio nome indica, serve para filtrarmos os elementos de um Array. Passamos para ele uma função. Se essa função retornar true, o elemento será inserido no novo Array que será criado. Se a função retornar false, o elemento será ignorado.
(foto)

Nós utilizamos o .map() quando queremos fazer alguma modificação nos elementos de um Array.
(foto)
No exemplo acima alteramos o valor de uma propriedade de cada um dos elementos do Array. Na última linha nós precisamos executar o comando return para indicar o que será retornado para o Array. No final teremos um novo Array.
(foto)
Também pode ser interessante se quisermos alterar a estrutura dos objetos do Array. Podemos pegar o exemplo de cima: suponha que a gente agora queira um Array com o nome de todos os usuários da nossa lista. Teríamos o seguinte código:
(foto)
Outro exemplo bem simples, aproveitando a simplicidade das Arrow Functions: dobrar o valor dos números de um Array:
(foto)

A função .reduce() serve para reduzirmos o conteúdo de um Array para apenas um elemento. O exemplo mais clássico é somar todos os valores de um Array.
(foto)
A função que executamos recebe como primeiro parâmetro uma variável que irá acumular um valor e como segundo parâmetro teremos cada um dos elementos do Array a cada iteração.

O método de spread () em JavaScript é uma maneira prática e poderosa de manipular arrays e objetos. Ele é usado para expandir os elementos de um array ou as propriedades de um objeto em lugares onde múltiplos elementos ou pares chave-valor são esperados. Aqui estão algumas das principais utilidades do spread operator:

1. Clonagem de Arrays e Objetos: Ele permite criar uma cópia superficial de um array ou objeto. Isso é útil para evitar modificações inesperadas no array ou objeto original. 
(foto) 
2. Combinação de Arrays e Objetos: Você pode combinar vários arrays ou objetos em um novo array ou objeto.
(foto)
3. Inserção de Elementos em Arrays: Ele permite adicionar elementos a um array em um ponto específico.
(foto)
4. Desestruturação de Arrays e Objetos: Em combinação com a desestruturação, o spread pode ser usado para capturar o restante dos elementos ou propriedades.
(foto)
5. Funções Variádicas: Ele pode ser usado para passar elementos de um array como argumentos para uma função.
(foto)


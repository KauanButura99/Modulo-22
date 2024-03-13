Feature: Produtos
  
  Scenario: Verifique se o produto foi adicionado corretamente
        Given eu acessar a página do produto
        When adiciono um produto ao carrinho
        Then no carrinho devo ver o produto
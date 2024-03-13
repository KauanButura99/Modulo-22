Feature: Carrinho

Scenario: Verifique se a quantidade do produto foi atualizada corretamente
        Given que eu adicionei um produto no carrinho
        When altero a quantidade do produto no carrinho
        Then devo ver o produto atualizado corretamente

Scenario: Verifique se o produto foi removido corretamente
        Given que eu adicionei um produto no carrinho
        When retiro o produto do carrinho
        Then devo ver o produto removido corretamente
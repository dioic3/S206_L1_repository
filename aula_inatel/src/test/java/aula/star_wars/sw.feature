Feature: Testando API Star Wars

Scenario: Testando retorno products/1/
    Given url 'https://dummyjson.com/products/1' 
    When method get
    Then status 200

Scenario: Testando retorno products
    Given url 'https://dummyjson.com/products' 
    When method get
    Then status 200


Scenario: Testando retorno 404 de products
    Given url 'https://dummyjson.com/productss' 
    When method get
    Then status 404

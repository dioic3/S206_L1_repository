Feature: Testando API Star Wars

Background: Executa antes de cada teste
    * def url_base = 'https://pokeapi.co/api/v2/'

#Scenario: Testando retorno products/1/
 #   Given url 'https://dummyjson.com/products/1' 
 #   When method get
 #   Then status 200

#Scenario: Testando retorno products
#    Given url 'https://dummyjson.com/products' 
#    When method get
#    Then status 200


#Scenario: Testando retorno 404 de products
#    Given url 'https://dummyjson.com/productss' 
#    When method get
#    Then status 404

Scenario: Testando retorno pikachu e verificando o JSON.
    Given url url_base
    And path '/region/'
    When method get 
    Then status 200
    And def region = $.results[0].url
    And print region
    And url region
    When method get 
    Then status 200
    And match response.id == 1

Scenario: Testando retorno pikachu e verificando o JSON.
    Given url url_base
    And path '/generation/1/'
    When method get 
    Then status 200
    And match response.abilities == []
    And  match response.id == 1

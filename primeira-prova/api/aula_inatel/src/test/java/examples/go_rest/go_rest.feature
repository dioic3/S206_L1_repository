Feature: Testando a API do GO Rest

Background: Funções executadas em cada teste
    * def url_base = 'https://gorest.co.in'
    
Scenario: Verificando o status code do endpoint de users
    Given url url_base
    And path '/public/v2/users'
    When method get 
    Then status 200

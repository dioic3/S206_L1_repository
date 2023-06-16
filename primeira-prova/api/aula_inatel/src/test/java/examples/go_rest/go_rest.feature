Feature: Testando a API do GO Rest

Background: Funções executadas em cada teste
    * def url_base = 'https://pokeapi.co'

Scenario: Verificando o status code do endpoint de users
    Given url url_base
    And path '/api/v2/berry'
    When method get 
    Then status 200

Scenario: forçando o caso de 404 no endpoint de users
    Given url url_base
    And path '/api/v2/berrys'
    When method get 
    Then status 404

Scenario: Testando o retorno JSON
    Given url url_base
    And path '/api/v2/berry'
    When method get 
    Then status 200
    And def next = $.results[0].url
    And print next 
    And url next
    When method get
    Then status 200

Scenario: mexendo com o endpoint version group
    Given url url_base
    And path '/api/v2/version-group/1/'
    When method get 
    Then status 200
    And match response.id == 1
    And match response.move_learn_methods[0] == {name:"level-up", url:"https://pokeapi.co/api/v2/move-learn-method/1/"}

Scenario: verificando o corpr do move_learn_methods
    Given url url_base
    And path '/api/v2/version-group/1/'
    When method get 
    Then status 200
    And match each response.move_learn_methods == {name: '#string', url: '#string'}

Feature: Testando resources da Makeup API

Background: Executa uma vez antes de cada teste
    * def url_base = 'https://api.football-data.org'
# * def request_json = read("json_teste.json")
#* def request_json2 = read("json_teste2.json")
Scenario: verificando o status code do endpoint
    Given url url_base
    When method get
    Then status 200

Scenario: verificando se retorna a lista de areas
    Given url url_base
    And path '/v4/areas'
    When method get
    Then status 200

Scenario: verificando se retorna as informações do id 2015
    Given url url_base
    And path '/v4/areas/2015'
    When method get
    Then status 200
    And match response.id == 2015
    And match response.name == "Australia"
    And match response.code == "AUS"
    And match response.flag == null

Scenario: forçando o cenário de Not Found
    Given url url_base
    And path '/v4/areass'
    When method get
    Then status 404
    And match response.error == 404

Scenario: forçando o cenário de 403
    Given url url_base
    And path '/v4/competitions/PL'
    When method get
    Then status 403
    And match response.message == "The resource you are looking for is restricted and apparently not within your permissions. Please check your subscription."
    And match response.errorCode == 403

Scenario: verificando se retorna a lista de competições
    Given url url_base
    And path '/v4/competitions'
    When method get
    Then status 200
Feature: Homepage greeting

  Scenario: User see the demo instructions
    When They go to the home page
    Then They see the demo instructions
    And They see the header
    And They see they can login

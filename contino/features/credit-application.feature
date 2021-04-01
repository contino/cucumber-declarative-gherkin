Feature: New Credit Form Applciation

    Scenario: Successful form submittal of a minimum acceptable back-end ratio
    Given "Tom Smith w/ minimum acceptable back-end ratio" logs in
    And "Tom Smith" fills out the form with their information
    When they submit their form
    And they see a submittal response "Thank you, your application was submitted for further processing."

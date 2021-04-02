Feature: New Credit Form Applciation

    Scenario: Successful form submittal of a minimum acceptable back-end ratio
    Given "Tom Smith w/ minimum acceptable back-end ratio" logs in
    And "Tom Smith" fills out the form with their information
    When they submit their form
    And they see a submittal response "Thank you, your application was submitted for further processing."

    Scenario: Fail form submittal due to a barely unacceptable back-end ratio
    Given "Mike Fog w/ a just barely failing back-end ratio" logs in
    And "Mike Fog" fills out the form with their information
    When they submit their form
    And they see a submittal response "Your application cannot proceed. We will mail you a detailed letter."

    Scenario: Fail form submittal due to being highest failing credit score
    Given "Lisa Mach w/ highest failing credit score" logs in
    And "Lisa Mach" fills out the form with their information
    When they submit their form
    And they see a submittal response "Your application cannot proceed. We will mail you a detailed letter."

    # This scenario is an example of reusing an existing persona dataset by
    # modifying it.  By reusing a personas it keeps the number of personas to
    # a minimum, which helps in managing them. 
    # This scenario merges the "Tom Smith" persona dataset with the 
    # "failing back-end ratio" data fragment.  The merged data is used across 
    # steps.
    Scenario: Fail form submittal due to a failing back-end ratio
    Given "Tom Smith" logs in with these mods
    | name                    |  comment                                                        |
    |  failing back-end ratio | example of modifying a persona, so there are only a few of them |
    And "Tom Smith" fills out the form with their information
    When they submit their form
    And they see a submittal response "Your application cannot proceed. We will mail you a detailed letter."

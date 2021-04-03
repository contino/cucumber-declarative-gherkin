Feature: Credit Application Personal information

    Scenario Outline: User sees errors for invalid applicant names
        Given "Tom Smith" logs in with this mod '<mod name>'
        And "Tom Smith" fills out the personal information section of the form
        When they attept to continue to next section
        And they see '<error message names>' name error messages
    Examples:
        | mod name            | error message names        |
        | empty names         | name required error msgs   |
        | short names         | name at least X characters |
        | long middle initial | name must be X characters  |

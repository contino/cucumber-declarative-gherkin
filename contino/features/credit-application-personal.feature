Feature: Credit Application Personal information

    Scenario Outline: User sees errors for invalid personal information
        Given "Tom Smith" logs in with this mod '<mod name>'
        And they navigate the "personal information" section of the form
        And they see no error messages in the form section
        And "Tom Smith" fills out the personal information section of the form
        When they attept to continue to next section
        And they see '<error message names>' name error messages
        Examples:
            | mod name              | error message names                |
            | empty personal values | required perosnal error msgs       |
            | short personal values | perosnal at least X characters     |
            | long middle initial   | middle intial must be X characters |
            | invalid dob format    | invalid dob error msg              |
            | invalid SSN format    | invalid ssn error msg              |

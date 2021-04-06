# Centralized Data Management

With the move to declarative Gherkin, the data is centralized.  In
imperative Gherkin, test data is embedded in the scenarios.  Declarative
Gherkin moves most of the data to a centralized location and references the
data by name/alias.  Here is a Gherkin example:

```gherkin
    Scenario: Fail form submittal due to being highest failing credit score
    Given "Lisa Mach w/ highest failing credit score" logs in
    And "Lisa Mach" fills out the form with their information
    When they submit their form
    Then they see a submittal response "Your application cannot proceed. We will mail you a detailed letter."
```

In the example above, "Lisa Mach" is the name of persona dataset we are using.
While "Lisa Mach w/ highest failing credit score", is a descriptive alias for
Lisa's dataset.  The alias provides relevant context about the dataset used
in the test scenario.  However, just using these personas would lead to several
personas.  Besides personas, named data fragments can help.

Data fragments are away to alter a persona to fit a given scenario.  Below
is an example:

```gherkin
    Scenario: Fail form submittal due to a failing back-end ratio
    Given "Tom Smith" logs in with these mods
    | name                    |  comment                                                        |
    |  failing back-end ratio | example of modifying a persona, so there are only a few of them |
    And "Tom Smith" fills out the form with their information
    When they submit their form
    Then they see a submittal response "Your application cannot proceed. We will mail you a detailed letter."
```

In this example, the "Tom Smith" persona dataset is being merged with the
"failing back-end ratio" named data fragment.  This data fragment has a specific
set of data values and not the complete set found in a persona.  It only has
"monthly income" and "monthly housing payment" set to trigger a flag on the
back-end ratio.  The rest of Tom's data is valid and will not trigger an error.
So, for this test scenario it fails, due to the merged named data fragment.

The data management code in this example is located in
`contino/features/data`.  The data management code is utilized in any steps
where a name/alias is passed into a Gherkin step.

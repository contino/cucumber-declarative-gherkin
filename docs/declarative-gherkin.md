# Declarative Gherkin

Declarative Gherkin is a very concise and easy to understand way of expressing
system behaviors.  It explains the system behavior business/industry terms
without any technical implementation details.  Here is an example:

```gherkin
    Scenario: Fail form submittal due to being highest failing credit score
    Given "Lisa Mach w/ highest failing credit score" logs in
    And "Lisa Mach" fills out the form with their information
    When they submit their form
    Then they see a submittal response "Your application cannot proceed. We will mail you a detailed letter."
```

## Declarative Gherkin Explained

The above Gherkin has a clear and concise name with supporting Gherkin steps.
Clear and concise helps in the creation of Gherkin, but also helps facilitate
engagement.  It helps bring together product teams with external stakeholders.
Helps in ticket refinement, as team members can easily discuss them.  In the
end, resulting in higher quality software. Let's see how declarative Gherkin
achieves these outcomes.

A concise name is very helpful when creating scenarios.  Just creating the names
before writing the full scenarios is very helpful.  It is easier to flush
out the complete behavior set without getting into details.  Also, helps
promote discussion when more than one person is involved.

Given steps set/validate the state of the system.  This ensure a high test
success and helps with troubleshooting.  If there is a system state issue,
better to catch early.  Finding them later in the test can slow down
troubleshooting.  With the system state ready, it is time to trigger the
behavior.

When steps trigger the system to create the desired behavior.  This can consist
of one or more steps.  Once the behavior is happens, time to verify it.

Then steps verify a behavior is correct.  This may require multiple steps to
accomplish to include negative verification.  Example,
"Then the upgrade reward message was not visible".  These steps ensure a
behavior did not include unintended results.  Implementing declarative Gherkin
requires some support infrastructure.

## Supporting Declarative Gherkin

Declarative Gherkin requires three items, which are:

- [Centralized Data Management](./centralized-data-mgt.md)
- [Cucumber Logging](./cucumber-logging.md)
- [Organization/Industry Terms Wiki](./terms-wiki.md)

For more information of the items above, click the associated links.

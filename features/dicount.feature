Feature: Calculate discount

  Scenario Outline:
    Given <number> of units
    Given cash <when>
    Given company type is <companyType>
    When discount is calculated
    Then discount is <discount>
    Examples:
      | number | when            | companyType   | discount |
      | 49     | on delivery     | wholesale     | 4        |
      | 49     | on delivery     | not wholesale | 2        |
      | 49     | before delivery | wholesale     | 2        |
      | 49     | before delivery | not wholesale | 0        |
      | 50     | on delivery     | wholesale     | 6        |
      | 50     | on delivery     | not wholesale | 4        |
      | 50     | before delivery | wholesale     | 4        |
      | 50     | before delivery | not wholesale | 2        |

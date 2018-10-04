Feature: Homepage
  Scenario: Visit Homepage
    Given he is on "/auth"
    Then he get title "PayCap - Dashboard"

export class SequenceTable {
  sequenceId:           string;
  policyLine:           string;
  initiative:           string;
  activities:           string;
  tasks:                string;
  sectoralAlignment:    string;
  entityResponsibleId:  string;
  nameResponsible:      string;
  addressResponsible:   string;
  personResponsible:    string;
  emailResponsible:     string;
  entityCoresponsible:  string;
  addressCoresponsible: string;
  personCoresponsible:  string;
  emailCoresponsible:   string;
  directive:            string;
  startDate:            string;
  endDate:              string;
  expectedResult:       string;
  expectedProduct:      string;
  costs:                string;
  indicator:            string;
  indicatorDescription: string;
  indicatorSource:      string;
  type:                 string;
  calculationFormula:   string;
  unitMeasurement:      string;
  valueLine:            string;
  yearIndicator:        string;
  goal_2021:            string;
  goal_2022:            string;
  goal_2023:            string;
  goal_2024:            string;
  goal_2025:            string;
  goal_2026:            string;
  endGoal:              string;
  typeIndicator:        string;
  trackIndicator:       string;
  observation:          string;

  constructor(
    sequenceId:           string = '',
    policyLine:           string = '',
    initiative:           string = '',
    activities:           string = '',
    tasks:                string = '',
    sectoralAlignment:    string = '',
    entityResponsibleId:  string = '',
    nameResponsible:      string = '',
    addressResponsible:   string = '',
    personResponsible:    string = '',
    emailResponsible:     string = '',
    entityCoresponsible:  string = '',
    addressCoresponsible: string = '',
    personCoresponsible:  string = '',
    emailCoresponsible:   string = '',
    directive:            string = '',
    startDate:            string = '',
    endDate:              string = '',
    expectedResult:       string = '',
    expectedProduct:      string = '',
    costs:                string = '',
    indicator:            string = '',
    indicatorDescription: string = '',
    indicatorSource:      string = '',
    type:                 string = '',
    calculationFormula:   string = '',
    unitMeasurement:      string = '',
    valueLine:            string = '',
    yearIndicator:        string = '',
    goal_2021:            string = '',
    goal_2022:            string = '',
    goal_2023:            string = '',
    goal_2024:            string = '',
    goal_2025:            string = '',
    goal_2026:            string = '',
    endGoal:              string = '',
    typeIndicator:        string = '',
    trackIndicator:       string = '',
    observation:          string = '',
  ) {
    this.sequenceId = sequenceId
    this.policyLine = policyLine
    this.initiative = initiative
    this.activities = activities
    this.tasks = tasks
    this.sectoralAlignment = sectoralAlignment
    this.entityResponsibleId = entityResponsibleId
    this.nameResponsible = nameResponsible
    this.addressResponsible = addressResponsible
    this.personResponsible = personResponsible
    this.emailResponsible = emailResponsible
    this.entityCoresponsible = entityCoresponsible
    this.addressCoresponsible = addressCoresponsible
    this.personCoresponsible = personCoresponsible
    this.emailCoresponsible = emailCoresponsible
    this.directive = directive
    this.startDate = startDate
    this.endDate = endDate
    this.expectedResult = expectedResult
    this.expectedProduct = expectedProduct
    this.costs = costs
    this.indicator = indicator
    this.indicatorDescription = indicatorDescription
    this.indicatorSource = indicatorSource
    this.type = type
    this.calculationFormula = calculationFormula
    this.unitMeasurement = unitMeasurement
    this.valueLine = valueLine
    this.yearIndicator = yearIndicator
    this.goal_2021 = goal_2021
    this.goal_2022 = goal_2022
    this.goal_2023 = goal_2023
    this.goal_2024 = goal_2024
    this.goal_2025 = goal_2025
    this.goal_2026 = goal_2026
    this.endGoal = endGoal
    this.typeIndicator = typeIndicator
    this.trackIndicator = trackIndicator
    this.observation = observation
  }
}

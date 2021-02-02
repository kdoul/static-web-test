///
/// Copyright 2016-2020 University of Piraeus Research Center
/// <p>
/// Licensed under the Apache License, Version 2.0 (the "License");
/// you may not use this file except in compliance with the License.
/// You may obtain a copy of the License at
/// <p>
///     http://www.apache.org/licenses/LICENSE-2.0
/// <p>
/// Unless required by applicable law or agreed to in writing, software
/// distributed under the License is distributed on an "AS IS" BASIS,
/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
/// See the License for the specific language governing permissions and
/// limitations under the License.
///

export enum Filter {
  EXCLUSION_REGEXP = '^CRITERION.EXCLUSION.+',
  EXCLUSION_CONVICTION = '^CRITERION.EXCLUSION.CONVICTIONS.+',
  EXCLUSION_CONTRIBUTION = '^CRITERION.EXCLUSION.CONTRIBUTIONS.+',
  EXCLUSION_SOCIAL_BUSINESS_MISCONDUCT_CONFLICT = '(^CRITERION.EXCLUSION.SOCIAL.+)|(^CRITERION.EXCLUSION.BUSINESS.+)|(^CRITERION.EXCLUSION.MISCONDUCT.+)|(^CRITERION.EXCLUSION.CONFLICT_OF_INTEREST.+)',
  EXCLUSION_NATIONAL = '^CRITERION.EXCLUSION.NATIONAL.+',

  SELECTION_REGEXP = '^CRITERION.SELECTION.+',
  SELECTION_SUITABILITY_REGEXP = '^CRITERION.SELECTION.SUITABILITY.+',
  SELECTION_ECONOMIC_REGEXP = '^CRITERION.SELECTION.ECONOMIC_FINANCIAL_STANDING.+',
  SELECTION_TECHNICAL_REGEXP = '(CRITERION.SELECTION.TECHNICAL_PROFESSIONAL_ABILITY.CERTIFICATES.QUALITY_ASSURANCE.QA_INSTITUTES_CERTIFICATE)|(?!.*CERTIFICATES*)^CRITERION.SELECTION.TECHNICAL_PROFESSIONAL_ABILITY.+',
  SELECTION_CERTIFICATES_REGEXP = '(?!CRITERION.SELECTION.TECHNICAL_PROFESSIONAL_ABILITY.CERTIFICATES.QUALITY_ASSURANCE.QA_INSTITUTES_CERTIFICATE)^CRITERION.SELECTION.TECHNICAL_PROFESSIONAL_ABILITY.CERTIFICATES.+',

  EO_RELATED_REGEXP = '((?!.*MEETS_THE_OBJECTIVE*)(?!.*REDUCTION_OF_CANDIDATES*))^CRITERION.OTHER.EO_DATA.+',
  EO_RELATED_A_REGEXP = '(^CRITERION.OTHER.EO_DATA.REGISTERED_IN_OFFICIAL_LIST*)|(^CRITERION.OTHER.EO_DATA.SHELTERED_WORKSHOP*)|(^CRITERION.OTHER.EO_DATA.TOGETHER_WITH_OTHERS*)|(^CRITERION.OTHER.EO_DATA.CONTRIBUTIONS_CERTIFICATES*)',
  EO_RELATED_C_REGEXP = '^CRITERION.OTHER.EO_DATA.RELIES_ON_OTHER_CAPACITIES*',
  EO_RELATED_D_REGEXP = '^CRITERION.OTHER.EO_DATA.SUBCONTRACTS_WITH_THIRD_PARTIES*',

  REDUCTION_OF_CANDIDATES_REGEXP = '(^CRITERION.OTHER.EO_DATA.MEETS_THE_OBJECTIVE*)|(^CRITERION.OTHER.EO_DATA.REDUCTION_OF_CANDIDATES)',

  OTHER_CA_REGEXP = '^CRITERION.OTHER.CA_DATA.+',
  EO_LOT_REGEXP = '^CRITERION.OTHER.EO_DATA.LOTS_TENDERED'
}
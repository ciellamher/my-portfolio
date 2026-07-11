#!/bin/bash
echo "Making clocks public..."
gh repo edit ciellamher/hau-interactive-digital-clock-ui --visibility public --accept-visibility-change-consequences
gh repo edit ciellamher/hau-interactive-analog-clock-ui --visibility public --accept-visibility-change-consequences

echo "Making school projects private..."
gh repo edit ciellamher/peeview-ai-urine-test-interpreter --visibility private --accept-visibility-change-consequences
gh repo edit ciellamher/student-database-management-system --visibility private --accept-visibility-change-consequences
gh repo edit ciellamher/chinese-horoscope-mobile-app --visibility private --accept-visibility-change-consequences
gh repo edit ciellamher/age-classification-model --visibility private --accept-visibility-change-consequences

echo "Renaming school projects..."
gh repo rename hau-peeview-ai-urine-test-interpreter --repo ciellamher/peeview-ai-urine-test-interpreter -y
gh repo rename hau-student-database-management-system --repo ciellamher/student-database-management-system -y
gh repo rename hau-chinese-horoscope-mobile-app --repo ciellamher/chinese-horoscope-mobile-app -y
gh repo rename hau-age-classification-model --repo ciellamher/age-classification-model -y

echo "Done!"

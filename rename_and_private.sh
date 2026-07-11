#!/bin/bash
echo "Making repositories private..."
gh repo edit ciellamher/interactive-digital-clock-ui --visibility private
gh repo edit ciellamher/interactive-analog-clock-ui --visibility private

echo "Renaming repositories..."
gh repo rename hau-interactive-digital-clock-ui --repo ciellamher/interactive-digital-clock-ui -y
gh repo rename hau-interactive-analog-clock-ui --repo ciellamher/interactive-analog-clock-ui -y
gh repo rename hau-shell-number-guessing-game --repo ciellamher/shell-number-guessing-game -y
gh repo rename hau-periodic-table --repo ciellamher/periodic-table -y
gh repo rename hau-world-cup --repo ciellamher/world-cup -y
gh repo rename hau-salon-appointment --repo ciellamher/salon-appointment -y
gh repo rename hau-universe --repo ciellamher/universe -y

echo "Done!"

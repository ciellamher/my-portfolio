#!/bin/bash

# Define array of "old_name:new_name"
repos=(
  "ageclassification:age-classification-model"
  "digitalclock:interactive-digital-clock-ui"
  "analogclock:interactive-analog-clock-ui"
  "number-guess:shell-number-guessing-game"
  "BahayKubo:bahaykubo-filipino-recipes-app"
  "Lumo:lumo-voice-guided-navigation-app"
  "quickRename:batch-file-rename-tool"
  "passwordgenerator:secure-password-generator"
  "peeView:peeview-ai-urine-test-interpreter"
  "studentdatabase:student-database-management-system"
  "chinesehoroscope:chinese-horoscope-mobile-app"
  "my-portfolio:personal-portfolio-website"
  "Smart-Attendance-System:smart-attendance-system"
  "MultimodalChatbot:multimodal-ai-chatbot"
  "CPUScheduler:cpu-scheduling-algorithm-simulator"
  "MathChatbot:ai-math-solver-chatbot"
  "MLA1-Face-Recognition:real-time-facial-recognition-system"
  "Virtual-Paging-Algorithms-Simulation:algorithmic-memory-allocation-simulator"
  "IntelliAIDrive:intelliaidrive-autonomous-driving-agent"
  "Pokemon-Hau:pokemon-hau-flutter-app"
  "driver_drowsiness_detector:driver-drowsiness-detector"
)

for repo_map in "${repos[@]}"; do
  old_name="${repo_map%%:*}"
  new_name="${repo_map##*:}"
  echo "Renaming $old_name to $new_name..."
  gh repo rename "$new_name" --repo "ciellamher/$old_name" -y
done

echo "Done renaming repositories!"

#!/bin/bash
echo "Renaming and making intel-badge-project private (HAU)..."
gh repo edit ciellamher/intel-badge-project --visibility private --accept-visibility-change-consequences
gh repo rename hau-intel-badge-project --repo ciellamher/intel-badge-project -y

echo "Renaming others to personal-..."
gh repo rename personal-multimodal-ai-chatbot --repo ciellamher/multimodal-ai-chatbot -y
gh repo rename personal-cpu-scheduling-algorithm-simulator --repo ciellamher/cpu-scheduling-algorithm-simulator -y
gh repo rename personal-ai-math-solver-chatbot --repo ciellamher/ai-math-solver-chatbot -y
gh repo rename personal-speech-processing-activity-LA2 --repo ciellamher/speech-processing-activity-LA2 -y
gh repo rename personal-real-time-facial-recognition-system --repo ciellamher/real-time-facial-recognition-system -y

echo "Done!"

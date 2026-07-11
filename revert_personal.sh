#!/bin/bash
echo "Removing 'personal-' prefix..."
gh repo rename multimodal-ai-chatbot --repo ciellamher/personal-multimodal-ai-chatbot -y
gh repo rename cpu-scheduling-algorithm-simulator --repo ciellamher/personal-cpu-scheduling-algorithm-simulator -y
gh repo rename ai-math-solver-chatbot --repo ciellamher/personal-ai-math-solver-chatbot -y
gh repo rename speech-processing-activity-LA2 --repo ciellamher/personal-speech-processing-activity-LA2 -y
gh repo rename real-time-facial-recognition-system --repo ciellamher/personal-real-time-facial-recognition-system -y
echo "Done!"

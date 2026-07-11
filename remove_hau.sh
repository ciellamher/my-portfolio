#!/bin/bash
gh repo list ciellamher --limit 100 --json name -q '.[].name' | grep '^hau-' > repos_to_rename.txt

while read -r repo; do
  new_name="${repo#hau-}"
  echo "Renaming $repo to $new_name..."
  gh repo rename "$new_name" --repo "ciellamher/$repo" -y
done < repos_to_rename.txt

echo "Done!"

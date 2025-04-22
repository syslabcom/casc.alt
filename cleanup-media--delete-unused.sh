#!/bin/bash

# Cleanup the excessively large media directory
# https://chatgpt.com/share/e/6807991e-ba6c-8008-8630-1f750b0c4a9d

cd media/
fdfind -0 | while IFS= read -r -d '' i; do
    if ! rg -q "$i" ../; then
        rm "$i"
    fi
done

#!/bin/bash

# This script opens the portfolio in your default browser

# Find the path to the index.html file
portfolio_path="$(dirname "$0")/index.html"

# Check which OS is running and open the file accordingly
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    open "$portfolio_path"
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    # Linux
    xdg-open "$portfolio_path"
elif [[ "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
    # Windows
    start "" "$portfolio_path"
else
    echo "Unsupported operating system. Please open 'index.html' manually in your browser."
fi

echo "Opening portfolio in your default browser..."

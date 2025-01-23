#!/bin/bash

if [[ "$(uname)" == "Darwin" ]]; then
    pythonCommand="python3"
else
    pythonCommand="python"
fi

$pythonCommand -m venv .venv

source .venv/bin/activate

pip3 install -r profile/local-requirements.txt

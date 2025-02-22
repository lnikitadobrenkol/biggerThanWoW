#!/bin/bash
echo "Setting up hooks path..."
git config core.hooksPath .githooks
echo "Hooks path set to: $(git config core.hooksPath)"

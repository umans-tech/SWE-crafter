#!/usr/bin/env just --justfile

# ▶️🛎️ start the api server
start-server:
  python sweagent/api/server.py

# ▶️🖥️ start the api server
start-frontend:
  cd sweagent/frontend/ && npm install && npm start

# 🧠🇨🇳 use deepseek api
use-deepseek:
  cp keys.deepseek.cfg keys.cfg

# 🧠🇺🇸 use openai api
use-openai:
  cp keys.openai.cfg keys.cfg

# What's Left

## Overview

**What's Left** is an AI-powered cooking platform designed for students and people living independently who often have limited ingredients, kitchen tools, time, and energy to decide what to cook.

The platform helps users turn ingredients they already have into realistic meal ideas. Users can enter available ingredients and cooking preferences, receive meal recommendations from the cooking assistant, select a recipe, and interact with the assistant for step-by-step instructions and other cooking questions.

Apart from recipe generation, What's Left is designed as a lightweight cooking community where users can save recipes, keep a personal cooking history, share photos of meals they have made, and interact with other users' cooking posts.

The core experience follows a simple flow:

**Ingredients → Meal Discovery → AI Cooking Assistant → Cook → Save & Share**

## Target Users

What's Left is primarily designed for:

* University students living alone or with roommates
* Young adults cooking primarily for themselves
* People with busy schedules and limited time to cook
* Users with limited budgets or kitchen equipment
* People who frequently have leftover or miscellaneous ingredients
* Beginner or casual cooks who struggle to decide what to make
* Users who want to cook more often instead of ordering takeout
* People interested in reducing food waste by using ingredients they already have

## Core Features

### AI Cooking Assistant

Users can enter ingredients currently available in their fridge and receive meal recommendations based on what they already have.

Optional preferences and constraints can include:

* Cooking time
* Energy/effort level
* Available kitchen equipment
* Dietary preferences
* Budget
* Cleanup preference

After selecting a meal, users can continue interacting with the assitant to ask about cooking techniques, ingredient alternatives, or modifications.

### Recipe Management

Users can save AI-generated recipes they want to make again and maintain a history of meals they have cooked.

### Cooking Journal & Sharing

After cooking a meal, users can upload a photo and create a cooking post. These posts form both a personal cooking journal and a lightweight community feed where users can discover what others have made.

### Social Interaction

Users can interact with cooking posts through lightweight social features such as:

* Likes
* Saved posts
* Shared cooking experiences

The social layer is intentionally focused on cooking rather than building a full social networking platform.

## Planned User Flow

1. Enter available fridge or pantry ingredients.
2. Optionally select cooking preferences or constraints.
3. Receive AI-generated meal recommendations.
4. Select a meal and view its recipe.
5. Ask the AI assistant follow-up cooking questions.
6. Cook the meal.
7. Save the recipe and record it in cooking history.
8. Upload a photo and share what was made.
9. Discover and interact with meals shared by other users.

## Tech Stack

### Frontend

* Next.js
* React
* TypeScript

### Backend

* Python
* FastAPI
* REST APIs

### Database

* PostgreSQL

### AI Integration

* OpenAI API

### Planned Infrastructure

* User authentication
* Object storage for user-uploaded images
* Docker for local development and deployment

## System Architecture

The application follows a client-server architecture with the frontend communicating with a Python backend through REST APIs.

The FastAPI backend serves as the main application layer, handling business logic, user data, recipes, posts, likes, and communication with external services such as the OpenAI API.

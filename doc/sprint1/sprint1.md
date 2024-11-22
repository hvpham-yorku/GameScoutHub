# Sprint 1 Documentation: GameScoutHub

## Sprint Overview

- **Sprint Duration:** November 15th 2024 - November 21st 2024
- **Sprint Goal:** Deliver a foundational MVP for GameScoutHub that enables user profile creation and basic recommendation quiz functionality.

## Meeting Details

- **Date:** November 14th 2024
- **Time:** 16:00
- **Location:** Discord Voice channel
- **Duration:** 1 hours
- **Participants:**

  | Full Name                    |
  | ---------------------------- |
  | Thanh Phat Lam               |
  | (Haadi) Abdulhaadi Memisevic |
  | Alp Sirek                    |

  (Attendance are noted in discord channel)

## Sprint Backlog

### User Stories Selected for Sprint 1

| ID  | User Story                                                                                                  | Epic                            | Estimation | Priority |
| --- | ----------------------------------------------------------------------------------------------------------- | ------------------------------- | ---------- | -------- |
| 1   | As a user, I want to create a profile so that my preferences can be saved for future recommendations.       | User Profile Creation           | 3          | 1        |
| 5   | As a user, I want to sign-in.                                                                               | User Sign-In                    | 3         | 2        |
| 6   | As a user, I want to view the latest news on gaming.                                                        | Game News Exploration           | 7          | 3        |

## Deliverables

1. **User Profile Creation**

   - **Functionality:**
     - Allow users to sign up using an email and password.
     - Enable users to edit their profiles with preferences (e.g., genres, favorite games, platforms).
   - **UI:**
     - Profile creation form with fields for user information.
     - User dashboard displaying profile details.

2. **User Sign-In**

   - **Functionality:**
     - Allow users to sign in using their registered email and password.
     - Verify credentials and provide access to the home screen upon successful authentication.
     - Display an error message for invalid credentials.
   - **UI:**
     - Simple login form with fields for email and password.
     - Button to submit the login form.

3. **Game News Exploration**
   
   - **Functionality**
     - Display the latest gaming news from a predefined source/API.
     - Allow users to browse through articles or headlines with titles, images, and short descriptions.
     - Redirect users to the full article upon clicking a headline.
   - **UI**
     - A visually appealing page displaying a list or grid of the latest gaming news.
     - Each news item should include a thumbnail image, title, and brief description.

## Task Breakdown

### 1. User Profile Creation

- **Back-End Development**
  - Set up the database schema to store user information (e.g., user ID, email, password, and preferences).
  - Implement API endpoints for user registration, login, profile retrieval, and updates.
  
- **Front-End Development**
  - Design and develop a responsive profile creation form (with fields for email, password, preferences).
  - Build the user dashboard to display profile details, including preferences (genres, favorite games, platforms).
  
- **Testing**
  - Write unit tests for the API endpoints (profile creation, login, and profile update).
  - Conduct manual testing for the front-end forms (validation and data submission).

### 2. User Sign-In

- **Back-End Development**
  - Implement user authentication (email and password verification).
  - Implement token-based session management for keeping users logged in.
  
- **Front-End Development**
  - Create a simple login form (fields for email and password).
  - Display an error message when invalid credentials are entered.
  - Redirect users to the home screen upon successful authentication.
  
- **Testing**
  - Write unit tests for login and authentication functionality.
  - Conduct manual testing for the sign-in process (login flow, error messages).

### 3. Game News Exploration

- **Back-End Development**
  - Research and integrate a gaming news API (e.g., News API, Gamepedia) to fetch the latest gaming news.
  - Implement API endpoints for retrieving news articles.

- **Front-End Development**
  - Design a visually appealing layout to display gaming news (with thumbnails, titles, and short descriptions).
  - Implement clickable headlines that redirect to the full article on an external site.
  
- **Testing**
  - Test API integration for fetching news and ensuring it returns accurate data.
  - Conduct manual testing to ensure news articles display correctly and are clickable.

## Sprint Plan

| Task                                          | Assignee             | Status  | Estimation |
| --------------------------------------------- | -------------------- | ------- | ---------- |
| Database schema for user profiles             | Thanh Phat Lam       | Pending | 1 day      |
| API endpoints for profile creation            | Thanh Phat Lam       | Pending | 1 day      |
| Profile creation form (front-end)             | Thanh Phat Lam       | Pending | 1 day      |
| User authentication (sign-in functionality)   | Abdulhaadi Memisevic | Pending | 2 days     |
| Login form (front-end)                        | Abdulhaadi Memisevic | Pending | 1 day      |
| News API integration                          | Alp Sirek            | Pending | 2 days     |
| API for fetching gaming news                  | Alp Sirek            | Pending | 1 day      |
| Front-end development for news section        | Alp Sirek            | Pending | 3 days     |
| Testing and bug fixes                         | All                  | Pending | 2 days     |

## Definition of Done

1. Users can successfully create an account, log in, and edit their profile with preferences.
2. The login system is functional, and users are redirected to the home screen after successful authentication.
3. The latest gaming news is displayed with clickable headlines that redirect to the full articles.
4. All features are fully tested (API, front-end, and user flows) and bugs are resolved before the sprint ends.


## Sprint Review and Retrospective

- **Date:** November 22nd 2024
- **Agenda:**
  1. Demo completed features.
  2. Discuss challenges faced during development.
  3. Collect feedback from team members and stakeholders.
  4. Plan improvements for the next sprint.

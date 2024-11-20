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
| 5   | As a user, I want seasonal game suggestions so that I can find games relevant to current trends or holidays | Seasonal Game Recommendations   | 7          | 6        |
| 2   | As a user, I want to complete a gaming preference quiz so that I receive personalized game recommendations. | Quiz-Based Game Recommendations | 7          | 2        |

## Deliverables

1. **User Profile Creation**

   - **Functionality:**
     - Allow users to sign up using an email and password.
     - Enable users to edit their profiles with preferences (e.g., genres, favorite games, platforms).
   - **UI:**
     - Profile creation form with fields for user information.
     - User dashboard displaying profile details.

2. **Gaming Preference Quiz**

   - **Functionality:**
     - Interactive quiz with a series of questions about gaming habits and preferences.
     - Store quiz results to generate initial game recommendations.
   - **UI:**
     - Multi-step quiz interface with progress tracking.
     - Summary screen displaying quiz results and initial recommendations.

3. **Seasonal Gaming List**
   - **Functionality**
     - Display list of games that are currently on sales in steam
     - Include filter option
   - **UI**
     - A table view that displays game name, genre and price
     - Responsive design for both web and mobile

## Task Breakdown

### 1. User Profile Creation

- **Back-End Development**

  - Set up user database schema with relevant fields (e.g., user ID, email, preferences).
  - Implement API endpoints for profile creation, retrieval, and updates.

- **Front-End Development**

  - Design and develop profile creation and editing forms.
  - Build the user dashboard to display profile information.

- **Testing**
  - Write unit tests for API endpoints.
  - Conduct manual testing for the front-end.

### 2. Gaming Preference Quiz

- **Back-End Development**

  - Develop database structure for storing quiz questions and results.
  - Implement API endpoints for fetching questions and saving results.

- **Front-End Development**

  - Create a responsive and intuitive quiz interface.
  - Display results and initial recommendations.

- **Testing**
  - Validate quiz flow and data storage.
  - Ensure accurate recommendation generation.

### 3. Seasonal Gaming List

- **Back-End Development**

  - Integrate with Steam API or scrape data to fetch sale games.
  - Implement API endpoints for retrieving and filtering game sale data.

- **Front-End Development**

  - Develop a responsive table view to display game name, genre, and price.
  - Add filter options for genre and price range.

- **Testing**
  - Test integration with Steam API or scraping functionality.
  - Ensure filters work correctly and the UI is responsive.

## Sprint Plan

| Task                                         | Assignee             | Status  | Estimation |
| -------------------------------------------- | -------------------- | ------- | ---------- |
| Database schema for user profiles            | Thanh Phat Lam       | Pending | 1 day      |
| API endpoints for profile creation           | Thanh Phat Lam       | Pending | 1 day      |
| Profile creation form (front-end)            | Thanh Phat Lam       | Pending | 2 days     |
| Quiz questions database setup                | Abdulhaadi Memisevic | Pending | 1 day      |
| API for quiz functionality                   | Abdulhaadi Memisevic | Pending | 2 days     |
| Quiz front-end interface                     | Abdulhaadi Memisevic | Pending | 3 days     |
| Steam API integration for seasonal list      | Alp Sirek            | Pending | 2 days     |
| API endpoints for seasonal game list         | Alp Sirek            | Pending | 2 days     |
| Front-end development for seasonal game list | Alp Sirek            | Pending | 3 days     |
| Testing and bug fixes                        | All                  | Pending | 2 days     |

## Definition of Done

1. Users can successfully create, edit, and save their profiles.
2. The gaming preference quiz is functional, and users can view initial game recommendations after completing it.
3. A list of seasonal games is displayed, with working filters for genre and price.
4. All features are tested, and bugs are resolved before the sprint ends.

## Sprint Review and Retrospective

- **Date:** November 22nd 2024
- **Agenda:**
  1. Demo completed features.
  2. Discuss challenges faced during development.
  3. Collect feedback from team members and stakeholders.
  4. Plan improvements for the next sprint.

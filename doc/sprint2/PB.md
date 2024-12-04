
# User Stories/Product Backlog

1. **User Profile Creation**
   - **User Story**: As a user, I want to create a profile so that my preferences can be saved for future recommendations.
   - **Acceptance Criteria**:
     - User can create and edit a profile.
     - User preferences are saved in the database.
   - **Tasks**:
     - [ ] Implement user profile setup.
     - [ ] Add fields for gaming preferences (genre, platform, playstyle).
     - [ ] Store profile information in the database.

2. **Quiz-Based Game Recommendations**
   - **User Story**: As a user, I want to complete a gaming preference quiz so that I receive personalized game recommendations.
   - **Acceptance Criteria**:
     - The quiz analyzes answers and tailors game recommendations accordingly.
   - **Tasks**:
     - [ ] Design and develop a gaming preference quiz.
     - [ ] Create an algorithm for analyzing quiz responses.
     - [ ] Generate personalized game recommendations based on quiz results.

3. **Genre Exploration**
   - **User Story**: As a user, I want to explore new gaming genres so that I can diversify my gaming experience.
   - **Acceptance Criteria**:
     - Users can filter recommendations by genre.
   - **Tasks**:
     - [ ] Implement genre-based filtering options.
     - [ ] Display games by selected genre.

4. **Recommendation Feedback System**
   - **User Story**: As a user, I want to provide feedback on recommendations so that the system can refine future suggestions.
   - **Acceptance Criteria**:
     - Submitted feedback updates the recommendation algorithm.
   - **Tasks**:
     - [ ] Design and implement a feedback form.
     - [ ] Create a backend API to accept feedback and store it in the database.
     - [ ] Integrate feedback with the recommendation algorithm.
    
5. **User Sign-in**
   - **User Story**: As a user, I want to sign-in.
   - **Acceptance Criteria**:
     - Users can sign in using their email and password.
     - The system validates credentials and provides access upon successful login.
     - Errors (e.g., incorrect password) are displayed clearly.
     - Successfully logged-in users are redirected to the welcome page
     - The user should receive a confirmation email with a verification link.
     - Password should be encrypted before storing it in the database.
   - **Tasks**:
     - [x] Implement the sign-in page layout.
     - [x] Implement sign-in authentication
     - [x] Implement error handling prompts
     - [x] Implement redirect 
    
6. **Game News Exploration**
   - **User Story**: As a user, I want to sign-in.
   - **Acceptance Criteria**:
     - The main page displays a list of gaming news articles sorted by the latest publication date.
     - Each article includes a title, thumbnail, brief description, and publication date.
     - Clicking on an article opens the full content in a detailed view.
   - **Tasks**:
     - [x] Design the layout for the game news main page.
     - [x] Implement a news feed component to list articles.
     - [x] Fetch news data from the database or API and display it.
     - [x] Add links to navigate to the detailed article view.

7. **Main Page**
   - **User Story**: As a user, I want to be greeted by a home page.
   - **Acceptance Criteria**:
     - a visually appealing main page that shows the product’s name and what we do
   - **Tasks**:
     - [x] Implement the main page layout.
     - [x] Allow for redirect via home link.
     - [x] Import web logo

8. **User Sign-up**
   - **User Story**: As a user, I want to sign-up
   - **Acceptance Criteria**:
     - Users can create an account using their first name, last name, email address, and password.
     - The system validates input fields and prevents account creation with duplicate or invalid emails.
     - Passwords must meet security requirements (e.g., minimum length, complexity).
     - Errors (e.g., missing required fields, invalid email format) are displayed clearly.
     - Successfully registered users receive a confirmation email with a verification link.
     - After verification, users are redirected
     - Passwords are encrypted before being stored in the database
   - **Tasks**:
     - [x] Implement the sign-up page layout.
     - [x] Implement sign-up authentication
     - [x] Implement error handling prompts
     - [x] Implement redirect
     - [x] Implement password encryption
     - [x] Send a confirmation email with a verification link.
     




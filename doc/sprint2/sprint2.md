# Sprint Documentation

## Sprint Overview

**Sprint Goal:** Deliver core features for enhancing user interaction, providing genre-based recommendations, and a visually appealing main page to introduce the website.

**Sprint Duration:** 2 weeks (Start Date: 2024-11-23, End Date: 2024-12-03)

---

## Sprint Backlog

| ID  | User Story                                                                                              | Epic             | Estimation | Priority |
| --- | ------------------------------------------------------------------------------------------------------- | ---------------- | ---------- | -------- |
| 2   | As an user, I want to see what this website is about                                                    | Main page        | 2          | 1        |
| 4   | As a logged in user, I want the system to remember what game I click on the list on the preference list | Remember game    | 3          | 2        |
| 7   | As a user, I want to explore new gaming genres so that I can diversify my gaming experience.            | Game Exploration | 8          | 5        |

---

## Deliverables

1. A functional genre-based filtering system.
2. A database integration to remember game preferences for logged-in users.
3. A visually appealing main page introducing the product.

---

## Task Breakdown

### Genre-Based Filtering

- **Frontend:** Implement dropdown/checkbox filtering for genres.
- **Backend:** Create API endpoint to fetch games by genre.
- **UI:** Display games dynamically based on the selected genre.

### Game Preference Click Tracking

- **Frontend:** Add event listeners for capturing game clicks.
- **Backend:** Store clicked gameID along with the userID in the database.
- **Testing:** Ensure data is stored and retrievable for individual users.

### Main Page Implementation

- **Design:** Use Tailwind CSS to create a visually appealing layout.
- **Development:** Build page in `client/src/pages/indexPage.tsx`.
- **Content:** Include product name, description, and visuals.

---

## Sprint Plan

**Week 1:**

- Day 1-3: Implement genre-based filtering options (frontend and backend).
- Day 4-5: Create and test main page layout.

**Week 2:**

- Day 1-3: Implement game click tracking system (event listener, backend integration).
- Day 4-5: Testing and integration of all features.
- Day 6-7: Sprint review and retrospective.

---

## Definition of Done

1. **Genre-Based Filtering:**

   - Users can select genres, and the games displayed update accordingly.
   - Backend API supports dynamic filtering by genre.

2. **Game Preference Click Tracking:**

   - Clicks on games in the preference list are stored in the database.
   - Data retrieval works seamlessly for individual users.

3. **Main Page:**

   - The main page is visually appealing and responsive.
   - Code is located in `client/src/pages/indexPage.tsx`.

4. **Testing:**

   - All features pass unit and integration testing.
   - No major bugs or UI issues present.

5. **Documentation:**
   - Code and implemented features are documented for easy handover and future development.

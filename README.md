Proposal: Travel Packing Quiz
## 1. Website Theme
Travel Packing Quiz – a single-page interactive quiz application where users test their travel preparation skills.

## 2. Overview
The user is presented with a travel city and must select the essential packing items from a mixed list of options. After submitting their choices, the app calculates a score based on how many correct items they selected (and how many wrong items they avoided).

This is not a standard todo-list or packing checklist — it is a quiz-style game that tests the user's knowledge of what to pack for summer and activities.

## 3. Features & Functionality
### 3.1 City Selection
The page displays 5 travel cities as clickable choice.

Each choice shows: city name, emoji.

Clicking choice selects it as the current city.

### 3.2 Packing Item Selection
Once a city is selected, a list packing items appears.

It contains both correct and incorrect items for that city.

The user can click items to toggle them on/off (selected/unselected).

Selected items get a visual "checked" style.

### 3.3 Submit & Score
A "Check Packing" button submits the user's selection.

The app compares the user's choices against the correct packing list.

Scoring logic:

+1 point for each correct item selected

-1 point for each incorrect item selected (penalty)

Minimum score is 0 (cannot go negative)

The score is displayed immediately after submission.

### 3.4 Feedback
After submission:

<!-- Correctly selected items turn green

Incorrectly selected items turn red

Missing correct items are shown with a "You forgot: ..." message

A "Next Destination" button advances to the next quiz. -->

### 3.5 Score Dashboard
A persistent scoreboard shows:

<!-- Current score

Total destinations completed

Star rating (e.g., ⭐⭐⭐ for 100%, ⭐⭐ for 70%, ⭐ for 40%)

The scoreboard updates automatically after each round. -->

## 4. Component Structure(6 components)
text
Src 
├── Header
│   └── Displays title 
├── SubTitle
│   └── Displays subTitle in Header
├── Selector
│   └── Renders 5 city choices, handles selection
├── ListItems
│   └── Renders mixed item buttons with toggle selection in PackingList
├── PackingList
│   └── Renders all information about city name, city image, allPackList
└── Result
    └── Shows correct/incorrect highlights and missing items, score, progress, and star rating

## 5. Data Structure
TravelList Data
typescript
type travelType = {
  id:number,
  icon:string,
  name:string,
  img:string,
  importantList:string[],
  allPackLists:string[]
}

Example: Shanghai
id: 1,
icon: "🏙️",
name: "Shanghai",
img: "Shanghai.jpg",
importItems: [
  "Light cotton T-shirts (2 for weekend, 5 for week)",
  "Shorts (1 for weekend, 3 for week)",
  "Sunscreen SPF 50+",
  "Portable fan",
  "Umbrella (summer rain)"
]
allPackItems: same as above + [
  "Sneakers (1 pair)",
  "Sandals (1 pair)",
  "Sunglasses",
  "Hat/cap",
  "Jeans/light pants (1 for weekend / 2 for week)",
  "Underwear (3 for weekend / 7 for week)",
  "Socks (2 for weekend / 5 for week)",
  "Power bank",
  "Travel adapter",
] 

## 6. User Flow (Step-by-Step)
Page loads → User sees 5 cites + empty packing lists + score at 0

User clicks a city → Packing grid populates with a mixed list of items

User selects items (clicks to toggle) → Selected items highlight

User clicks "Submit" →

Score updates

Correct items turn green

Incorrect items turn red

Missing items shown in feedback message

## 7. Screenshots
(Placeholder – add actual screenshots here)

text
[Home page with 5 destination cards]
[Packing grid with mixed items]
[Feedback view with green/red highlights]
[Final score screen with stars]
Screenshots will be placed in public/screenshots/ and referenced here.

## 8. Technologies
Nextjs

TypeScript

Vitest / Jest + React Testing Library

tailwind

## 9. Team(Division of Work)
Component	Responsible
Header	Gabi
SubTitle Ting
Selector	Ting
PackingList Gabi
ListItems	Ting
Result	Gabi
Integration tests	Both

## 10. Testing Strategy
Unit Tests (≥20)
getByRole – testing buttons, headings, checkboxes

getAllBy... – testing multiple items in a grid

queryBy... – testing for absent items (e.g., decoys not showing as correct)

Events: click, change

Integration Tests (≥3)
Full flow: Select city→ pick items → submit → score updates 

State change: City switches → packing list updates

Scoring: Correct items add points, wrong items subtract points

## 11. Notes
The website UI will not be assessed – only the proposal and tests.

The tests should clearly communicate to another developer how the app should behave.

All tests are written in TypeScript.

## 12. Images & Data Files
City images: public/*.jpg

Data file: src/data/city.ts



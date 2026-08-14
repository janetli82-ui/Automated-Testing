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

### 3.3 Submit & Result
A "Check Packing" button submits the user's selection.

The app compares the user's choices against the correct packing list.

Scoring logic:

+1 point for each correct item selected

The result is displayed immediately after submission.

## 4. Component Structure(6 components)

``` 
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
    └── Shows correct/incorrect items, feedback
``` 

## 5. Data Structure
``` 
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
``` 
## 6. User Flow (Step-by-Step)
Page loads → User sees 5 cites + empty packing lists + submit

User clicks a city → allPackingLists with a mixed list of items

User selects items (clicks to toggle) → Selected items 

User clicks "Submit" →

Result updates

Result shown in feedback message

## 7. Screenshots
![Home page with 5 destination cards](./selectcity.png)
![Packing grid with mixed items](./packinglist.png)
![Result with feedback view](./result.png)

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
getByRole – testing buttons, img, headings, checkboxes

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



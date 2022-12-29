# Pamācība

### 1. Vispirms instalē `nodejs`:
<br/>

Lejupielādes saite: https://nodejs.org/en/download/
Kad to izdarīji, pārbaudi, vai instalēšana bija sekmīga pārbaudot `node package manager` jeb `npm` versiju ar cmd komandu:
```cmd
npm --version
```
<br/>

### 2. Tad instalē `yarn`:
Vari strādāt ar to pašu `npm`, bet labāka prakse ir izmantot `yarn`.
```cmd
npm install --global yarn
```
Pārbaudi, vai instalēšana bija sekmīga:
```cmd
yarn --version
```
<br/>

### 3. Tad instalē visas pakotnes
Ar cmd komandu:
```cmd
yarn install
```
Paies kāda minūte, kāmēr lejupielādēsies visas `nodejs` pakotnes. Viņas glabāsies mapē `node_modules`, bet viņu konfigurācijas fails ir `package.json`.

### 4. Izveidot .env failu

- Šajā failā glabājas vides mainīgie šim projektam. React bibliotēkā visiem vides mainīgajiem nosaukumā priekšā jāliek `REACT_APP`. 
- Tieši šim projektam, lai to savienot ar bekenda API portā 3001 (localhost), nepieciešams pievienot vienu vides mainīgo: `REACT_APP_API_BASE_URL=http://127.0.0.1:3001`.

000
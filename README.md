# Arkavidia 8.0 Frontend

## Tech Stack

- [React](https://reactjs.org/)
- [Next](https://nextjs.org/)
- [Tailwind](https://tailwindcss.com/)

## Setup and Installation

1. Clone repo
```
git clone https://github.com/arkavidia-hmif/arkavidia-frontend-8.0.git
```
2. Install dependencies
```
yarn
```
3. Start the app
```
yarn dev
```

## Branching and Commit Messages

Setiap membuat branch baru harus ambil base dari `main`. Untuk penamaan commit dan branch mengikuti format berikut.
Format branch: `<type>/<title>`
Format commit: `<type>: <subject>`
Penamaan menggunakan kebab case

Untuk type mengikuti semantic berikut.
- `feat`: (new feature for the user, not a new feature for build script)
- `fix`: (bug fix for the user, not a fix to a build script)
- `docs`: (changes to the documentation)
- `style`: (formatting, missing semi colons, etc; no production code change)
- `refactor`: (refactoring production code, eg. renaming a variable)
- `test`: (adding missing tests, refactoring tests; no production code change)
- `chore`: (updating grunt tasks etc; no production code change)

## Pull Request

Untuk melakukan pull request perlu mengikuti flow berikut.
1. Saat selesai mengerjakan task, perlu melakukan PR ke development dengan membuat PR dari branch pengerjaan ke `dev`
2. Setelah dilakukan testing di `dev` dan dapat approval, bisa melakukan PR ke `main` dan memberitahukan lead/kadiv/wakadiv.
3. Merge untuk branch `main` dilakukan oleh lead/kadiv/wakadiv.
4. Penamaan PR mengikuti format penamaan branch.
5. Pada deskripsi PR mohon menyertakan format berikut.
  - What PR About?
  - What trello link this PR refers to?
  - Is there any problems in this PR?
6. Mohon utamakan komunikasi, terutama untuk approval.

## Link
- [Figma](https://www.figma.com/file/DUSzWJou26pURFU7sjqd9j/ARKAVIDIA-8.0-KEREN?node-id=43%3A78)
- [Trello](https://trello.com/invite/b/apKWbaOo/ATTI8596d30521d6fdad647cc219f3f4b34aC3DC7E7D/it)
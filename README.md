# Korean Word of the Day

A resting screen for a wall panel, tablet, or spare monitor: one Korean word a day, plus a
Korean **word clock** that spells the time the way Koreans actually say it.

Two static files. No build step, no API, no keys, no network calls, no tracking. Open
`index.html` and it works — including with the internet down.

[Live site](https://cptntrps.github.io/korean-word-of-the-day/) ·
[Documentation](docs/README.md) ·
[Contributing](.github/CONTRIBUTING.md) ·
[Security reporting](.github/SECURITY.md)

## Repository layout

```text
.github/    Contribution and security guidance; existing GitHub Actions workflow
docs/       Documentation index and six generated reference documents
tests/      Existing date-pin tests
index.html  Static page
words.js    Word data
VERSION     Project version
LICENSE     MIT license
```

The six numbered documents in `docs/` regenerate nightly; read the
[documentation index](docs/README.md) before editing them. Maintainer:
[@cptntrps](https://github.com/cptntrps). Use
[issues](https://github.com/cptntrps/korean-word-of-the-day/issues) for public
questions and suggestions; use private reporting for security concerns.

## The two views

**Word of the day.** A word in Hangul, its romanization, how it sounds to an English ear,
what it means, its syllables, and a sentence using it. The word rotates deterministically
by local calendar date, and a specific date can pin a specific word.

**Word clock.** A letter grid that lights the current time as a spoken Korean phrase —
native Korean numerals for hours, Sino-Korean for minutes, the way the time is actually said.

## Run it

Open `index.html` in any browser. That's the whole deployment. For a kiosk, point the
kiosk browser at the file (or at the [live site](https://cptntrps.github.io/korean-word-of-the-day/))
at 1280×800 or similar.

## Test

```
node tests/test_korean_pin.js
```

Behavioral tests for the date-pin logic: a pinned date renders its pinned word, pins never
shift the surrounding rotation, and every pin entry is shape-complete so the screen can
never render blank panels.

## License

[MIT](LICENSE).

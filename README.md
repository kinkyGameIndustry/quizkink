# BDSM, Fetish & Kink Vragenlijst

Een statische, privacyvriendelijke vragenlijst voor volwassenen met categorieën die per stuk op basis, uitgebreid of uit gezet kunnen worden. De site draait volledig in de browser en bewaart antwoorden alleen lokaal via `localStorage`.

## Lokaal openen

Open `index.html` direct in je browser, of start een kleine lokale server:

```bash
python3 -m http.server 8000
```

Ga daarna naar `http://localhost:8000`.

## GitHub Pages

Deze repo bevat een GitHub Actions workflow voor Pages.

1. Push de repo naar GitHub.
2. Ga naar **Settings > Pages**.
3. Kies **Source: GitHub Actions**.
4. Push naar `main` of `master`; de workflow publiceert de site.

## Opslaan en offline

Antwoorden en notities worden automatisch lokaal opgeslagen op hetzelfde apparaat. Na het eerste bezoek cachet de service worker de appbestanden, zodat de vragenlijst bruikbaar blijft als de verbinding tijdelijk wegvalt.

## Privacy

Er is geen backend, analytics of externe opslag. Alles blijft op het apparaat waarop de vragenlijst wordt ingevuld.

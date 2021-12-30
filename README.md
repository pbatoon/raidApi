# FFXIV Raid API

## Data Structure
```
{
    "name": "raid name",
    "raidTier": "raid tier (such as Asphodelos)",
    "questline": "raid questline (such as Pandaemonium)",
    "shortName": "short name (detailed below)",
    "minCharLvl": min character level (number),
    "minILvl": min ilvl (number),
    "numTanks": number of tanks (number),
    "numHealers": number of healers (number),
    "numDps": number of DPS (number)
}
```

## Retrieve Raid by ID
To retrieve raid data by ID, run a GET request using `http://localhost:3000/raids/id/<_id>`. We will also use this URL to update and delete data.

## Retrieve Raid by Short Name
Raids are commonly referred to in raider vernacular by a short name consisting of the first letter of the raid questline name [^1] (eg. Eden, Deltascape, etc), the raid number within the questline, and if Savage difficulty, an 'S' denoting such. For example, the 9th raid of the Eden questline on Savage difficulty would be referred to as **E9S.** 
 
To retrieve a raid by its short name, run a GET request to `http://localhost:3000/raids/<shortName`. This will pull up the data for the raid matching that short name

## Update Raid by ID
To update raid data by ID, run a PUT request to `http://localhost:3000/raids/id/<_id>` with the updated data in JSON format.

## Delete Raid by ID
To delete raid data by ID, run a DELETE request to `http://localhost:3000/raids/id/<_id>`.

[^1]: Except for the Coils of Bahamut questline, which uses the letter 'T'
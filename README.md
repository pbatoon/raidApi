# FFXIV Raid API
A simple REST API that manages data on FFXIV raids.

## Data Structure
Element | Description | Type | Notes
------------|-------------|---------|-------------------
name | The name of the raid | string | 
raidTier | The tier of the requested raid | string | To differentiate sets within the same raid series, such as Asphodelos and Abyssos in the Pandaemonium questline.
questline | The raid questline | string | The questline that unlocks the raids, such as Pandaemonium.
shortName | The abbreviation  for the specific raid | string | Explained in further detail below. |
minCharLvl | The minimum character level to unlock the raid | integer | |
minILvl | The minimum iLvl needed to enter the raid | integer | |
numTanks | The number of tanks required for a standard queue for the raid | integer |  | 
numHealers | The number of healers required for a standard queue for the raid | integer |  |
numDPS | The number of DPS required for a standard queue of the raid | integer | 

### Short Name
Raids are commonly referred by a short name consisting of the first letter of the raid questline name, such as Eden, Omega, etc., and the raid number within the questline[^1]. Raids with a Savage difficulty are followed by an S. For example, the 9th raid of the Eden questline on Savage difficulty is referred to as **E9S**.

[^1]: Exception for the Coils of Bahamut questline, which uses "T" for "Turn." For example, the 5th raid of the Bahamut questline is **T5**.

## Retrieve Raid by ID
```
GET http://localhost:3000/raids/id/{_id}

where {_id} is the target ID of the raid.
```
**NOTE** This URL is also used to update and delete raid data.

### Sample Request
```
GET http://localhost:3000/raids/id/0104
```

### Sample Response
```
{
    "name": "The Seventh Circle (Savage)",
    "raidTier": "Abyssos",
    "questline": "Pandaemonium Savage",
    "shortName": "P7S",
    "minCharLvl": 90,
    "minILvl": 610,
    "numTanks": 2,
    "numHealers": 2,
    "numDps": 4
}
```

## Retrieve Raid by Short Name
Displays raid information by using the its short name.
```
GET http://localhost:3000/raids/{shortName}
```

### Sample Request
```
GET http://localhost:3000/raids/O4S
```

## Update Raid by ID
Updates the raid data by ID.
```
PUT http://localhost:3000/raids/id/{_id}
```

## Delete Raid by ID
Deletes raid dada by ID.
```
DELETE http://localhost3000:raids/id/{_id}
```
### Sample Request
```
DELETE http://localhost:3000/raids/id/0023
```

## Status Codes and Errors
The following table lists the returned HTTP status codes.

Code | Description | Notes 
---|---|---
**200** | OK | Request succeeded
**404** | Not Found | Raid not found
**500** | Internal Server Error |
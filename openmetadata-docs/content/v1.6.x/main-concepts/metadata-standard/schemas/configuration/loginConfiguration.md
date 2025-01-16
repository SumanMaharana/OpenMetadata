---
title: loginConfiguration
slug: /main-concepts/metadata-standard/schemas/configuration/loginconfiguration
---

# LogoConfiguration

*This schema defines the Login Configuration*

## Properties

- **`maxLoginFailAttempts`** *(integer)*: Failed Login Attempts allowed for user. Default: `3`.
- **`accessBlockTime`** *(integer)*: Access Block time for user on exceeding failed attempts(in seconds). Default: `600`.
- **`jwtTokenExpiryTime`** *(integer)*: Jwt Token Expiry time for login in seconds. Default: `3600`.


Documentation file automatically generated at 2025-01-15 09:05:25.266839+00:00.
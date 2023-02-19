# b1-sl - Beta
### Version: 0.0.1
library for connection and session management of the service layer sap b1

## Installation

```bash
npm install b1-sl
```

## Configuration
create a file .env in the root of your project with the following variables:
```javascript
SL_HOST=SRVSAP10 
SL_PORT=50000
SL_VERSION=b1s/v1/
SL_USER=manager 
SL_PASS=1234
SL_COMPANYDB=SBODemoBR
SL_LANGUAGE=29
```

## Usage

```javascript
// business partners

// import b1-sl
const { sl, BusinessPartners } = require('b1-sl');

// get all business partners
const businessPartners = await sl.get(BusinessPartners.sapObjectName);
// or
const businessPartners = await sl.get('BusinessPartners');

//===============================================================================================================
// get business partner by card code
const businessPartner = await sl.get(`${BusinessPartners.sapObjectName}('${cardCode}')`);
// or
const businessPartner = await sl.get(`BusinessPartners('${cardCode}')`);

//===============================================================================================================
// create business partner
const businessPartner = await sl.post(BusinessPartners.sapObjectName, businessPartnerData);
// or
const businessPartner = await sl.post('BusinessPartners', businessPartnerData);

//===============================================================================================================
// update business partner
const businessPartner = await sl.patch(`${BusinessPartners.sapObjectName}('${cardCode}')`, businessPartnerData);
// or
const businessPartner = await sl.patch(`BusinessPartners('${cardCode}')`, businessPartnerData);

//===============================================================================================================
// delete business partner
const businessPartner = await sl.delete(`${BusinessPartners.sapObjectName}('${cardCode}')`);
// or
const businessPartner = await sl.delete(`BusinessPartners('${cardCode}')`);

//===============================================================================================================
//other objects

// import b1-sl
const { sl } = require('b1-sl');

// get company info
const companyInfo = await sl.get('CompanyService_GetCompanyInfo');

...
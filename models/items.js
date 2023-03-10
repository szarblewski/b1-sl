const ItemAttributeGroups = require("./complex/ItemAttributeGroups");
const ItemBarCode = require("./complex/ItemBarCode");
const ItemDepreciationParameter = require("./complex/ItemDepreciationParameter");
const ItemDistributionRule = require("./complex/ItemDistributionRule");
const ItemIntrastatExtension = require("./complex/ItemIntrastatExtension");
const ItemLocalizationInfo = require("./complex/ItemLocalizationInfo");
const ItemPeriodControl = require("./complex/ItemPeriodControl");
const ItemPreferredVendor = require("./complex/ItemPreferredVendor");
const ItemPrice = require("./complex/ItemPrice");
const ItemProject = require("./complex/ItemProject");
const ItemUnitOfMeasurement = require("./complex/ItemUnitOfMeasurement");
const ItemWarehouseInfo = require("./complex/ItemWarehouseInfo");


class Items {
    constructor() {
        this.sapObjectName = 'Items';
        this.ItemCode = new String();
        this.ItemName = new String();
        this.ForeignName = new String();
        this.ItemsGroupCode = new Number();
        this.CustomsGroupCode = new Number();
        this.SalesVATGroup = new String();
        this.BarCode = new String();
        this.VatLiable = new String();
        this.PurchaseItem = new String();
        this.SalesItem = new String();
        this.InventoryItem = new String();
        this.IncomeAccount = new String();
        this.ExemptIncomeAccount = new String();
        this.ExpanseAccount = new String();
        this.Mainsupplier = new String();
        this.SupplierCatalogNo = new String();
        this.DesiredInventory = new Number();
        this.MinInventory = new Number();
        this.Picture = new String();
        this.User_Text = new String();
        this.SerialNum = new String();
        this.CommissionPercent = new Number();
        this.CommissionSum = new Number();
        this.CommissionGroup = new Number();
        this.TreeType = new String();
        this.AssetItem = new String();
        this.DataExportCode = new String();
        this.Manufacturer = new Number();
        this.QuantityOnStock = new Number();
        this.QuantityOrderedFromVendors = new Number();
        this.QuantityOrderedByCustomers = new Number();
        this.ManageSerialNumbers = new String();
        this.ManageBatchNumbers = new String();
        this.Valid = new String();
        this.ValidFrom = new String();
        this.ValidTo = new String();
        this.ValidRemarks = new String();
        this.Frozen = new String();
        this.FrozenFrom = new String();
        this.FrozenTo = new String();
        this.FrozenRemarks = new String();
        this.SalesUnit = new String();
        this.SalesItemsPerUnit = new Number();
        this.SalesPackagingUnit = new String();
        this.SalesQtyPerPackUnit = new Number();
        this.SalesUnitLength = new Number();
        this.SalesLengthUnit = new Number();
        this.SalesUnitWidth = new Number();
        this.SalesWidthUnit = new Number();
        this.SalesUnitHeight = new Number();
        this.SalesHeightUnit = new Number();
        this.SalesUnitVolume = new Number();
        this.SalesVolumeUnit = new Number();
        this.SalesUnitWeight = new Number();
        this.SalesWeightUnit = new Number();
        this.PurchaseUnit = new String();
        this.PurchaseItemsPerUnit = new Number();
        this.PurchasePackagingUnit = new String();
        this.PurchaseQtyPerPackUnit = new Number();
        this.PurchaseUnitLength = new Number();
        this.PurchaseLengthUnit = new Number();
        this.PurchaseUnitWidth = new Number();
        this.PurchaseWidthUnit = new Number();
        this.PurchaseUnitHeight = new Number();
        this.PurchaseHeightUnit = new Number();
        this.PurchaseUnitVolume = new Number();
        this.PurchaseVolumeUnit = new Number();
        this.PurchaseUnitWeight = new Number();
        this.PurchaseWeightUnit = new Number();
        this.PurchaseVATGroup = new String();
        this.SalesFactor1 = new Number();
        this.SalesFactor2 = new Number();
        this.SalesFactor3 = new Number();
        this.SalesFactor4 = new Number();
        this.PurchaseFactor1 = new Number();
        this.PurchaseFactor2 = new Number();
        this.PurchaseFactor3 = new Number();
        this.PurchaseFactor4 = new Number();
        this.MovingAveragePrice = new Number();
        this.ForeignRevenuesAccount = new String();
        this.ECRevenuesAccount = new String();
        this.ForeignExpensesAccount = new String();
        this.ECExpensesAccount = new String();
        this.AvgStdPrice = new Number();
        this.DefaultWarehouse = new String();
        this.ShipType = new Number();
        this.GLMethod = new String();
        this.TaxType = new String();
        this.MaxInventory = new Number();
        this.ManageStockByWarehouse = new String();
        this.PurchaseHeightUnit1 = new Number();
        this.PurchaseUnitHeight1 = new Number();
        this.PurchaseLengthUnit1 = new Number();
        this.PurchaseUnitLength1 = new Number();
        this.PurchaseWeightUnit1 = new Number();
        this.PurchaseUnitWeight1 = new Number();
        this.PurchaseWidthUnit1 = new Number();
        this.PurchaseUnitWidth1 = new Number();
        this.SalesHeightUnit1 = new Number();
        this.SalesUnitHeight1 = new Number();
        this.SalesLengthUnit1 = new Number();
        this.SalesUnitLength1 = new Number();
        this.SalesWeightUnit1 = new Number();
        this.SalesUnitWeight1 = new Number();
        this.SalesWidthUnit1 = new Number();
        this.SalesUnitWidth1 = new Number();
        this.ForceSelectionOfSerialNumber = new String();
        this.ManageSerialNumbersOnReleaseOnly = new String();
        this.WTLiable = new String();
        this.CostAccountingMethod = new String();
        this.SWW = new String();
        this.WarrantyTemplate = new String();
        this.IndirectTax = new String();
        this.ArTaxCode = new String();
        this.ApTaxCode = new String();
        this.BaseUnitName = new String();
        this.ItemCountryOrg = new String();
        this.IssueMethod = new String();
        this.SRIAndBatchManageMethod = new String();
        this.IsPhantom = new String();
        this.InventoryUOM = new String();
        this.PlanningSystem = new String();
        this.ProcurementMethod = new String();
        this.ComponentWarehouse = new String();
        this.OrderIntervals = new Number();
        this.OrderMultiple = new Number();
        this.LeadTime = new Number();
        this.MinOrderQuantity = new Number();
        this.ItemType = new String();
        this.ItemClass = new String();
        this.OutgoingServiceCode = new Number();
        this.IncomingServiceCode = new Number();
        this.ServiceGroup = new Number();
        this.NCMCode = new Number();
        this.MaterialType = new String();
        this.MaterialGroup = new Number();
        this.ProductSource = new String();
        this.Properties1 = new String();
        this.Properties2 = new String();
        this.Properties3 = new String();
        this.Properties4 = new String();
        this.Properties5 = new String();
        this.Properties6 = new String();
        this.Properties7 = new String();
        this.Properties8 = new String();
        this.Properties9 = new String();
        this.Properties10 = new String();
        this.Properties11 = new String();
        this.Properties12 = new String();
        this.Properties13 = new String();
        this.Properties14 = new String();
        this.Properties15 = new String();
        this.Properties16 = new String();
        this.Properties17 = new String();
        this.Properties18 = new String();
        this.Properties19 = new String();
        this.Properties20 = new String();
        this.Properties21 = new String();
        this.Properties22 = new String();
        this.Properties23 = new String();
        this.Properties24 = new String();
        this.Properties25 = new String();
        this.Properties26 = new String();
        this.Properties27 = new String();
        this.Properties28 = new String();
        this.Properties29 = new String();
        this.Properties30 = new String();
        this.Properties31 = new String();
        this.Properties32 = new String();
        this.Properties33 = new String();
        this.Properties34 = new String();
        this.Properties35 = new String();
        this.Properties36 = new String();
        this.Properties37 = new String();
        this.Properties38 = new String();
        this.Properties39 = new String();
        this.Properties40 = new String();
        this.Properties41 = new String();
        this.Properties42 = new String();
        this.Properties43 = new String();
        this.Properties44 = new String();
        this.Properties45 = new String();
        this.Properties46 = new String();
        this.Properties47 = new String();
        this.Properties48 = new String();
        this.Properties49 = new String();
        this.Properties50 = new String();
        this.Properties51 = new String();
        this.Properties52 = new String();
        this.Properties53 = new String();
        this.Properties54 = new String();
        this.Properties55 = new String();
        this.Properties56 = new String();
        this.Properties57 = new String();
        this.Properties58 = new String();
        this.Properties59 = new String();
        this.Properties60 = new String();
        this.Properties61 = new String();
        this.Properties62 = new String();
        this.Properties63 = new String();
        this.Properties64 = new String();
        this.AutoCreateSerialNumbersOnRelease = new String();
        this.DNFEntry = new Number();
        this.GTSItemSpec = new String();
        this.GTSItemTaxCategory = new String();
        this.FuelID = new Number();
        this.BeverageTableCode = new String();
        this.BeverageGroupCode = new String();
        this.BeverageCommercialBrandCode = new Number();
        this.Series = new Number();
        this.ToleranceDays = new Number();
        this.TypeOfAdvancedRules = new String();
        this.IssuePrimarilyBy = new String();
        this.NoDiscounts = new String();
        this.AssetClass = new String();
        this.AssetGroup = new String();
        this.InventoryNumber = new String();
        this.Technician = new Number();
        this.Employee = new Number();
        this.Location = new Number();
        this.AssetStatus = new String();
        this.CapitalizationDate = new String();
        this.StatisticalAsset = new String();
        this.Cession = new String();
        this.DeactivateAfterUsefulLife = new String();
        this.ManageByQuantity = new String();
        this.UoMGroupEntry = new Number();
        this.InventoryUoMEntry = new Number();
        this.DefaultSalesUoMEntry = new Number();
        this.DefaultPurchasingUoMEntry = new Number();
        this.DepreciationGroup = new String();
        this.AssetSerialNumber = new String();
        this.InventoryWeight = new Number();
        this.InventoryWeightUnit = new Number();
        this.InventoryWeight1 = new Number();
        this.InventoryWeightUnit1 = new Number();
        this.DefaultCountingUnit = new String();
        this.CountingItemsPerUnit = new Number();
        this.DefaultCountingUoMEntry = new Number();
        this.Excisable = new String();
        this.ChapterID = new Number();
        this.ScsCode = new String();
        this.SpProdType = new String();
        this.ProdStdCost = new Number();
        this.InCostRollup = new String();
        this.VirtualAssetItem = new String();
        this.EnforceAssetSerialNumbers = new String();
        this.AttachmentEntry = new Number();
        this.LinkedResource = new String();
        this.UpdateDate = new String();
        this.UpdateTime = new String();
        this.GSTRelevnt = new String();
        this.SACEntry = new Number();
        this.GSTTaxCategory = new String();
        this.ServiceCategoryEntry = new Number();
        this.CapitalGoodsOnHoldPercent = new Number();
        this.CapitalGoodsOnHoldLimit = new Number();
        this.AssessableValue = new Number();
        this.AssVal4WTR = new Number();
        this.SOIExcisable = new String();
        this.TNVED = new String();
        this.ImportedItem = new String();
        this.PricingUnit = new Number();
        this.CreateDate = new String();
        this.CreateTime = new String();
        this.ItemPrices = [ItemPrice];
        this.ItemWarehouseInfoCollection = [ItemWarehouseInfo];
        this.ItemPreferredVendors = [ItemPreferredVendor];
        this.ItemLocalizationInfos = [ItemLocalizationInfo];
        this.ItemProjects = [ItemProject];
        this.ItemDistributionRules = [ItemDistributionRule];
        this.ItemAttributeGroups = [ItemAttributeGroups];
        this.ItemDepreciationParameters = [ItemDepreciationParameter];
        this.ItemPeriodControls = [ItemPeriodControl];
        this.ItemUnitOfMeasurementCollection = [ItemUnitOfMeasurement];
        this.ItemBarCodeCollection = [ItemBarCode];
        this.ItemIntrastatExtension = new ItemIntrastatExtension();
    }
    ItemCode;
    ItemName;
    ForeignName;
    ItemsGroupCode;
    CustomsGroupCode;
    SalesVATGroup;
    BarCode;
    VatLiable;
    PurchaseItem;
    SalesItem;
    InventoryItem;
    IncomeAccount;
    ExemptIncomeAccount;
    ExpanseAccount;
    Mainsupplier;
    SupplierCatalogNo;
    DesiredInventory;
    MinInventory;
    Picture;
    User_Text;
    SerialNum;
    CommissionPercent;
    CommissionSum;
    CommissionGroup;
    TreeType;
    AssetItem;
    DataExportCode;
    Manufacturer;
    QuantityOnStock;
    QuantityOrderedFromVendors;
    QuantityOrderedByCustomers;
    ManageSerialNumbers;
    ManageBatchNumbers;
    Valid;
    ValidFrom;
    ValidTo;
    ValidRemarks;
    Frozen;
    FrozenFrom;
    FrozenTo;
    FrozenRemarks;
    SalesUnit;
    SalesItemsPerUnit;
    SalesPackagingUnit;
    SalesQtyPerPackUnit;
    SalesUnitLength;
    SalesLengthUnit;
    SalesUnitWidth;
    SalesWidthUnit;
    SalesUnitHeight;
    SalesHeightUnit;
    SalesUnitVolume;
    SalesVolumeUnit;
    SalesUnitWeight;
    SalesWeightUnit;
    PurchaseUnit;
    PurchaseItemsPerUnit;
    PurchasePackagingUnit;
    PurchaseQtyPerPackUnit;
    PurchaseUnitLength;
    PurchaseLengthUnit;
    PurchaseUnitWidth;
    PurchaseWidthUnit;
    PurchaseUnitHeight;
    PurchaseHeightUnit;
    PurchaseUnitVolume;
    PurchaseVolumeUnit;
    PurchaseUnitWeight;
    PurchaseWeightUnit;
    PurchaseVATGroup;
    SalesFactor1;
    SalesFactor2;
    SalesFactor3;
    SalesFactor4;
    PurchaseFactor1;
    PurchaseFactor2;
    PurchaseFactor3;
    PurchaseFactor4;
    MovingAveragePrice;
    ForeignRevenuesAccount;
    ECRevenuesAccount;
    ForeignExpensesAccount;
    ECExpensesAccount;
    AvgStdPrice;
    DefaultWarehouse;
    ShipType;
    GLMethod;
    TaxType;
    MaxInventory;
    ManageStockByWarehouse;
    PurchaseHeightUnit1;
    PurchaseUnitHeight1;
    PurchaseLengthUnit1;
    PurchaseUnitLength1;
    PurchaseWeightUnit1;
    PurchaseUnitWeight1;
    PurchaseWidthUnit1;
    PurchaseUnitWidth1;
    SalesHeightUnit1;
    SalesUnitHeight1;
    SalesLengthUnit1;
    SalesUnitLength1;
    SalesWeightUnit1;
    SalesUnitWeight1;
    SalesWidthUnit1;
    SalesUnitWidth1;
    ForceSelectionOfSerialNumber;
    ManageSerialNumbersOnReleaseOnly;
    WTLiable;
    CostAccountingMethod;
    SWW;
    WarrantyTemplate;
    IndirectTax;
    ArTaxCode;
    ApTaxCode;
    BaseUnitName;
    ItemCountryOrg;
    IssueMethod;
    SRIAndBatchManageMethod;
    IsPhantom;
    InventoryUOM;
    PlanningSystem;
    ProcurementMethod;
    ComponentWarehouse;
    OrderIntervals;
    OrderMultiple;
    LeadTime;
    MinOrderQuantity;
    ItemType;
    ItemClass;
    OutgoingServiceCode;
    IncomingServiceCode;
    ServiceGroup;
    NCMCode;
    MaterialType;
    MaterialGroup;
    ProductSource;
    Properties1;
    Properties2;
    Properties3;
    Properties4;
    Properties5;
    Properties6;
    Properties7;
    Properties8;
    Properties9;
    Properties10;
    Properties11;
    Properties12;
    Properties13;
    Properties14;
    Properties15;
    Properties16;
    Properties17;
    Properties18;
    Properties19;
    Properties20;
    Properties21;
    Properties22;
    Properties23;
    Properties24;
    Properties25;
    Properties26;
    Properties27;
    Properties28;
    Properties29;
    Properties30;
    Properties31;
    Properties32;
    Properties33;
    Properties34;
    Properties35;
    Properties36;
    Properties37;
    Properties38;
    Properties39;
    Properties40;
    Properties41;
    Properties42;
    Properties43;
    Properties44;
    Properties45;
    Properties46;
    Properties47;
    Properties48;
    Properties49;
    Properties50;
    Properties51;
    Properties52;
    Properties53;
    Properties54;
    Properties55;
    Properties56;
    Properties57;
    Properties58;
    Properties59;
    Properties60;
    Properties61;
    Properties62;
    Properties63;
    Properties64;
    AutoCreateSerialNumbersOnRelease;
    DNFEntry;
    GTSItemSpec;
    GTSItemTaxCategory;
    FuelID;
    BeverageTableCode;
    BeverageGroupCode;
    BeverageCommercialBrandCode;
    Series;
    ToleranceDays;
    TypeOfAdvancedRules;
    IssuePrimarilyBy;
    NoDiscounts;
    AssetClass;
    AssetGroup;
    InventoryNumber;
    Technician;
    Employee;
    Location;
    AssetStatus;
    CapitalizationDate;
    StatisticalAsset;
    Cession;
    DeactivateAfterUsefulLife;
    ManageByQuantity;
    UoMGroupEntry;
    InventoryUoMEntry;
    DefaultSalesUoMEntry;
    DefaultPurchasingUoMEntry;
    DepreciationGroup;
    AssetSerialNumber;
    InventoryWeight;
    InventoryWeightUnit;
    InventoryWeight1;
    InventoryWeightUnit1;
    DefaultCountingUnit;
    CountingItemsPerUnit;
    DefaultCountingUoMEntry;
    Excisable;
    ChapterID;
    ScsCode;
    SpProdType;
    ProdStdCost;
    InCostRollup;
    VirtualAssetItem;
    EnforceAssetSerialNumbers;
    AttachmentEntry;
    LinkedResource;
    UpdateDate;
    UpdateTime;
    GSTRelevnt;
    SACEntry;
    GSTTaxCategory;
    ServiceCategoryEntry;
    CapitalGoodsOnHoldPercent;
    CapitalGoodsOnHoldLimit;
    AssessableValue;
    AssVal4WTR;
    SOIExcisable;
    TNVED;
    ImportedItem;
    PricingUnit;
    CreateDate;
    CreateTime;
    ItemPrices;
    ItemWarehouseInfoCollection;
    ItemPreferredVendors;
    ItemLocalizationInfos;
    ItemProjects;
    ItemDistributionRules;
    ItemAttributeGroups;
    ItemDepreciationParameters;
    ItemPeriodControls;
    ItemUnitOfMeasurementCollection;
    ItemBarCodeCollection;
    ItemIntrastatExtension;
}

module.exports = Items;